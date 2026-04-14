# NexusAI Startup Analysis Platform

A full-stack AI-driven platform for enterprise startup validation, financial modeling, and risk mitigation.

## 📁 Project Structure

This project is separated into two main microservices:

- **[frontend/](./frontend)**: The React + Vite application (Dashboard, UI, 3D Layers).
- **[backend/](./backend)**: The Node.js + Express API (AI Engine, Model Orchestration).

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18+)
- API Keys for **Groq** and **OpenAI** (configured in `.env`)

### 2. Installation
To install dependencies for both the frontend and backend simultaneously, run from the root:
```bash
npm run install:all
```

### 3. Running the Platform
To launch both services together with a single command:
```bash
npm run start:all
```

### 4. Direct Access
- **Frontend Dashboard**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5001](http://localhost:5001)

## 🧠 Core Features
- **Progressive Analytics**: State-based UI unlocking after analysis.
- **Hybrid AI Models**: Integrated LLM with simulated XGBoost/LSTM logic.
- **Enterprise Monitoring**: Live Logs, OmniGuard, and CI/CD pipelines.
- **Supply Chain Intelligence**: Dynamic logistics health monitoring.
