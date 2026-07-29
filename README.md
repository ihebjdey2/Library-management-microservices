# Plateforme de gestion des emprunts — Spring Boot & Angular

Plateforme professionnelle organisée en monorepo, composée d'un frontend Angular et d'un ensemble de microservices Spring Boot. L'application couvre la gestion des emprunts, des livres, des réservations, des abonnements, du stock et des événements.

## Architecture du dépôt

```text
.
├── frontend/
│   └── angularEmprunt/       # Application Angular et interface d'administration
├── backend/
│   ├── api-gateway/          # Point d'entrée HTTP des microservices
│   ├── discovery-server/     # Registre Eureka
│   ├── emprunt-service/
│   ├── livre-service/
│   ├── reservation-service/
│   ├── abonnement-service/
│   ├── stock-service/
│   └── evenement-service/
├── infrastructure/
│   └── docker-compose.yml    # Démarrage des services et de MySQL
└── README.md
```

Chaque microservice Spring Boot possède son propre `pom.xml`, son code source, sa configuration et son test. Cette séparation facilite le développement indépendant, le déploiement et la maintenance des domaines fonctionnels.

## Fonctionnalités

- gestion CRUD des emprunts ;
- gestion des livres ;
- gestion des abonnements ;
- gestion des réservations ;
- gestion du stock ;
- gestion des événements ;
- découverte des services avec Eureka ;
- routage centralisé avec Spring Cloud Gateway ;
- interface web Angular Material responsive ;
- exécution des composants avec Docker Compose.

## Technologies

- Angular 15, TypeScript, Angular Material et RxJS ;
- Spring Boot, Spring Data JPA et Spring Cloud ;
- Eureka Server et Spring Cloud Gateway ;
- Maven ;
- MySQL et H2 selon les services ;
- Docker et Docker Compose.

## Démarrage du frontend

```bash
cd frontend/angularEmprunt
npm install
npm start
```

L'interface est disponible sur `http://localhost:4200`.

## Démarrage des microservices

Pour démarrer l'ensemble de l'infrastructure :

```bash
cd infrastructure
docker compose up --build
```

Les ports principaux sont :

| Composant | Port |
| --- | ---: |
| Frontend Angular | 4200 |
| Eureka Discovery Server | 8761 |
| API Gateway | 8111 |
| Emprunt | 8189 |
| Livre | 8183 |
| Réservation | 8184 |
| Abonnement | 8009 |
| Stock | 8008 |
| Événement | 8112 |
| MySQL | 3307 |

## Compilation d'un microservice

Chaque service peut être compilé indépendamment :

```bash
cd backend/emprunt-service
./mvnw clean package -DskipTests
```

Sous Windows, utiliser `mvnw.cmd` à la place de `./mvnw`.

## Principes d'organisation

- un dossier par bounded context métier ;
- un déploiement indépendant pour chaque microservice ;
- aucune dépendance vers des chemins absolus propres à un poste de développement ;
- configuration de l'infrastructure centralisée dans `infrastructure/` ;
- frontend isolé du backend pour faciliter les pipelines CI/CD.

## État du projet

Le dépôt fournit la structure fonctionnelle et les composants principaux de la plateforme. Les URL d'API, les secrets et les paramètres d'environnement doivent être externalisés avant un déploiement de production.
