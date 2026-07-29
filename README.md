# Application Angular de gestion des emprunts

Application web de gestion des emprunts développée avec Angular et Angular Material. Elle propose une interface d'administration permettant de consulter, ajouter, modifier et supprimer des emprunts, tout en communiquant avec une API REST dédiée.

## Présentation

Cette application a été conçue pour centraliser le suivi des emprunts effectués par les abonnés. Elle fournit un tableau de bord moderne, responsive et structuré autour d'un cycle CRUD complet :

- consultation de la liste des emprunts ;
- ajout d'un nouvel emprunt ;
- modification des informations d'un emprunt ;
- suppression avec confirmation utilisateur ;
- saisie contrôlée des dates d'emprunt et de retour ;
- validation de la cohérence des dates.

## Technologies utilisées

- Angular 15
- TypeScript
- Angular Material
- RxJS
- SCSS
- Angular Router
- Tabler Icons
- API REST HTTP

## Architecture

Le projet suit une architecture Angular modulaire :

```text
src/app/
├── Emprunt/       # Composants de liste, ajout, modification et suppression
├── layouts/       # Structure du tableau de bord, en-tête et menu latéral
├── models/        # Modèles TypeScript : Emprunt, Employee et Evenement
├── services/      # Services HTTP de communication avec les API REST
├── app-routing.module.ts
└── app.module.ts
```

Le flux principal est le suivant :

```text
Composant Angular → Service HTTP → API REST → Base de données
```

## Routes principales

| Route | Fonction |
| --- | --- |
| `/Emprunt` | Afficher la liste des emprunts |
| `/Emprunt/addEmp` | Ajouter un emprunt |
| `/Emprunt/updateEmp/:id` | Modifier un emprunt |
| `/Emprunt/deleteEmp/:id` | Supprimer un emprunt |

## Modèle d'un emprunt

Un emprunt est défini par les informations suivantes :

```ts
{
  idEmprunt: number;
  abonne: string;
  date_Emprunt: Date;
  date_retourE: Date;
}
```

## API utilisée

Le service des emprunts est configuré pour communiquer avec :

```text
http://localhost:8182/api/Emprunt
```

Les opérations principales sont :

```text
GET    /findAllF
POST   /ajouterEmprunt
PUT    /UpdateEmprunt/{id}
DELETE /DeleteEmp/{id}
```

Le backend doit être démarré et accessible sur le port `8182` pour utiliser les fonctionnalités de gestion des données.

## Installation

Prérequis : Node.js et npm.

```bash
npm install
```

## Démarrage en développement

```bash
npm start
```

L'application sera disponible à l'adresse :

```text
http://localhost:4200
```

## Compilation

Pour générer une version de production :

```bash
npm run build
```

La compilation Angular a été vérifiée avec succès en configuration de développement.

## Tests

```bash
npm test
```

## Points d'amélioration prévus

- déplacer les URLs d'API dans les fichiers `environment` ;
- finaliser le filtrage de recherche des emprunts ;
- corriger la récupération d'un emprunt par identifiant ;
- compléter l'intégration des modules Employee et Evenement ;
- ajouter une gestion centralisée des erreurs HTTP ;
- renforcer les tests unitaires et les validations de formulaire.

## Licence

Projet à vocation pédagogique et applicative. La licence peut être précisée selon les besoins du projet.
