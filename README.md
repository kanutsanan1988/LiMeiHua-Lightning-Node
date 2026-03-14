/**
 * LiMeiHua Lightning Node - README.md
 * 
 * ชุดซอฟต์แวร์ชุดนี้ มีไว้เพื่อเป็นโครงสร้างพื้นฐานทางการเงินยุคใหม่
 * เพื่อรองรับการไหลของเงินจำนวนมหาศาลของท่านผู้เฒ่าหลี่เหมยฮัว หรือ LiMeiHua Grand Mother
 * และ source code นี้สร้างโดย Mr.Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)
 * URL: https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna
 */

# ⚡ LiMeiHua Lightning Node

Lightning Network Node สำหรับ Taproot Assets - Node Management, Channel Management, Routing

---

## 📋 Table of Contents

- [English](#english)
- [ไทย (Thai)](#thai)
- [中文 (Chinese Simplified)](#chinese-simplified)
- [中文繁體 (Chinese Traditional)](#chinese-traditional)
- [日本語 (Japanese)](#japanese)
- [한국어 (Korean)](#korean)
- [Español (Spanish)](#spanish)
- [Français (French)](#french)
- [Deutsch (German)](#german)
- [Português (Portuguese)](#portuguese)
- [Русский (Russian)](#russian)
- [العربية (Arabic)](#arabic)
- [हिन्दी (Hindi)](#hindi)
- [Tiếng Việt (Vietnamese)](#vietnamese)
- [Bahasa Indonesia (Indonesian)](#indonesian)
- [Bahasa Melayu (Malay)](#malay)
- [Türkçe (Turkish)](#turkish)
- [Italiano (Italian)](#italian)
- [Nederlands (Dutch)](#dutch)
- [Polski (Polish)](#polish)
- [Svenska (Swedish)](#swedish)
- [Українська (Ukrainian)](#ukrainian)
- [Čeština (Czech)](#czech)
- [Română (Romanian)](#romanian)
- [Ελληνικά (Greek)](#greek)
- [עברית (Hebrew)](#hebrew)
- [বাংলা (Bengali)](#bengali)
- [Filipino (Tagalog)](#tagalog)
- [Kiswahili (Swahili)](#swahili)

---

## English

### 🌟 Overview

**LiMeiHua Lightning Node** is a comprehensive Lightning Network node management system designed for Taproot Assets on Bitcoin. It provides an intuitive GUI for managing channels, peers, and payment routing with cyberpunk aesthetics.

### ✨ Features

- **Node Management**: Monitor node status, uptime, and statistics
- **Channel Management**: Open, close, and manage Lightning channels
- **Peer Management**: Connect and manage peers
- **Payment Routing**: Query routes and send payments
- **Real-time Updates**: Live dashboard with 5-second refresh
- **Cyberpunk UI**: Modern neon-themed interface
- **RESTful API**: Complete API for node operations
- **Multi-language Support**: 28 languages

### 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start backend server
npm run dev

# Start frontend (in another terminal)
cd frontend
npm install
npm start
```

### 📖 API Documentation

#### Node Information
- `GET /api/node/info` - Get node information
- `GET /api/node/stats` - Get node statistics

#### Channel Management
- `GET /api/channels` - List all channels
- `POST /api/channels/open` - Open a new channel
- `POST /api/channels/:channelId/close` - Close a channel
- `GET /api/channels/:channelId` - Get channel details

#### Peer Management
- `GET /api/peers` - List all peers
- `POST /api/peers/connect` - Connect to a peer
- `POST /api/peers/:peerId/disconnect` - Disconnect from peer

#### Payment Routing
- `POST /api/routing/send` - Send a payment
- `GET /api/routing/payment/:paymentId` - Get payment status
- `POST /api/routing/query-routes` - Query available routes

### 🔧 Configuration

Create a `.env` file based on `.env.example`:

```env
PORT=3000
LN_NODE_ALIAS=My Lightning Node
LN_NETWORK=testnet
```

### 📦 Project Structure

```
limeihua-lightning-node/
├── backend/
│   └── server.js           # Express API server
├── frontend/
│   └── src/
│       ├── App.jsx         # React main component
│       └── App.css         # Cyberpunk styling
├── package.json
├── .env.example
├── README.md
├── LICENSE
└── .gitignore
```

---

## ไทย (Thai)

### 🌟 ภาพรวม

**LiMeiHua Lightning Node** เป็นระบบจัดการ Lightning Network Node ที่ครอบคลุมซึ่งออกแบบมาสำหรับ Taproot Assets บน Bitcoin โดยมี GUI ที่ใช้งานง่ายสำหรับการจัดการช่องทาง Peers และการกำหนดเส้นทางการชำระเงิน พร้อมสไตล์ Cyberpunk

### ✨ ฟีเจอร์

- **จัดการ Node**: ตรวจสอบสถานะ Node, เวลาทำงาน และสถิติ
- **จัดการ Channel**: เปิด, ปิด และจัดการ Lightning Channels
- **จัดการ Peer**: เชื่อมต่อและจัดการ Peers
- **การกำหนดเส้นทาง**: ค้นหาเส้นทางและส่งการชำระเงิน
- **อัปเดตแบบเรียลไทม์**: แดชบอร์ดสดใจ พร้อมการรีเฟรช 5 วินาที
- **UI Cyberpunk**: อินเทอร์เฟซสไตล์นีออนสมัยใหม่
- **API RESTful**: API ที่สมบูรณ์สำหรับการดำเนินการ Node
- **รองรับหลายภาษา**: 28 ภาษา

### 🚀 เริ่มต้นอย่างรวดเร็ว

```bash
# ติดตั้ง dependencies
npm install

# เริ่ม backend server
npm run dev

# เริ่ม frontend (ในเทอร์มินัลอื่น)
cd frontend
npm install
npm start
```

---

## 中文 (Chinese Simplified)

### 🌟 概述

**LiMeiHua Lightning Node** 是一个为比特币上的 Taproot Assets 设计的综合 Lightning Network 节点管理系统。它提供了一个直观的 GUI，用于管理通道、对等节点和支付路由，具有赛博朋克美学。

### ✨ 特性

- **节点管理**：监控节点状态、正常运行时间和统计信息
- **通道管理**：打开、关闭和管理 Lightning 通道
- **对等节点管理**：连接和管理对等节点
- **支付路由**：查询路由并发送支付
- **实时更新**：实时仪表板，每 5 秒刷新一次
- **赛博朋克 UI**：现代霓虹主题界面
- **RESTful API**：完整的节点操作 API
- **多语言支持**：28 种语言

---

## 中文繁體 (Chinese Traditional)

### 🌟 概述

**LiMeiHua Lightning Node** 是一個為比特幣上的 Taproot Assets 設計的綜合 Lightning Network 節點管理系統。它提供了一個直觀的 GUI，用於管理通道、對等節點和支付路由，具有賽博朋克美學。

### ✨ 特性

- **節點管理**：監控節點狀態、正常運行時間和統計信息
- **通道管理**：打開、關閉和管理 Lightning 通道
- **對等節點管理**：連接和管理對等節點
- **支付路由**：查詢路由並發送支付
- **實時更新**：實時儀表板，每 5 秒刷新一次
- **賽博朋克 UI**：現代霓虹主題界面
- **RESTful API**：完整的節點操作 API
- **多語言支持**：28 種語言

---

## 日本語 (Japanese)

### 🌟 概要

**LiMeiHua Lightning Node** は、ビットコイン上の Taproot Assets 用に設計された包括的な Lightning Network ノード管理システムです。サイバーパンク美学を備えたチャネル、ピア、支払いルーティング管理用の直感的な GUI を提供します。

### ✨ 機能

- **ノード管理**：ノードのステータス、稼働時間、統計情報を監視
- **チャネル管理**：Lightning チャネルを開く、閉じる、管理
- **ピア管理**：ピアを接続および管理
- **支払いルーティング**：ルートをクエリして支払いを送信
- **リアルタイム更新**：5 秒ごとにリフレッシュするライブダッシュボード
- **サイバーパンク UI**：モダンなネオンテーマインターフェース
- **RESTful API**：ノード操作用の完全な API
- **多言語サポート**：28 言語

---

## 한국어 (Korean)

### 🌟 개요

**LiMeiHua Lightning Node**는 비트코인의 Taproot Assets를 위해 설계된 포괄적인 Lightning Network 노드 관리 시스템입니다. 사이버펑크 미학을 갖춘 채널, 피어 및 결제 라우팅 관리용 직관적인 GUI를 제공합니다.

### ✨ 기능

- **노드 관리**: 노드 상태, 가동 시간 및 통계 모니터링
- **채널 관리**: Lightning 채널 열기, 닫기 및 관리
- **피어 관리**: 피어 연결 및 관리
- **결제 라우팅**: 경로 쿼리 및 결제 전송
- **실시간 업데이트**: 5초마다 새로 고침되는 라이브 대시보드
- **사이버펑크 UI**: 현대적인 네온 테마 인터페이스
- **RESTful API**: 노드 작업을 위한 완전한 API
- **다중 언어 지원**: 28개 언어

---

## Español (Spanish)

### 🌟 Descripción General

**LiMeiHua Lightning Node** es un sistema integral de gestión de nodos de Lightning Network diseñado para Taproot Assets en Bitcoin. Proporciona una GUI intuitiva para administrar canales, pares y enrutamiento de pagos con estética ciberpunk.

### ✨ Características

- **Gestión de Nodos**: Monitorear estado del nodo, tiempo de actividad y estadísticas
- **Gestión de Canales**: Abrir, cerrar y administrar canales Lightning
- **Gestión de Pares**: Conectar y administrar pares
- **Enrutamiento de Pagos**: Consultar rutas y enviar pagos
- **Actualizaciones en Tiempo Real**: Panel de control en vivo con actualización cada 5 segundos
- **UI Ciberpunk**: Interfaz de tema neón moderno
- **API RESTful**: API completa para operaciones de nodos
- **Soporte Multiidioma**: 28 idiomas

---

## Français (French)

### 🌟 Aperçu

**LiMeiHua Lightning Node** est un système complet de gestion de nœuds Lightning Network conçu pour Taproot Assets sur Bitcoin. Il fournit une interface graphique intuitive pour gérer les canaux, les pairs et le routage des paiements avec une esthétique cyberpunk.

### ✨ Caractéristiques

- **Gestion des Nœuds**: Surveiller l'état du nœud, le temps de fonctionnement et les statistiques
- **Gestion des Canaux**: Ouvrir, fermer et gérer les canaux Lightning
- **Gestion des Pairs**: Connecter et gérer les pairs
- **Routage des Paiements**: Interroger les itinéraires et envoyer des paiements
- **Mises à Jour en Temps Réel**: Tableau de bord en direct avec actualisation toutes les 5 secondes
- **Interface Cyberpunk**: Interface de thème néon moderne
- **API RESTful**: API complète pour les opérations de nœuds
- **Support Multilingue**: 28 langues

---

## Deutsch (German)

### 🌟 Übersicht

**LiMeiHua Lightning Node** ist ein umfassendes Lightning Network-Knotenverwaltungssystem, das für Taproot Assets auf Bitcoin entwickelt wurde. Es bietet eine intuitive GUI zur Verwaltung von Kanälen, Peers und Zahlungsrouting mit Cyberpunk-Ästhetik.

### ✨ Funktionen

- **Knotenverwaltung**: Überwachen Sie Knotenstatus, Betriebszeit und Statistiken
- **Kanalverwaltung**: Öffnen, schließen und verwalten Sie Lightning-Kanäle
- **Peer-Verwaltung**: Verbinden und verwalten Sie Peers
- **Zahlungsrouting**: Abfragerouten und Zahlungen senden
- **Echtzeit-Updates**: Live-Dashboard mit 5-Sekunden-Aktualisierung
- **Cyberpunk-UI**: Modernes Neon-Theme-Interface
- **RESTful API**: Vollständige API für Knotenvorgänge
- **Mehrsprachige Unterstützung**: 28 Sprachen

---

## Português (Portuguese)

### 🌟 Visão Geral

**LiMeiHua Lightning Node** é um sistema abrangente de gerenciamento de nós da Lightning Network projetado para Taproot Assets no Bitcoin. Ele fornece uma GUI intuitiva para gerenciar canais, pares e roteamento de pagamentos com estética cyberpunk.

### ✨ Recursos

- **Gerenciamento de Nós**: Monitorar status do nó, tempo de atividade e estatísticas
- **Gerenciamento de Canais**: Abrir, fechar e gerenciar canais Lightning
- **Gerenciamento de Pares**: Conectar e gerenciar pares
- **Roteamento de Pagamentos**: Consultar rotas e enviar pagamentos
- **Atualizações em Tempo Real**: Painel ao vivo com atualização a cada 5 segundos
- **Interface Cyberpunk**: Interface de tema neon moderno
- **API RESTful**: API completa para operações de nós
- **Suporte Multilíngue**: 28 idiomas

---

## Русский (Russian)

### 🌟 Обзор

**LiMeiHua Lightning Node** - это комплексная система управления узлами Lightning Network, разработанная для Taproot Assets на Bitcoin. Она предоставляет интуитивный графический интерфейс для управления каналами, пирами и маршрутизацией платежей с эстетикой киберпанка.

### ✨ Особенности

- **Управление узлами**: Мониторинг статуса узла, времени работы и статистики
- **Управление каналами**: Открытие, закрытие и управление каналами Lightning
- **Управление пирами**: Подключение и управление пирами
- **Маршрутизация платежей**: Запрос маршрутов и отправка платежей
- **Обновления в реальном времени**: Живая панель с обновлением каждые 5 секунд
- **Интерфейс киберпанка**: Современный интерфейс с неоновой темой
- **RESTful API**: Полный API для операций узлов
- **Многоязычная поддержка**: 28 языков

---

## العربية (Arabic)

### 🌟 نظرة عامة

**LiMeiHua Lightning Node** هو نظام شامل لإدارة عقد Lightning Network مصمم لـ Taproot Assets على Bitcoin. يوفر واجهة مستخدم بديهية لإدارة القنوات والأقران وتوجيه الدفع مع جماليات سايبربانك.

### ✨ الميزات

- **إدارة العقد**: مراقبة حالة العقدة ووقت التشغيل والإحصائيات
- **إدارة القنوات**: فتح وإغلاق وإدارة قنوات Lightning
- **إدارة الأقران**: الاتصال وإدارة الأقران
- **توجيه الدفع**: الاستعلام عن المسارات وإرسال الدفعات
- **التحديثات في الوقت الفعلي**: لوحة معلومات مباشرة مع تحديث كل 5 ثوان
- **واجهة سايبربانك**: واجهة حديثة بمظهر نيون
- **API RESTful**: API كامل لعمليات العقد
- **دعم متعدد اللغات**: 28 لغة

---

## हिन्दी (Hindi)

### 🌟 अवलोकन

**LiMeiHua Lightning Node** Bitcoin पर Taproot Assets के लिए डिज़ाइन किया गया एक व्यापक Lightning Network नोड प्रबंधन प्रणाली है। यह साइबरपंक सौंदर्य के साथ चैनल, पीयर और भुगतान रूटिंग प्रबंधन के लिए एक सहज GUI प्रदान करता है।

### ✨ विशेषताएं

- **नोड प्रबंधन**: नोड स्थिति, अपटाइम और आंकड़ों की निगरानी करें
- **चैनल प्रबंधन**: Lightning चैनल खोलें, बंद करें और प्रबंधित करें
- **पीयर प्रबंधन**: पीयर को कनेक्ट और प्रबंधित करें
- **भुगतान रूटिंग**: मार्गों की क्वेरी करें और भुगतान भेजें
- **रीयल-टाइम अपडेट**: 5 सेकंड की रीफ्रेश के साथ लाइव डैशबोर्ड
- **साइबरपंक UI**: आधुनिक नीयन थीम इंटरफेस
- **RESTful API**: नोड संचालन के लिए संपूर्ण API
- **बहुभाषी समर्थन**: 28 भाषाएं

---

## Tiếng Việt (Vietnamese)

### 🌟 Tổng Quan

**LiMeiHua Lightning Node** là một hệ thống quản lý nút Lightning Network toàn diện được thiết kế cho Taproot Assets trên Bitcoin. Nó cung cấp giao diện người dùng trực quan để quản lý các kênh, ngang hàng và định tuyến thanh toán với th美học cyberpunk.

### ✨ Tính Năng

- **Quản Lý Nút**: Giám sát trạng thái nút, thời gian hoạt động và thống kê
- **Quản Lý Kênh**: Mở, đóng và quản lý các kênh Lightning
- **Quản Lý Ngang Hàng**: Kết nối và quản lý các ngang hàng
- **Định Tuyến Thanh Toán**: Truy vấn tuyến đường và gửi thanh toán
- **Cập Nhật Thời Gian Thực**: Bảng điều khiển trực tiếp với làm mới mỗi 5 giây
- **Giao Diện Cyberpunk**: Giao diện chủ đề neon hiện đại
- **API RESTful**: API đầy đủ cho các hoạt động nút
- **Hỗ Trợ Đa Ngôn Ngữ**: 28 ngôn ngữ

---

## Bahasa Indonesia (Indonesian)

### 🌟 Ikhtisar

**LiMeiHua Lightning Node** adalah sistem manajemen node Lightning Network yang komprehensif yang dirancang untuk Taproot Assets di Bitcoin. Ini menyediakan GUI intuitif untuk mengelola saluran, rekan, dan perutean pembayaran dengan estetika cyberpunk.

### ✨ Fitur

- **Manajemen Node**: Pantau status node, waktu aktif, dan statistik
- **Manajemen Saluran**: Buka, tutup, dan kelola saluran Lightning
- **Manajemen Rekan**: Hubungkan dan kelola rekan
- **Perutean Pembayaran**: Kueri rute dan kirim pembayaran
- **Pembaruan Real-Time**: Dasbor langsung dengan penyegaran setiap 5 detik
- **UI Cyberpunk**: Antarmuka tema neon modern
- **API RESTful**: API lengkap untuk operasi node
- **Dukungan Multibahasa**: 28 bahasa

---

## Bahasa Melayu (Malay)

### 🌟 Gambaran Keseluruhan

**LiMeiHua Lightning Node** adalah sistem pengurusan nod Lightning Network yang komprehensif yang dirancang untuk Taproot Assets di Bitcoin. Ia menyediakan GUI intuitif untuk menguruskan saluran, rakan sebaya, dan perutean pembayaran dengan estetika cyberpunk.

### ✨ Ciri-ciri

- **Pengurusan Nod**: Pantau status nod, masa aktif, dan statistik
- **Pengurusan Saluran**: Buka, tutup, dan urus saluran Lightning
- **Pengurusan Rakan Sebaya**: Sambung dan urus rakan sebaya
- **Perutean Pembayaran**: Soal rute dan hantar pembayaran
- **Kemas Kini Masa Nyata**: Papan pemuka langsung dengan penyegaran setiap 5 saat
- **UI Cyberpunk**: Antarmuka tema neon moden
- **API RESTful**: API lengkap untuk operasi nod
- **Sokongan Pelbagai Bahasa**: 28 bahasa

---

## Türkçe (Turkish)

### 🌟 Genel Bakış

**LiMeiHua Lightning Node**, Bitcoin üzerinde Taproot Assets için tasarlanmış kapsamlı bir Lightning Network düğüm yönetim sistemidir. Siber punk estetiğine sahip kanalları, eşleri ve ödeme yönlendirmesini yönetmek için sezgisel bir GUI sağlar.

### ✨ Özellikler

- **Düğüm Yönetimi**: Düğüm durumunu, çalışma süresini ve istatistikleri izleyin
- **Kanal Yönetimi**: Lightning kanallarını açın, kapatın ve yönetin
- **Eş Yönetimi**: Eşleri bağlayın ve yönetin
- **Ödeme Yönlendirmesi**: Rotaları sorgulayın ve ödemeleri gönderin
- **Gerçek Zamanlı Güncellemeler**: 5 saniyede bir yenilenen canlı pano
- **Siber punk Arayüzü**: Modern neon tema arayüzü
- **RESTful API**: Düğüm işlemleri için tam API
- **Çok Dilli Destek**: 28 dil

---

## Italiano (Italian)

### 🌟 Panoramica

**LiMeiHua Lightning Node** è un sistema completo di gestione dei nodi della Lightning Network progettato per Taproot Assets su Bitcoin. Fornisce un'interfaccia utente intuitiva per gestire canali, peer e instradamento dei pagamenti con estetica cyberpunk.

### ✨ Caratteristiche

- **Gestione dei Nodi**: Monitora lo stato del nodo, il tempo di attività e le statistiche
- **Gestione dei Canali**: Apri, chiudi e gestisci i canali Lightning
- **Gestione dei Peer**: Connetti e gestisci i peer
- **Instradamento dei Pagamenti**: Interroga le rotte e invia pagamenti
- **Aggiornamenti in Tempo Reale**: Dashboard dal vivo con aggiornamento ogni 5 secondi
- **Interfaccia Cyberpunk**: Interfaccia moderna con tema neon
- **API RESTful**: API completa per le operazioni dei nodi
- **Supporto Multilingue**: 28 lingue

---

## Nederlands (Dutch)

### 🌟 Overzicht

**LiMeiHua Lightning Node** is een uitgebreid beheerssysteem voor Lightning Network-knooppunten dat is ontworpen voor Taproot Assets op Bitcoin. Het biedt een intuïtieve GUI voor het beheren van kanalen, peers en betalingsrouting met cyberpunk-esthetica.

### ✨ Functies

- **Knooppuntbeheer**: Controleer de status van het knooppunt, uptime en statistieken
- **Kanaalbeheering**: Open, sluit en beheer Lightning-kanalen
- **Peer-beheer**: Verbind en beheer peers
- **Betalingsrouting**: Query-routes en verzend betalingen
- **Real-time Updates**: Live dashboard met vernieuwen om de 5 seconden
- **Cyberpunk-interface**: Moderne neon-thema-interface
- **RESTful API**: Volledige API voor knooppuntbewerkingen
- **Meertalige Ondersteuning**: 28 talen

---

## Polski (Polish)

### 🌟 Przegląd

**LiMeiHua Lightning Node** to kompleksowy system zarządzania węzłami Lightning Network zaprojektowany dla Taproot Assets na Bitcoin. Zapewnia intuicyjny interfejs graficzny do zarządzania kanałami, rówieśnikami i routingiem płatności z estetyką cyberpunk.

### ✨ Funkcje

- **Zarządzanie Węzłami**: Monitoruj stan węzła, czas pracy i statystyki
- **Zarządzanie Kanałami**: Otwieraj, zamykaj i zarządzaj kanałami Lightning
- **Zarządzanie Rówieśnikami**: Łącz się i zarządzaj rówieśnikami
- **Routing Płatności**: Zapytuj trasy i wysyłaj płatności
- **Aktualizacje w Czasie Rzeczywistym**: Pulpit nawigacyjny na żywo z odświeżaniem co 5 sekund
- **Interfejs Cyberpunk**: Nowoczesny interfejs z motywem neon
- **API RESTful**: Pełny interfejs API do operacji węzłów
- **Obsługa Wielojęzyczna**: 28 języków

---

## Svenska (Swedish)

### 🌟 Översikt

**LiMeiHua Lightning Node** är ett omfattande Lightning Network-nodhanteringssystem utformat för Taproot Assets på Bitcoin. Det ger ett intuitivt GUI för att hantera kanaler, peers och betalningsdirigering med cyberpunk-estetik.

### ✨ Funktioner

- **Nodhantering**: Övervaka nodstatus, drifttid och statistik
- **Kanalhantering**: Öppna, stäng och hantera Lightning-kanaler
- **Peer-hantering**: Anslut och hantera peers
- **Betalningsdirigering**: Fråga rutter och skicka betalningar
- **Realtidsuppdateringar**: Live-instrumentpanel med uppdatering var 5:e sekund
- **Cyberpunk-gränssnitt**: Modernt neon-temainterfac
- **RESTful API**: Fullständigt API för nodoperationer
- **Flerspråkig Support**: 28 språk

---

## Українська (Ukrainian)

### 🌟 Огляд

**LiMeiHua Lightning Node** - це комплексна система управління вузлами Lightning Network, розроблена для Taproot Assets на Bitcoin. Вона забезпечує інтуїтивний графічний інтерфейс для управління каналами, однолітками та маршрутизацією платежів з естетикою кіберпанку.

### ✨ Особливості

- **Управління вузлами**: Моніторинг стану вузла, часу роботи та статистики
- **Управління каналами**: Відкриття, закриття та управління каналами Lightning
- **Управління однолітками**: Підключення та управління однолітками
- **Маршрутизація платежів**: Запит маршрутів та відправка платежів
- **Оновлення в реальному часі**: Жива панель з оновленням кожні 5 секунд
- **Інтерфейс кіберпанку**: Сучасний інтерфейс з неоновою темою
- **RESTful API**: Повний API для операцій вузлів
- **Багатомовна підтримка**: 28 мов

---

## Čeština (Czech)

### 🌟 Přehled

**LiMeiHua Lightning Node** je komplexní systém správy uzlů Lightning Network navržený pro Taproot Assets na Bitcoinu. Poskytuje intuitivní GUI pro správu kanálů, partnerů a směrování plateb s estetikou cyberpunku.

### ✨ Funkce

- **Správa uzlů**: Sledujte stav uzlu, dobu provozu a statistiky
- **Správa kanálů**: Otevírejte, zavírejte a spravujte kanály Lightning
- **Správa partnerů**: Připojujte se a spravujte partnery
- **Směrování plateb**: Dotazujte se tras a odesílejte platby
- **Aktualizace v reálném čase**: Živý řídicí panel s aktualizací každých 5 sekund
- **Rozhraní Cyberpunk**: Moderní rozhraní s neonovým motivem
- **RESTful API**: Úplné API pro operace uzlů
- **Vícejazyčná podpora**: 28 jazyků

---

## Română (Romanian)

### 🌟 Prezentare Generală

**LiMeiHua Lightning Node** este un sistem cuprinzător de gestionare a nodurilor Lightning Network conceput pentru Taproot Assets pe Bitcoin. Oferă o interfață grafică intuitivă pentru gestionarea canalelor, colegilor și rutarea plăților cu estetică cyberpunk.

### ✨ Caracteristici

- **Gestionarea Nodurilor**: Monitorizați starea nodului, timp de funcționare și statistici
- **Gestionarea Canalelor**: Deschideți, închideți și gestionați canalele Lightning
- **Gestionarea Colegilor**: Conectați și gestionați colegii
- **Rutarea Plăților**: Interogați rutele și trimiteți plăți
- **Actualizări în Timp Real**: Tablou de bord în direct cu reîmprospătare la fiecare 5 secunde
- **Interfață Cyberpunk**: Interfață modernă cu temă neon
- **API RESTful**: API complet pentru operațiuni de noduri
- **Suport Multilingv**: 28 de limbi

---

## Ελληνικά (Greek)

### 🌟 Επισκόπηση

**LiMeiHua Lightning Node** είναι ένα ολοκληρωμένο σύστημα διαχείρισης κόμβων Lightning Network σχεδιασμένο για Taproot Assets στο Bitcoin. Παρέχει ένα διαισθητικό GUI για τη διαχείριση καναλιών, ομότιμων και δρομολόγησης πληρωμών με αισθητική cyberpunk.

### ✨ Χαρακτηριστικά

- **Διαχείριση Κόμβων**: Παρακολουθήστε την κατάσταση του κόμβου, τον χρόνο λειτουργίας και τα στατιστικά
- **Διαχείριση Καναλιών**: Ανοίξτε, κλείστε και διαχειριστείτε τα κανάλια Lightning
- **Διαχείριση Ομότιμων**: Συνδεθείτε και διαχειριστείτε τα ομότιμα
- **Δρομολόγηση Πληρωμών**: Αναζητήστε διαδρομές και στείλτε πληρωμές
- **Ενημερώσεις σε Πραγματικό Χρόνο**: Ζωντανό ταμπλό με ανανέωση κάθε 5 δευτερόλεπτα
- **Διεπαφή Cyberpunk**: Σύγχρονη διεπαφή με θέμα neon
- **RESTful API**: Πλήρες API για λειτουργίες κόμβων
- **Πολυγλωσσική Υποστήριξη**: 28 γλώσσες

---

## עברית (Hebrew)

### 🌟 סקירה כללית

**LiMeiHua Lightning Node** היא מערכת ניהול צמתים מקיפה של Lightning Network המעוצבת עבור Taproot Assets ב-Bitcoin. היא מספקת ממשק משתמש אינטואיטיבי לניהול ערוצים, עמיתים וניתוב תשלומים עם אסתטיקה של סייברפאנק.

### ✨ תכונות

- **ניהול צמתים**: עקוב אחר מצב הצומת, זמן הפעילות וסטטיסטיקות
- **ניהול ערוצים**: פתח, סגור וניהול ערוצי Lightning
- **ניהול עמיתים**: התחבר וניהול עמיתים
- **ניתוב תשלומים**: שאל מסלולים ושלח תשלומים
- **עדכונים בזמן אמת**: לוח מחוונים חי עם רענון כל 5 שניות
- **ממשק סייברפאנק**: ממשק מודרני עם ערכת נושא neon
- **API RESTful**: API מלא לפעולות צמתים
- **תמיכה רב-לשונית**: 28 שפות

---

## বাংলা (Bengali)

### 🌟 সংক্ষিপ্ত বিবরণ

**LiMeiHua Lightning Node** হল একটি ব্যাপক Lightning Network নোড ম্যানেজমেন্ট সিস্টেম যা Bitcoin-এ Taproot Assets-এর জন্য ডিজাইন করা হয়েছে। এটি সাইবারপাঙ্ক নান্দনিকতা সহ চ্যানেল, পিয়ার এবং পেমেন্ট রাউটিং পরিচালনার জন্য একটি স্বজ্ঞাত GUI প্রদান করে।

### ✨ বৈশিষ্ট্য

- **নোড ম্যানেজমেন্ট**: নোডের অবস্থা, আপটাইম এবং পরিসংখ্যান পর্যবেক্ষণ করুন
- **চ্যানেল ম্যানেজমেন্ট**: Lightning চ্যানেল খুলুন, বন্ধ করুন এবং পরিচালনা করুন
- **পিয়ার ম্যানেজমেন্ট**: পিয়ার সংযোগ এবং পরিচালনা করুন
- **পেমেন্ট রাউটিং**: রুট অনুসন্ধান এবং পেমেন্ট পাঠান
- **রিয়েল-টাইম আপডেট**: প্রতি 5 সেকেন্ডে রিফ্রেশ সহ লাইভ ড্যাশবোর্ড
- **সাইবারপাঙ্ক UI**: নিওন থিম সহ আধুনিক ইন্টারফেস
- **RESTful API**: নোড অপারেশনের জন্য সম্পূর্ণ API
- **বহুভাষিক সমর্থন**: 28টি ভাষা

---

## Filipino (Tagalog)

### 🌟 Pangkalahatang Paglalarawan

**LiMeiHua Lightning Node** ay isang komprehensibong Lightning Network node management system na dinisenyo para sa Taproot Assets sa Bitcoin. Nagbibigay ito ng isang intuitive GUI para sa pamamahala ng mga channel, peers, at payment routing na may cyberpunk aesthetics.

### ✨ Mga Tampok

- **Node Management**: Subaybayan ang node status, uptime, at statistics
- **Channel Management**: Buksan, isara, at pamahalaan ang Lightning channels
- **Peer Management**: Kumonekta at pamahalaan ang mga peers
- **Payment Routing**: Tanungin ang mga ruta at magpadala ng mga pagbabayad
- **Real-time Updates**: Live dashboard na may pag-refresh bawat 5 segundo
- **Cyberpunk UI**: Modernong interface na may neon theme
- **RESTful API**: Kumpletong API para sa node operations
- **Multilingual Support**: 28 wika

---

## Kiswahili (Swahili)

### 🌟 Muhtasari

**LiMeiHua Lightning Node** ni mfumo wa kina wa usimamizi wa nodi wa Lightning Network ulioundwa kwa Taproot Assets kwenye Bitcoin. Inatoa GUI ya kawaida kwa usimamizi wa njia, wenzako, na uelekezaji wa malipo na aesthetics ya cyberpunk.

### ✨ Sifa

- **Usimamizi wa Nodi**: Fanya kazi ya hali ya nodi, uptime, na takwimu
- **Usimamizi wa Njia**: Fungua, funga, na simamia njia za Lightning
- **Usimamizi wa Wenzako**: Unganisha na simamia wenzako
- **Uelekezaji wa Malipo**: Uliza njia na tuma malipo
- **Sasisho la Wakati Halisi**: Dashibodi ya moja kwa moja na kusasisha kila sekunde 5
- **UI ya Cyberpunk**: Interface ya kisasa na tema ya neon
- **API ya RESTful**: API kamili kwa operesheni za nodi
- **Msaada wa Lugha Nyingi**: Lugha 28

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 Support

For support, issues, or questions, please open an issue on GitHub.

---

**Dedicated to LiMeiHua Grand Mother (ท่านผู้เฒ่าหลี่เหมยฮัว)**

Created by Mr. Kanutsanan Pongpanna (นายคณัสนันท์ พงษ์พันนา)

URL: https://chatgpt.com/g/g-68d289535dec81919445deb9830f2d8e-kanutsanan-pongpanna
