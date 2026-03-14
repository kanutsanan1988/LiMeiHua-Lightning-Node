/**
 * LiMeiHua Lightning Node - Frontend App Component
 * 
 * ชุดซอฟต์แวร์ชุดนี้ มีไว้เพื่อเป็นโครงสร้างพื้นฐานทางการเงินยุคใหม่
 * เพื่อรองรับการไหลของเงินจำนวนมหาศาลของท่านผู้เฒ่าหลี่เหมยฮัว หรือ LiMeiHua Grand Mother
 * และ source code นี้สร้างโดย Mr.Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)
 * URL: https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

// Node Info Component
const NodeInfo = ({ nodeData }) => {
  return (
    <div className="node-info-card">
      <h2>⚡ Node Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <span className="label">Node Alias:</span>
          <span className="value">{nodeData.alias}</span>
        </div>
        <div className="info-item">
          <span className="label">Status:</span>
          <span className="value status-active">{nodeData.status}</span>
        </div>
        <div className="info-item">
          <span className="label">Uptime:</span>
          <span className="value">{nodeData.uptime}s</span>
        </div>
        <div className="info-item">
          <span className="label">Channels:</span>
          <span className="value">{nodeData.channelCount}</span>
        </div>
        <div className="info-item">
          <span className="label">Peers:</span>
          <span className="value">{nodeData.peerCount}</span>
        </div>
        <div className="info-item">
          <span className="label">Total Capacity:</span>
          <span className="value">{nodeData.totalCapacity.toLocaleString()} sat</span>
        </div>
      </div>
    </div>
  );
};

// Channels Management Component
const ChannelsManager = ({ channels, onRefresh }) => {
  const [showOpenForm, setShowOpenForm] = useState(false);
  const [formData, setFormData] = useState({ peerId: '', capacity: '', pushAmount: '' });
  const [loading, setLoading] = useState(false);

  const handleOpenChannel = async () => {
    if (!formData.peerId || !formData.capacity) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${API_URL}/api/channels/open`, {
        peerId: formData.peerId,
        capacity: parseInt(formData.capacity),
        pushAmount: parseInt(formData.pushAmount) || 0
      });

      setFormData({ peerId: '', capacity: '', pushAmount: '' });
      setShowOpenForm(false);
      onRefresh();
      alert('Channel opening initiated!');
    } catch (error) {
      console.error('Error opening channel:', error);
      alert('Failed to open channel');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseChannel = async (channelId) => {
    if (!window.confirm('Are you sure you want to close this channel?')) return;

    try {
      setLoading(true);
      await axios.post(`${API_URL}/api/channels/${channelId}/close`);
      onRefresh();
      alert('Channel closing initiated!');
    } catch (error) {
      console.error('Error closing channel:', error);
      alert('Failed to close channel');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="channels-card">
      <div className="card-header">
        <h2>📡 Channel Management</h2>
        <button className="btn-primary" onClick={() => setShowOpenForm(!showOpenForm)}>
          + Open Channel
        </button>
      </div>

      {showOpenForm && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Peer ID"
            value={formData.peerId}
            onChange={(e) => setFormData({ ...formData, peerId: e.target.value })}
            className="form-input"
          />
          <input
            type="number"
            placeholder="Capacity (satoshis)"
            value={formData.capacity}
            onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            className="form-input"
          />
          <input
            type="number"
            placeholder="Push Amount (optional)"
            value={formData.pushAmount}
            onChange={(e) => setFormData({ ...formData, pushAmount: e.target.value })}
            className="form-input"
          />
          <div className="form-actions">
            <button className="btn-primary" onClick={handleOpenChannel} disabled={loading}>
              {loading ? 'Opening...' : 'Open Channel'}
            </button>
            <button className="btn-secondary" onClick={() => setShowOpenForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="channels-list">
        {channels.length === 0 ? (
          <p className="empty-state">No channels yet</p>
        ) : (
          channels.map((channel) => (
            <div key={channel.channelId} className="channel-item">
              <div className="channel-info">
                <h3>{channel.peerId}</h3>
                <div className="channel-details">
                  <span>Capacity: {channel.capacity.toLocaleString()} sat</span>
                  <span>Local: {channel.localBalance.toLocaleString()} sat</span>
                  <span>Remote: {channel.remoteBalance.toLocaleString()} sat</span>
                  <span className={`status ${channel.status}`}>{channel.status}</span>
                </div>
              </div>
              <button
                className="btn-danger"
                onClick={() => handleCloseChannel(channel.channelId)}
                disabled={loading}
              >
                Close
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Peers Management Component
const PeersManager = ({ peers, onRefresh }) => {
  const [showConnectForm, setShowConnectForm] = useState(false);
  const [formData, setFormData] = useState({ pubkey: '', host: '', port: '' });
  const [loading, setLoading] = useState(false);

  const handleConnectPeer = async () => {
    if (!formData.pubkey || !formData.host || !formData.port) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${API_URL}/api/peers/connect`, {
        pubkey: formData.pubkey,
        host: formData.host,
        port: parseInt(formData.port)
      });

      setFormData({ pubkey: '', host: '', port: '' });
      setShowConnectForm(false);
      onRefresh();
      alert('Connected to peer!');
    } catch (error) {
      console.error('Error connecting peer:', error);
      alert('Failed to connect to peer');
    } finally {
      setLoading(false);
    }
  };

  const handleDisconnectPeer = async (peerId) => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/api/peers/${peerId}/disconnect`);
      onRefresh();
      alert('Disconnected from peer!');
    } catch (error) {
      console.error('Error disconnecting peer:', error);
      alert('Failed to disconnect peer');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="peers-card">
      <div className="card-header">
        <h2>👥 Peer Management</h2>
        <button className="btn-primary" onClick={() => setShowConnectForm(!showConnectForm)}>
          + Connect Peer
        </button>
      </div>

      {showConnectForm && (
        <div className="form-container">
          <input
            type="text"
            placeholder="Public Key"
            value={formData.pubkey}
            onChange={(e) => setFormData({ ...formData, pubkey: e.target.value })}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Host"
            value={formData.host}
            onChange={(e) => setFormData({ ...formData, host: e.target.value })}
            className="form-input"
          />
          <input
            type="number"
            placeholder="Port"
            value={formData.port}
            onChange={(e) => setFormData({ ...formData, port: e.target.value })}
            className="form-input"
          />
          <div className="form-actions">
            <button className="btn-primary" onClick={handleConnectPeer} disabled={loading}>
              {loading ? 'Connecting...' : 'Connect'}
            </button>
            <button className="btn-secondary" onClick={() => setShowConnectForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="peers-list">
        {peers.length === 0 ? (
          <p className="empty-state">No peers connected</p>
        ) : (
          peers.map((peer) => (
            <div key={peer.peerId} className="peer-item">
              <div className="peer-info">
                <h3>{peer.pubkey.substring(0, 16)}...</h3>
                <div className="peer-details">
                  <span>{peer.host}:{peer.port}</span>
                  <span className={`status ${peer.connected ? 'connected' : 'disconnected'}`}>
                    {peer.connected ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
              </div>
              {peer.connected && (
                <button
                  className="btn-danger"
                  onClick={() => handleDisconnectPeer(peer.peerId)}
                  disabled={loading}
                >
                  Disconnect
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Routing Component
const Routing = ({ onRefresh }) => {
  const [formData, setFormData] = useState({ destination: '', amount: '', memo: '' });
  const [loading, setLoading] = useState(false);
  const [routes, setRoutes] = useState([]);

  const handleQueryRoutes = async () => {
    if (!formData.destination || !formData.amount) {
      alert('Please fill in destination and amount');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/api/routing/query-routes`, {
        destination: formData.destination,
        amount: parseInt(formData.amount)
      });

      setRoutes(response.data.routes);
    } catch (error) {
      console.error('Error querying routes:', error);
      alert('Failed to query routes');
    } finally {
      setLoading(false);
    }
  };

  const handleSendPayment = async () => {
    if (!formData.destination || !formData.amount) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${API_URL}/api/routing/send`, {
        destination: formData.destination,
        amount: parseInt(formData.amount),
        memo: formData.memo
      });

      setFormData({ destination: '', amount: '', memo: '' });
      setRoutes([]);
      onRefresh();
      alert('Payment sent!');
    } catch (error) {
      console.error('Error sending payment:', error);
      alert('Failed to send payment');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="routing-card">
      <h2>🔀 Payment Routing</h2>
      
      <div className="form-container">
        <input
          type="text"
          placeholder="Destination (Pubkey)"
          value={formData.destination}
          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Amount (satoshis)"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Memo (optional)"
          value={formData.memo}
          onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
          className="form-input"
        />
        <div className="form-actions">
          <button className="btn-primary" onClick={handleQueryRoutes} disabled={loading}>
            Query Routes
          </button>
          <button className="btn-success" onClick={handleSendPayment} disabled={loading || routes.length === 0}>
            {loading ? 'Sending...' : 'Send Payment'}
          </button>
        </div>
      </div>

      {routes.length > 0 && (
        <div className="routes-list">
          <h3>Available Routes:</h3>
          {routes.map((route) => (
            <div key={route.routeId} className="route-item">
              <div className="route-info">
                <span>Hops: {route.hops}</span>
                <span>Fee: {route.totalFee} sat</span>
                <span>Timelock: {route.totalTimelock}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main App Component
export default function App() {
  const [nodeData, setNodeData] = useState(null);
  const [channels, setChannels] = useState([]);
  const [peers, setPeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    try {
      const [nodeRes, channelsRes, peersRes] = await Promise.all([
        axios.get(`${API_URL}/api/node/info`),
        axios.get(`${API_URL}/api/channels`),
        axios.get(`${API_URL}/api/peers`)
      ]);

      setNodeData(nodeRes.data.node);
      setChannels(channelsRes.data.channels);
      setPeers(peersRes.data.peers);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading Lightning Node...</div>;
  }

  return (
    <div className="app-container">
      <div className="app-background">
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
        <div className="glow glow-3"></div>
      </div>

      <div className="app-content">
        <header className="app-header">
          <h1>⚡ LiMeiHua Lightning Node</h1>
          <p className="subtitle">Lightning Network Node for Taproot Assets</p>
        </header>

        <nav className="tabs">
          <button
            className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`tab ${activeTab === 'channels' ? 'active' : ''}`}
            onClick={() => setActiveTab('channels')}
          >
            Channels
          </button>
          <button
            className={`tab ${activeTab === 'peers' ? 'active' : ''}`}
            onClick={() => setActiveTab('peers')}
          >
            Peers
          </button>
          <button
            className={`tab ${activeTab === 'routing' ? 'active' : ''}`}
            onClick={() => setActiveTab('routing')}
          >
            Routing
          </button>
        </nav>

        <div className="tab-content">
          {activeTab === 'overview' && nodeData && <NodeInfo nodeData={nodeData} />}
          {activeTab === 'channels' && (
            <ChannelsManager channels={channels} onRefresh={loadData} />
          )}
          {activeTab === 'peers' && (
            <PeersManager peers={peers} onRefresh={loadData} />
          )}
          {activeTab === 'routing' && <Routing onRefresh={loadData} />}
        </div>
      </div>

      <footer className="app-footer">
        <p>🚀 LiMeiHua Lightning Node | Dedicated to LiMeiHua Grand Mother</p>
      </footer>
    </div>
  );
}
