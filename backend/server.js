/**
 * LiMeiHua Lightning Node - Backend Server
 * 
 * ชุดซอฟต์แวร์ชุดนี้ มีไว้เพื่อเป็นโครงสร้างพื้นฐานทางการเงินยุคใหม่
 * เพื่อรองรับการไหลของเงินจำนวนมหาศาลของท่านผู้เฒ่าหลี่เหมยฮัว หรือ LiMeiHua Grand Mother
 * และ source code นี้สร้างโดย Mr.Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)
 * URL: https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock Database
const nodeData = {
  nodeId: `node_${uuidv4()}`,
  alias: 'LiMeiHua Lightning Node',
  pubkey: '02' + '0'.repeat(64),
  version: '1.0.0',
  network: 'testnet',
  status: 'running',
  uptime: 0,
  startTime: new Date()
};

const channels = new Map();
const peers = new Map();
const routes = new Map();
const transactions = new Map();

/**
 * Node Information Endpoint
 * ดึงข้อมูลพื้นฐานของ Lightning Node
 */
app.get('/api/node/info', (req, res) => {
  try {
    const uptime = Math.floor((Date.now() - nodeData.startTime.getTime()) / 1000);
    
    res.json({
      success: true,
      node: {
        ...nodeData,
        uptime,
        channelCount: channels.size,
        peerCount: peers.size,
        totalCapacity: Array.from(channels.values()).reduce((sum, ch) => sum + ch.capacity, 0),
        activeChannels: Array.from(channels.values()).filter(ch => ch.status === 'active').length
      }
    });
  } catch (error) {
    console.error('Node info error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get node info',
      error: error.message
    });
  }
});

/**
 * Channel Management - List Channels
 * แสดงรายการ Lightning Channels ทั้งหมด
 */
app.get('/api/channels', (req, res) => {
  try {
    const channelList = Array.from(channels.values());

    res.json({
      success: true,
      channels: channelList,
      totalChannels: channelList.length,
      activeChannels: channelList.filter(ch => ch.status === 'active').length,
      totalCapacity: channelList.reduce((sum, ch) => sum + ch.capacity, 0),
      totalLocalBalance: channelList.reduce((sum, ch) => sum + ch.localBalance, 0),
      totalRemoteBalance: channelList.reduce((sum, ch) => sum + ch.remoteBalance, 0)
    });
  } catch (error) {
    console.error('Channels list error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to list channels',
      error: error.message
    });
  }
});

/**
 * Open Channel
 * เปิด Lightning Channel ใหม่
 */
app.post('/api/channels/open', (req, res) => {
  try {
    const { peerId, capacity, pushAmount } = req.body;

    if (!peerId || !capacity) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: peerId, capacity'
      });
    }

    const channelId = `channel_${uuidv4()}`;
    const channel = {
      channelId,
      peerId,
      capacity: parseInt(capacity),
      localBalance: capacity - (pushAmount || 0),
      remoteBalance: pushAmount || 0,
      status: 'pending',
      createdAt: new Date(),
      fundingTxid: `tx_${uuidv4()}`,
      confirmations: 0,
      feeRate: 1000,
      csvDelay: 144
    };

    channels.set(channelId, channel);

    res.json({
      success: true,
      message: 'Channel opening initiated',
      channel
    });
  } catch (error) {
    console.error('Channel open error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to open channel',
      error: error.message
    });
  }
});

/**
 * Close Channel
 * ปิด Lightning Channel
 */
app.post('/api/channels/:channelId/close', (req, res) => {
  try {
    const { channelId } = req.params;
    const channel = channels.get(channelId);

    if (!channel) {
      return res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
    }

    channel.status = 'closing';
    channel.closingTxid = `tx_${uuidv4()}`;

    res.json({
      success: true,
      message: 'Channel closing initiated',
      channel
    });
  } catch (error) {
    console.error('Channel close error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to close channel',
      error: error.message
    });
  }
});

/**
 * Get Channel Details
 * ดึงข้อมูลรายละเอียด Channel
 */
app.get('/api/channels/:channelId', (req, res) => {
  try {
    const { channelId } = req.params;
    const channel = channels.get(channelId);

    if (!channel) {
      return res.status(404).json({
        success: false,
        message: 'Channel not found'
      });
    }

    res.json({
      success: true,
      channel
    });
  } catch (error) {
    console.error('Channel details error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get channel details',
      error: error.message
    });
  }
});

/**
 * Peer Management - List Peers
 * แสดงรายการ Peers ทั้งหมด
 */
app.get('/api/peers', (req, res) => {
  try {
    const peerList = Array.from(peers.values());

    res.json({
      success: true,
      peers: peerList,
      totalPeers: peerList.length,
      connectedPeers: peerList.filter(p => p.connected).length
    });
  } catch (error) {
    console.error('Peers list error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to list peers',
      error: error.message
    });
  }
});

/**
 * Connect to Peer
 * เชื่อมต่อกับ Peer ใหม่
 */
