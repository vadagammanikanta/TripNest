# TripNest 🧳

> A full-stack travel platform with JWT authentication and role-based access control.

## Project Structure

```
TripNest/
├── tripnest/               # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/tripnest/
│   │   │   │   ├── controller/      # REST controllers
│   │   │   │   │   ├── AuthController.java   (POST /api/auth/signin, /signup)
│   │   │   │   │   └── TestController.java   (Role-gated test endpoints)
│   │   │   │   ├── dto/             # Request/Response DTOs
│   │   │   │   │   ├── LoginRequest.java
│   │   │   │   │   ├── SignupRequest.java
│   │   │   │   │   ├── JwtResponse.java
│   │   │   │   │   └── MessageResponse.java
│   │   │   │   ├── entity/          # JPA Entities
│   │   │   │   │   ├── User.java    (users table)
│   │   │   │   │   ├── Role.java    (roles table)
│   │   │   │   │   └── ERole.java   (ROLE_TRAVELER, ROLE_AGENT, ROLE_ADMIN)
│   │   │   │   ├── repository/      # Spring Data JPA
│   │   │   │   │   ├── UserRepository.java
│   │   │   │   │   └── RoleRepository.java
│   │   │   │   └── security/
│   │   │   │       ├── WebSecurityConfig.java  (JWT filter chain, CORS, RBAC)
│   │   │   │       ├── jwt/
│   │   │   │       │   ├── JwtUtils.java           (generate/validate tokens)
│   │   │   │       │   ├── AuthTokenFilter.java    (Bearer token filter)
│   │   │   │       │   └── AuthEntryPointJwt.java  (401 handler)
│   │   │   │       └── services/
│   │   │   │           ├── UserDetailsImpl.java
│   │   │   │           └── UserDetailsServiceImpl.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       └── data.sql          (seed roles)
│   │   └── test/
│   └── pom.xml
│
└── tripnest-frontend/      # React frontend
    ├── src/
    │   ├── components/
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   └── Dashboard.js
    │   ├── services/
    │   │   ├── auth.service.js
    │   │   └── api.service.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

## User Roles

| Role           | Description                              |
|----------------|------------------------------------------|
| ROLE_TRAVELER  | Default — registered users/travelers     |
| ROLE_AGENT     | Travel agents who manage packages        |
| ROLE_ADMIN     | Platform administrators (full access)    |

## Database Schema

```sql
-- Tables auto-created by Hibernate (ddl-auto=update)

CREATE TABLE users (
  id         BIGINT PRIMARY KEY AUTO_INCREMENT,
  username   VARCHAR(20) NOT NULL UNIQUE,
  email      VARCHAR(50) NOT NULL UNIQUE,
  password   VARCHAR(120) NOT NULL,
  first_name VARCHAR(50),
  last_name  VARCHAR(50),
  phone      VARCHAR(15),
  enabled    BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE roles (
  id   INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE user_roles (
  user_id BIGINT NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Seed roles
INSERT IGNORE INTO roles(name) VALUES ('ROLE_TRAVELER');
INSERT IGNORE INTO roles(name) VALUES ('ROLE_AGENT');
INSERT IGNORE INTO roles(name) VALUES ('ROLE_ADMIN');
```

## API Endpoints

### Authentication (Public)
| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| POST   | /api/auth/signup      | Register new user      |
| POST   | /api/auth/signin      | Login, receive JWT     |

### Role-Protected
| Method | Endpoint              | Required Role          |
|--------|-----------------------|------------------------|
| GET    | /api/test/all         | Public                 |
| GET    | /api/test/traveler    | ROLE_TRAVELER          |
| GET    | /api/test/agent       | ROLE_AGENT             |
| GET    | /api/test/admin       | ROLE_ADMIN             |
| GET    | /api/test/profile     | Any authenticated user |

## Setup & Run

### Prerequisites
- Java 21
- MySQL 8+
- Node 18+
- Maven 3.9+ (or use `./mvnw`)

### Backend Setup
1. Create MySQL database:
   ```sql
   CREATE DATABASE tripnest_db;
   ```
2. Update credentials in `tripnest/src/main/resources/application.properties`
3. Run the backend:
   ```bash
   cd tripnest
   ./mvnw spring-boot:run
   ```
4. The server starts at `http://localhost:8080`

### Frontend Setup
```bash
cd tripnest-frontend
npm install
npm start
```
Opens at `http://localhost:3000`

## JWT Authentication Flow

1. User POSTs credentials to `/api/auth/signin`
2. Server authenticates, generates signed JWT (HS256, 24h expiry)
3. Client stores token in `localStorage`
4. All subsequent requests include `Authorization: Bearer <token>`
5. `AuthTokenFilter` validates token and sets SecurityContext

## Technology Stack

**Backend:**
- Spring Boot 3.2.5
- Spring Security 6
- Spring Data JPA
- MySQL 8
- JWT (JJWT 0.11.5)
- Lombok

**Frontend:**
- React 18
- React Router v6
- Axios
- CSS (no framework)
