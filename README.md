# 💬 CodeAlpha Task 4: Real-Time Chat Application

![Header Banner](https://capsule-render.vercel.app/api?type=waving&color=auto&height=180&section=header&text=Real-Time%20Chat%20App&fontSize=40&fontColor=fff)

![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=36BCF7&center=true&vCenter=true&width=500&lines=Powered+by+Node.js+%2B+Socket.io;Instant+Bi-Directional+Messaging;CodeAlpha+Task+4+Submission)

[![Node.js](https://img.shields.io/badge/Node.js-v18.0+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.18+-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-v4.7+-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)

---

## ⚡ Key Features

> **Note:** Developed for the **CodeAlpha Full-Stack Web Development Internship (Task 4)**.

* 🚀 **Instant WebSocket Messaging:** Low-latency, bi-directional event routing handled by Socket.io.
* 🟢 **Dynamic Active User Tracking:** Real-time online user directory with live presence indicators.
* 🔔 **Automated System Alerts:** Distinctly styled join/disconnect notifications with dynamic timestamps.
* 📜 **Auto-Scroll Viewport:** Auto-anchors the view container smoothly on incoming messages.

---

## 🛠️ Tech Architecture

| Layer | Component | Real-Time Protocol |
| :--- | :--- | :--- |
| **Backend** | Node.js & Express.js | Event Loop Broadcasts |
| **Sockets** | Socket.io v4.7 | WebSockets & Long-Polling |
| **Frontend** | HTML5 / CSS3 / ES6 JS | Dynamic DOM Auto-scroll |

---

## 📂 Project Structure

```text
CodeAlpha_RealTimeChatApp/
├── public/
│   └── index.html      # Styled chat interface & Socket.io client script
├── server.js         # Express server & socket event routing logic
├── package.json      # Dependencies and execution scripts
└── .gitignore        # Excluded tracking rules
