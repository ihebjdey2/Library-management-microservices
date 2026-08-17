<div align="center">

# Library Management Microservices

### Distributed Library Management Platform · Spring Boot · Angular · Docker

A microservices-based library management platform combining an Angular frontend with independent Spring Boot services, centralized routing, service discovery, and containerized infrastructure.

</div>

---

## Overview

This project demonstrates the design of a distributed library management system using a microservices architecture.

The platform covers multiple business domains including:

- Loans
- Books
- Reservations
- Subscriptions
- Inventory
- Events

Each domain is implemented as an independent Spring Boot service, while the Angular frontend provides the user-facing and administration interfaces.

---

## Architecture

```text
                    ┌─────────────────────┐
                    │   Angular Frontend  │
                    │      Port 4200      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    API Gateway      │
                    │      Port 8111      │
                    └──────────┬──────────┘
                               │
            ┌──────────────────┼──────────────────┐
            │                  │                  │
            ▼                  ▼                  ▼
      Loan Service       Book Service     Reservation Service
        :8189              :8183                :8184

            │                  │                  │
            ├──────────────────┼──────────────────┤
            │                  │                  │
            ▼                  ▼                  ▼
 Subscription Service   Stock Service       Event Service
       :8009              :8008                :8112

                               │
                               ▼
                    ┌─────────────────────┐
                    │  Eureka Discovery   │
                    │      Port 8761      │
                    └─────────────────────┘

                               │
                               ▼
                    ┌─────────────────────┐
                    │       MySQL         │
                    │      Port 3307      │
                    └─────────────────────┘
```

The architecture separates business responsibilities into independent services and uses Spring Cloud components for communication and service discovery.

---

## Repository Structure

```text
.
├── frontend/
│   └── angularEmprunt/
│       └── Angular application and administration interface
│
├── backend/
│   ├── api-gateway/
│   ├── discovery-server/
│   ├── emprunt-service/
│   ├── livre-service/
│   ├── reservation-service/
│   ├── abonnement-service/
│   ├── stock-service/
│   └── evenement-service/
│
├── infrastructure/
│   └── docker-compose.yml
│
└── README.md
```

Each Spring Boot microservice contains its own:

- Maven configuration
- Source code
- Application configuration
- Tests

This separation makes each business domain easier to develop, maintain, and deploy independently.

---

## Features

### Library Operations

- Loan management
- Book management
- Reservation management
- Subscription management
- Inventory management
- Event management

### Distributed Architecture

- Independent Spring Boot microservices
- Eureka service discovery
- Centralized API routing with Spring Cloud Gateway
- Separate frontend and backend layers
- Service-oriented business-domain separation

### Infrastructure

- Docker-based service execution
- Docker Compose orchestration
- MySQL persistence
- Independent service builds

### Frontend

- Angular web application
- Angular Material interface
- Responsive administration UI
- TypeScript and RxJS

---

## Tech Stack

### Frontend

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" width="42" height="42" alt="Angular" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="42" height="42" alt="TypeScript" />
</p>

**Angular 15 · TypeScript · Angular Material · RxJS**

### Backend

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" width="42" height="42" alt="Spring Boot" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" width="42" height="42" alt="Java" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" width="42" height="42" alt="Maven" />
</p>

**Spring Boot · Spring Data JPA · Spring Cloud · Maven**

### Data & Infrastructure

<p>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" width="42" height="42" alt="MySQL" />
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" width="42" height="42" alt="Docker" />
</p>

**MySQL · H2 · Docker · Docker Compose**

### Microservices

**Eureka Server · Spring Cloud Gateway · Service Discovery · API Gateway**

---

## Services

| Component | Responsibility | Port |
|---|---|---:|
| Angular Frontend | User and administration interface | `4200` |
| Eureka Discovery Server | Service registration and discovery | `8761` |
| API Gateway | Centralized routing | `8111` |
| Loan Service | Loan management | `8189` |
| Book Service | Book management | `8183` |
| Reservation Service | Reservation management | `8184` |
| Subscription Service | Subscription management | `8009` |
| Stock Service | Inventory management | `8008` |
| Event Service | Event management | `8112` |
| MySQL | Persistent database | `3307` |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ihebjdey2/Library-management-microservices.git
cd Library-management-microservices
```

---

### 2. Start the frontend

```bash
cd frontend/angularEmprunt
npm install
npm start
```

The Angular application will be available at:

```text
http://localhost:4200
```

---

### 3. Start the infrastructure

From the repository root:

```bash
cd infrastructure
docker compose up --build
```

Docker Compose starts the configured services and database infrastructure.

---

## Building a Microservice

Each Spring Boot service can be built independently.

Example:

```bash
cd backend/emprunt-service
./mvnw clean package -DskipTests
```

On Windows:

```bash
mvnw.cmd clean package -DskipTests
```

---

## Architecture Principles

The project follows several architectural principles:

- One service per business domain
- Independent microservice codebases
- Centralized API routing
- Service discovery through Eureka
- Separation between frontend and backend
- Infrastructure configuration grouped under `infrastructure/`
- No dependency on machine-specific absolute paths
- Independent service builds and deployment capabilities

---

## Engineering Concepts Demonstrated

```text
Microservices Architecture
        │
        ├── Service Discovery
        ├── API Gateway
        ├── Independent Services
        ├── Domain Separation
        ├── Database Integration
        └── Containerized Infrastructure
```

The project demonstrates practical concepts commonly used in distributed backend systems, including service decomposition, discovery, centralized routing, container orchestration, and independent service lifecycle management.

---

## Current Status

The repository contains the functional structure and core components of the platform.

Before using the project in a production environment, configuration such as:

- API URLs
- Credentials
- Secrets
- Database configuration
- Environment-specific parameters

should be externalized and managed through appropriate environment configuration.

---

## Author

**Iheb Jdey**  
Software Engineer · Full-Stack · Mobile · Applied AI

[Portfolio](https://ihebjdey.tn) ·
[LinkedIn](https://www.linkedin.com/in/jdey-iheb) ·
[GitHub](https://github.com/ihebjdey2)
