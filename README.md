# Karl API
Par : `Loïc MAES`  
Depuis le : `7 février 2023`  
Dernière mise à jour le : `12 février 2023`

## Introduction
Bienvenue sur l'API Rest de Karl. Mais, ***<span style="text-decoration:underline">Karl, c'est quoi</span> ?***
> **Karl** est une version améliorée des instances de gestion de l'Amicale CORE.  
> En effet, ayant pu constater son instabilité sur certains points, son inaccessibilité sur d'autre et son manque de scalabilité sur les derniers, nous avons décidé de nous lancer dans le développement d'une alternative plus complète, compréhensible, scalable et sécurisé que l'actuel Seb qu'utilise l'Amicale CORE.

Reprenons sur de bonnes bases pour faciliter son utilisation aux générations futures et à sa facilité de maintenance.

## Table des matières
- [Setup](#setup)
- [Codes de réponses généraux](./routes/Codes.md)
- Routes
    - [Routes classiques](./routes/Classiques.md)
    - [Authentification](./routes/Authentification.md)
        - [/auth/login](./routes/Authentification.md)
        - [/auth/reset-token](./routes/Authentification.md)
        - [/auth/validate-token](./routes/Authentification.md)
    - [Gestion des membres](./routes/Membres.md)
        - [/members](./routes/Membres.md)
        - [/members/:id](./routes/Membres.md)
    - [Gestion des utilisateurs](./routes/Utilisateurs.md)
    - [Gestion des produits](./routes/Produits.md)
    - [Gestion des transactions](./routes/Comptabilité.md)

## Setup
Commencez par cloner le répertoire ci-dessous :
```shell
git clone https://www.github.com/AmicaleCORE/Karl-API.git/ [target-name]
```

Ensuite, utiliser les commandes suivantes :
```shell
cd [target-name] # Move to your folder
npm install # Install the project dependencies
npm run start # Start the default script
```