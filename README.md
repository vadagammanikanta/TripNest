# 🌍 TripNest — Travel Planning & Trip Management Platform

<div align="center">

![TripNest Banner](https://img.shields.io/badge/TripNest-AI%20Powered%20Travel%20Platform-10b981?style=for-the-badge&logo=google-maps&logoColor=white)

**Plan smarter. Travel better. Collaborate effortlessly.**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-trip--nest--sand.vercel.app-10b981?style=for-the-badge)](https://trip-nest-sand.vercel.app)
[![Backend API](https://img.shields.io/badge/⚙️_Backend_API-Render-46E3B7?style=for-the-badge)](https://tripnest-backend-4epj.onrender.com)

---

[![Java](https://img.shields.io/badge/Java_21-ED8B00?style=flat&logo=openjdk&logoColor=white)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.2-6DB33F?style=flat&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React_18-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL_8-4479A1?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white)](https://render.com/)
[![Groq AI](https://img.shields.io/badge/Groq_AI-F55036?style=flat&logo=meta&logoColor=white)](https://groq.com/)

</div>

---

## 🔗 Links

| Service | Link |
|---|---|
| 🌐 **Live Application** | [https://trip-nest-sand.vercel.app](https://trip-nest-sand.vercel.app) |
| ⚙️ **REST API** | [https://tripnest-backend-4epj.onrender.com](https://tripnest-backend-4epj.onrender.com) |
| 📦 **GitHub** | [github.com/vadagammanikanta/TripNest](https://github.com/vadagammanikanta/TripNest) |

> ⚠️ The backend is hosted on Render's free tier and may take ~30 seconds to wake up on the first request.

---

## 📋 Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Architecture](#architecture)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [Environment Variables](#environment-variables)
8. [API Documentation](#api-documentation)
9. [Developer](#developer)

---

<a id="about"></a>

## 🎯 About

**TripNest** is a full-stack travel planning and trip management web application built with **React.js** and **Spring Boot**. It enables travelers to plan trips, manage budgets, collaborate with friends, and get AI-powered travel guidance — all in one place.

### What TripNest does:
- 🗺️ Plan trips with day-wise itineraries and activity scheduling
- 💰 Track budgets and expenses across categories
- 👥 Collaborate with friends and family on shared trip plans
- 📁 Organize travel documents (tickets, visas, hotel bookings)
- 🔔 Stay notified with trip reminders and budget alerts
- 🌍 Discover destinations with curated guides and maps
- 🤖 Get AI-powered travel guidance via an integrated Tourist Guide chatbot
- 🌦️ View live weather forecasts for any destination

---

<a id="features"></a>

## 🧩 Features

### 🔐 Authentication & User Management
- JWT-based stateless authentication
- Google OAuth2 Sign-In (Google Identity Services)
- Password reset via email token
- Profile management with avatar upload
- Role-based access: **Traveler**, **Group Admin**, **Administrator**

### 🗺️ Trip Management
- Create, edit, delete, and share trips
- Trip sharing via unique public token (shareable link)
- Full trip timeline and status tracking
- Day-wise itinerary creation with activity types:
  - Sightseeing, Transportation, Accommodation, Dining, Adventure, Shopping

### 💰 Budget & Expense Tracking
- Per-trip budget planning
- Expense recording with category tagging
- Category-wise breakdown: Transportation, Hotel, Food, Shopping, Entertainment, Miscellaneous
- Real-time budget gauge and overspend alerts
- Expense reports with pie charts and bar graphs
- **Group Expense Splitting** — auto-split bills among trip members with settlement views

### 👥 Group Collaboration
- Invite members by email or username
- Role management (Owner, Editor, Viewer)
- **Real-time Group Chat** per trip
- Shared itineraries and expenses

### 🌍 Destination Discovery
- Browse and search destinations
- Destination details and attraction listings
- **Interactive Map** with location markers (Leaflet.js + OpenStreetMap)
- **Live Weather Widget** powered by Open-Meteo API (no key required)

### 📁 Document Management
- Upload travel documents (PDF, images)
- Store tickets, hotel bookings, and visas per trip
- Trip PDF export (complete itinerary summary)

### 🔔 Notifications
- Trip and activity reminders
- Budget overspend alerts
- Group invitation notifications
- In-app notification bell with mark-as-read

### 📊 Analytics & Dashboards
- **Traveler Dashboard:** Upcoming trips, budget gauge, expense summary, travel statistics
- **Admin Dashboard:** User analytics, trip analytics, platform activity logs

### 🤖 AI Tourist Guide
- Powered by **Groq Cloud AI** (GPT-class LLM)
- Context-aware: knows your active trip details, budget, and expenses
- Provides tourist recommendations, food guides, and packing tips
- Live weather awareness for travel advice
- Floating chat widget accessible on every screen

---

<a id="tech-stack"></a>

## 🏛️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, React Router v6, Axios |
| **Styling** | Vanilla CSS, Custom Design System, Dark/Light Mode |
| **Maps** | Leaflet.js + React-Leaflet + OpenStreetMap |
| **Charts** | Chart.js + React-ChartJS-2 (Pie, Bar, Doughnut) |
| **Icons** | Lucide React |
| **Backend** | Spring Boot 3.2.5, Spring Security, Spring Data JPA |
| **Authentication** | JWT (JJWT 0.11.5), Google OAuth 2.0 |
| **Validation** | Spring Boot Validation (Jakarta) |
| **PDF Generation** | OpenPDF 1.3.30 |
| **API Docs** | SpringDoc OpenAPI (Swagger UI) |
| **Database (Local)** | MySQL 8 |
| **Database (Cloud)** | TiDB Serverless (MySQL-compatible) |
| **AI** | Groq Cloud API (openai/gpt-oss-120b) |
| **Weather API** | Open-Meteo + Open-Meteo Geocoding API |
| **Containerization** | Docker, Docker Compose |
| **Frontend Hosting** | Vercel |
| **Backend Hosting** | Render |

---

<a id="architecture"></a>

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User's Browser                           │
│        React SPA (Vercel CDN — trip-nest-sand.vercel.app)   │
└──────────────────────┬──────────────────────────────────────┘
                       │  /api/* proxied via vercel.json
                       ▼
┌─────────────────────────────────────────────────────────────┐
│         Spring Boot REST API (Render Free Tier)             │
│          tripnest-backend-4epj.onrender.com                 │
│  ├── Spring Security + JWT                                  │
│  ├── Google OAuth2 endpoint                                 │
│  ├── Spring Data JPA + Hibernate                            │
│  └── OpenPDF + Swagger UI                                   │
└──────────────────────┬──────────────────────────────────────┘
                       │ JDBC + TLS (sslMode=VERIFY_IDENTITY)
                       ▼
┌─────────────────────────────────────────────────────────────┐
│          TiDB Serverless (MySQL-compatible cloud DB)        │
│       gateway01.ap-southeast-1.prod.aws.tidbcloud.com       │
└─────────────────────────────────────────────────────────────┘

External APIs (called directly from the browser):
  ├── Groq Cloud API       → AI Tourist Guide chatbot
  ├── Open-Meteo API       → Live weather forecast
  └── Open-Meteo Geocoding → City coordinates lookup
```

---

<a id="project-structure"></a>

## 📁 Project Structure

```
TripNest/
├── tripnest/                              # Spring Boot Backend
│   ├── src/main/java/com/tripnest/
│   │   ├── controller/                   # REST API Controllers
│   │   ├── service/                      # Business Logic Layer
│   │   ├── repository/                   # Spring Data JPA Repositories
│   │   ├── entity/                       # JPA Entity Classes
│   │   ├── dto/                          # Request / Response DTOs
│   │   ├── security/                     # JWT + Spring Security Config
│   │   └── DataInitializer.java          # Seed data on startup
│   ├── src/main/resources/
│   │   └── application.properties        # App configuration
│   └── Dockerfile
│
├── tripnest-frontend/                     # React Frontend
│   ├── src/
│   │   ├── components/                   # Page & Feature Components
│   │   │   ├── Dashboard.js              # Main traveler dashboard
│   │   │   ├── TripList.js / TripForm.js / TripDetail.js
│   │   │   ├── ItineraryDay.js           # Day-wise itinerary
│   │   │   ├── ExpenseForm.js / ExpenseList.js / ExpenseSplits.js
│   │   │   ├── GroupChat.js              # Real-time group chat
│   │   │   ├── AiAssistant.js            # AI Tourist Guide widget
│   │   │   ├── WeatherWidget.js          # Live weather forecast
│   │   │   ├── TripMap.js                # Interactive Leaflet map
│   │   │   ├── DocumentManager.js        # File upload & management
│   │   │   ├── AnalyticsDashboard.js     # Charts & reports
│   │   │   ├── AdminDashboard.js         # Admin panel
│   │   │   ├── Profile.js                # User profile & settings
│   │   │   ├── Navbar.js / NotificationBell.js
│   │   │   ├── Login.js / Register.js / ForgotPassword.js / ResetPassword.js
│   │   │   └── PublicTripView.js         # Shareable trip page
│   │   ├── context/
│   │   │   ├── AuthContext.js            # Auth state (JWT + user)
│   │   │   └── ThemeContext.js           # Dark / Light mode
│   │   ├── services/                     # Axios API service modules
│   │   │   ├── aiGuide.service.js        # Groq AI + Weather API
│   │   │   ├── trip.service.js
│   │   │   ├── expense.service.js
│   │   │   ├── auth.service.js
│   │   │   └── ...
│   │   ├── App.js                        # Routes
│   │   └── App.css                       # Global design system
│   ├── vercel.json                       # Vercel proxy → Render backend
│   ├── nginx.conf                        # Nginx SPA config (Docker)
│   └── Dockerfile
│
├── docker-compose.yml                    # Local Docker stack
├── docker-compose.prod.yml               # Production Docker stack
├── TripNest.postman_collection.json      # Postman API collection
└── README.md
```

---

<a id="getting-started"></a>

## 🚀 Getting Started

### Prerequisites

- **Java 21**
- **Node.js 18+**
- **Docker & Docker Compose** (for containerized setup)
- **MySQL 8** (for local dev without Docker)

---

### Option 1 — Run with Docker (Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/vadagammanikanta/TripNest.git
cd TripNest

# 2. Build the React frontend
cd tripnest-frontend
npm install
npm run build
cd ..

# 3. Start all services (Backend + Frontend + MySQL)
docker compose up -d --build

# 4. Open the app
# Frontend: http://localhost:8081
# Backend:  http://localhost:8082
# Swagger:  http://localhost:8082/swagger-ui.html
```

---

### Option 2 — Run Locally (Dev Mode)

**Backend:**
```bash
cd tripnest
# Configure application.properties with your local MySQL credentials
./mvnw spring-boot:run
# API runs at http://localhost:8080
```

**Frontend:**
```bash
cd tripnest-frontend
npm install
npm start
# App runs at http://localhost:3000
```

---

<a id="environment-variables"></a>

## ⚙️ Environment Variables

Create `tripnest-frontend/.env`:

```env
REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id
REACT_APP_GROQ_API_KEY=your_groq_api_key
```

| Variable | Description | Where to get |
|---|---|---|
| `REACT_APP_GOOGLE_CLIENT_ID` | Google OAuth2 Client ID | [Google Cloud Console](https://console.cloud.google.com/) |
| `REACT_APP_GROQ_API_KEY` | Groq API key for AI Guide | [console.groq.com](https://console.groq.com/) |

> The weather API (Open-Meteo) requires **no API key**.

---

<a id="api-documentation"></a>

## 📖 API Documentation

Swagger UI is available when the backend is running:

- **Local:** `http://localhost:8080/swagger-ui.html`
- **Production:** `https://tripnest-backend-4epj.onrender.com/swagger-ui.html`

A full **Postman collection** is included at the root:
```
TripNest.postman_collection.json
```

### Key API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/auth/signin` | Login with email & password |
| `POST` | `/api/auth/signup` | Register new user |
| `POST` | `/api/auth/google` | Google OAuth2 login |
| `GET` | `/api/trips` | Get all trips for current user |
| `POST` | `/api/trips` | Create a new trip |
| `GET` | `/api/trips/{id}` | Get trip details |
| `GET` | `/api/trips/{id}/itineraries` | Get day-wise itinerary |
| `GET` | `/api/trips/{id}/expenses` | Get trip expenses |
| `POST` | `/api/trips/{id}/members` | Invite member to trip |
| `GET` | `/api/destinations` | Browse destinations |
| `GET` | `/api/notifications` | Get user notifications |

---

<a id="developer"></a>

## 👨‍💻 Developer

**V S S S Manikanta**

[![GitHub](https://img.shields.io/badge/GitHub-vadagammanikanta-181717?style=flat&logo=github)](https://github.com/vadagammanikanta)

- 🔗 **GitHub:** [github.com/vadagammanikanta](https://github.com/vadagammanikanta)
- 🚀 **Live App:** [trip-nest-sand.vercel.app](https://trip-nest-sand.vercel.app)
- 📦 **Repo:** [github.com/vadagammanikanta/TripNest](https://github.com/vadagammanikanta/TripNest)

---

<div align="center">
  <strong>Built with ❤️ by V S S S Manikanta</strong><br/><br/>
  <a href="https://trip-nest-sand.vercel.app">🚀 Try TripNest Live →</a>
</div>
