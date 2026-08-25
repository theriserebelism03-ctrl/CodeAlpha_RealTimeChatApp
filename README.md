<div align="center">

<!-- Animated Header Banner / Dynamic Badge -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=220&section=header&text=Real-Time%20Chat%20App&fontSize=50&animation=fadeIn&fontColor=fff" width="100%" alt="Header Banner"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&pause=1000&color=36BCF7&center=true&vCenter=true&width=500&lines=Powered+by+Node.js+%2B+Socket.io;Instant+Bi-Directional+Messaging;CodeAlpha+Task+4+Submission)](https://git.io/typing-svg)

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-v18.0+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.18+-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-v4.7+-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)

</div>

---

## 🎬 Motion Preview & Demo

<div align="center">

<!-- Option A: Replace with your actual recorded GIF/MP4 loop -->
<!-- <img src="./assets/demo.gif" width="85%" alt="Application Motion Demo" /> -->

<!-- Option B: CSS/SVG Animated Visual Placeholder -->
<svg width="100%" height="160" xmlns="http://www.w3.org/2000/svg" style="background:#1e1e2f; border-radius:12px; padding:20px;">
  <style>
    .bubble { animation: pulse 2s infinite ease-in-out; }
    .dot { animation: blink 1.4s infinite both; }
    .dot2 { animation-delay: .2s; }
    .dot3 { animation-delay: .4s; }
    @keyframes pulse { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
    @keyframes blink { 0%, 80%, 100% { opacity: 0; } 40% { opacity: 1; } }
  </style>
  <rect x="20" y="20" width="220" height="40" rx="20" fill="#3b82f6" class="bubble"/>
  <text x="40" y="45" fill="#fff" font-family="sans-serif" font-size="14" font-weight="bold">User connected...</text>
  <circle cx="210" cy="40" r="4" fill="#4ade80"/>
  <rect x="20" y="80" width="300" height="50" rx="10" fill="#2d2d44"/>
  <text x="40" y="110" fill="#e2e8f0" font-family="sans-serif" font-size="14">Sending real-time message</text>
  <text x="245" y="110" fill="#60a5fa" font-family="sans-serif" font-size="18">
    <tspan class="dot">.</tspan><tspan class="dot dot2">.</tspan><tspan class="dot dot3">.</tspan>
  </text>
</svg>

</div>

---

## ⚡ Key Features

> [!NOTE]
> Engineered for **CodeAlpha Full-Stack Web Development Internship (Task 4)**.

* 🚀 **Instant WebSocket Streaming:** Ultra-low latency bi-directional messaging powered by Socket.io engine.
* 🟢 **Dynamic User Tracking:** Animated live online user list updates instantly as users enter or leave.
* 🔔 **Automated System Alerts:** Distinctly styled join/disconnect notifications with dynamic timestamps.
* 📜 **Auto-Scroll Viewport:** Auto-anchors the view container smoothly on incoming messages.

---

## 🛠️ Tech Architecture

| Layer | Component | Motion/Real-time Engine |
| :--- | :--- | :--- |
| **Backend** | Node.js & Express.js | Event Loop Broadcasts |
| **Sockets** | Socket.io v4.7 | WebSockets & Long-Polling Fallbacks |
| **Frontend** | HTML5 / CSS3 / ES6 JS | Dynamic DOM Auto-scroll & CSS Transitions |

---

## 📂 Project Structure

```text
CodeAlpha_RealTimeChatApp/
├── 📁 public/
│   └── index.html      # Styled chat interface & Socket.io client script
├── 📄 server.js         # Express server & socket event routing logic
├── 📄 package.json      # Dependencies and execution scripts
└── 📄 .gitignore        # Excluded tracking rules
