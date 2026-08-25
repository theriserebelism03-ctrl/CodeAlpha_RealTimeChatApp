# CodeAlpha Task 4: Real-Time Chat Application

A lightweight, high-performance real-time web chat application built using **Node.js**, **Express**, and **Socket.io**. This project enables instant bi-directional communication between clients with active user tracking, system notification alerts, and auto-scrolling message streams.

Developed as part of the **CodeAlpha Full-Stack Web Development Internship**.

---

## 🚀 Key Features

* **Real-Time Messaging:** Instant message delivery using WebSockets powered by Socket.io.
* **Active Users Sidebar:** Dynamically updates and displays currently connected users with live status indicators.
* **System Alerts:** Formatted broadcast notifications when users join or disconnect from the chat room.
* **Responsive 2-Column UI:** Clean desktop layout featuring a dark user panel and a focused chat area.
* **Auto-Scrolling Viewport:** Automatically scrolls down to display incoming messages in real-time.

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Real-Time Engine:** Socket.io
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla ES6)

---

## 📦 Project Structure

```text
CodeAlpha_RealTimeChatApp/
├── public/
│   └── index.html    # Frontend UI, styling, and client-side Socket.io logic
├── server.js         # Express server, Socket.io connection handling, and event routing
├── package.json      # Dependencies and execution scripts
└── .gitignore        # Ignored files (node_modules, environment variables)