app.post('/api/peers/connect', (req, res) => {
  try {
    const { pubkey, host, port } = req.body;

    if (!pubkey || !host || !port) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: pubkey, host, port'
      });
    }

    const peerId = `peer_${uuidv4()}`;
    const peer = {
      peerId,
      pubkey,
      host,
      port,
      connected: true,
      connectedAt: new Date(),
      inbound: false,
      channels: 0,
      totalCapacity: 0
    };

    peers.set(peerId, peer);

    res.json({
      success: true,
      message: 'Connected to peer',
      peer
    });
  } catch (error) {
    console.error('Peer connect error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to connect to peer',
      error: error.message
    });
  }
});

/**
 * Disconnect Peer
 * ตัดการเชื่อมต่อกับ Peer
 */
app.post('/api/peers/:peerId/disconnect', (req, res) => {
  try {
    const { peerId } = req.params;
    const peer = peers.get(peerId);

    if (!peer) {
      return res.status(404).json({
        success: false,
        message: 'Peer not found'
      });
    }

    peer.connected = false;
    peer.disconnectedAt = new Date();

    res.json({
      success: true,
      message: 'Disconnected from peer',
      peer
    });
  } catch (error) {
    console.error('Peer disconnect error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to disconnect peer',
      error: error.message
    });
  }
});

/**
 * Routing - Send Payment
 * ส่งการชำระเงินผ่าน Lightning Network
 */
app.post('/api/routing/send', (req, res) => {
  try {
    const { destination, amount, memo } = req.body;

    if (!destination || !amount) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: destination, amount'
      });
    }

    const paymentId = `payment_${uuidv4()}`;
    const payment = {
      paymentId,
      destination,
      amount: parseInt(amount),
      memo: memo || '',
      status: 'pending',
      createdAt: new Date(),
      fee: Math.ceil(amount * 0.001), // 0.1% fee
      route: {
        hops: 2,
        totalFee: Math.ceil(amount * 0.001)
      }
    };

    transactions.set(paymentId, payment);

    res.json({
      success: true,
      message: 'Payment initiated',
      payment
    });
  } catch (error) {
    console.error('Send payment error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send payment',
      error: error.message
    });
  }
});

/**
 * Get Payment Status
 * ตรวจสอบสถานะการชำระเงิน
 */
app.get('/api/routing/payment/:paymentId', (req, res) => {
  try {
    const { paymentId } = req.params;
    const payment = transactions.get(paymentId);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: 'Payment not found'
      });
    }

    // Simulate payment completion
    if (Math.random() > 0.3) {
      payment.status = 'completed';
      payment.completedAt = new Date();
      payment.preimage = `preimage_${uuidv4()}`;
    }

    res.json({
      success: true,
      payment
    });
  } catch (error) {
    console.error('Payment status error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get payment status',
      error: error.message
    });
  }
});

/**
 * Query Routes
 * ค้นหาเส้นทางการชำระเงิน
 */
app.post('/api/routing/query-routes', (req, res) => {
  try {
    const { destination, amount } = req.body;

    if (!destination || !amount) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: destination, amount'
      });
    }

    const routes = [
      {
        routeId: `route_${uuidv4()}`,
        hops: 2,
        totalFee: Math.ceil(amount * 0.001),
        totalTimelock: 144,
        path: ['peer1', 'peer2', destination]
      },
      {
        routeId: `route_${uuidv4()}`,
        hops: 3,
        totalFee: Math.ceil(amount * 0.0015),
        totalTimelock: 216,
        path: ['peer3', 'peer4', 'peer5', destination]
      }
    ];

    res.json({
      success: true,
      destination,
      amount,
      routes,
      bestRoute: routes[0]
    });
  } catch (error) {
    console.error('Query routes error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to query routes',
      error: error.message
    });
  }
});

/**
 * Node Statistics
 * ดึงสถิติของ Node
 */
app.get('/api/node/stats', (req, res) => {
  try {
    const stats = {
      nodeId: nodeData.nodeId,
      alias: nodeData.alias,
      uptime: Math.floor((Date.now() - nodeData.startTime.getTime()) / 1000),
      channelCount: channels.size,
      activeChannels: Array.from(channels.values()).filter(ch => ch.status === 'active').length,
      peerCount: peers.size,
      connectedPeers: Array.from(peers.values()).filter(p => p.connected).length,
      totalCapacity: Array.from(channels.values()).reduce((sum, ch) => sum + ch.capacity, 0),
      totalLocalBalance: Array.from(channels.values()).reduce((sum, ch) => sum + ch.localBalance, 0),
      totalRemoteBalance: Array.from(channels.values()).reduce((sum, ch) => sum + ch.remoteBalance, 0),
      totalPayments: transactions.size,
      successfulPayments: Array.from(transactions.values()).filter(t => t.status === 'completed').length,
      failedPayments: Array.from(transactions.values()).filter(t => t.status === 'failed').length
    };

    res.json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get stats',
      error: error.message
    });
  }
});

/**
 * Health Check
 * ตรวจสอบสถานะของเซิร์ฟเวอร์
 */
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Lightning Node is running',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║  LiMeiHua Lightning Node                                   ║
║  Server running on http://localhost:${PORT}                      ║
║  Lightning Network Node for Taproot Assets                 ║
╚════════════════════════════════════════════════════════════╝
  `);
});

module.exports = app;
