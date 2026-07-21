# 🤖 Vantage Robotics Simulator

A modern browser-based industrial robotics simulator built with **React**, **TypeScript**, **Three.js**, and **Vite**. The platform provides an interactive environment for robot visualization, forward and inverse kinematics, motion control, mission execution, and real-time robot state monitoring.

---

# 📌 Project Overview

Vantage Robotics Simulator is a web-based robotic simulation platform that enables users to interact with an industrial robotic arm directly from the browser.

The simulator combines robotics algorithms with modern web technologies to provide an intuitive interface for controlling robot joints, Cartesian movement, trajectory visualization, and mission management.

This project is suitable for robotics education, industrial automation research, and robot control visualization.

---

# ✨ Features

- 🤖 Industrial Robot Simulation
- 📐 Forward Kinematics (FK)
- 🎯 Inverse Kinematics (IK)
- 🦾 Joint Angle Control
- 📍 Cartesian Position Control
- 🕹️ Virtual Joystick Control
- 📡 Live Robot State Monitoring
- 📋 Mission Management
- 📝 Event Logging
- 🎥 Interactive 3D Robot Visualization
- 🎯 TCP Gizmo & Trail Visualization
- 📦 Robot Model Loading (URDF)
- ⚡ Real-Time Motion Updates
- 🌐 Browser-Based Simulation

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite

## Robotics

- Forward Kinematics
- Inverse Kinematics
- Jacobian Solver
- Cartesian Motion Control
- Motion Planning

## 3D Graphics

- Three.js

## State Management

- Zustand

## Development Tools

- npm
- Git
- GitHub

---

# 📂 Project Structure

```text
vantage-robotics-simulator/
│
├── public/
│   ├── stylus_arm.urdf
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── robot/
│   │   └── layout/
│   │
│   ├── core/
│   │   ├── fk/
│   │   ├── ik/
│   │   ├── math/
│   │   └── input/
│   │
│   ├── pages/
│   ├── state/
│   ├── three/
│   ├── configs/
│   ├── models/
│   └── assets/
│
├── package.json
├── vite.config.ts
├── README.md
└── .gitignore
```

---

# 🔄 System Workflow

```text
User Input
      │
      ▼
Control Panels
      │
      ▼
Motion Controller
      │
      ▼
Forward / Inverse Kinematics
      │
      ▼
Robot State Manager
      │
      ▼
Three.js Renderer
      │
      ▼
Interactive Robot Visualization
```

---

# 🖥 Core Modules

### Robot Control

- Joint Control Panel
- Cartesian Control Panel
- Virtual Joystick
- Motion Command Dispatcher
- Motion Manager

### Kinematics

- Forward Kinematics
- Inverse Kinematics
- Jacobian Calculation
- Numerical Optimization

### Visualization

- Robot Viewport
- TCP Gizmo
- TCP Trail
- Camera Controller
- Scene Manager

### State Management

- Robot Store
- Mission Store
- Mode Store
- Event Log Store

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/meherabmehu/vantage-robotics-simulator.git
```

Move into the project directory

```bash
cd vantage-robotics-simulator
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Create production build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# 🎯 Future Improvements

- Collision Detection
- Path Planning
- Trajectory Optimization
- Multi-Robot Simulation
- ROS2 Integration
- Digital Twin Support
- Physics-Based Simulation
- Industrial PLC Communication
- WebXR / VR Support

---

# 📸 Preview

You can add screenshots or GIFs demonstrating:

- Robot Dashboard
- Robot Viewport
- Joint Control Panel
- Cartesian Controller
- 3D Robot Simulation

---

# 👨‍💻 Author

**Md. Meherab Hossain Talukder**

- GitHub: https://github.com/meherabmehu
- LinkedIn: https://www.linkedin.com/in/meherab-talukder-5046a141b/
- Kaggle: https://www.kaggle.com/mdmeherabhossain

---

# 📄 License

This project is licensed under the MIT License.
