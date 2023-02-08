# Karl API - Road Map
Par : `Loïc MAES`  
Depuis le : `7 février 2023`  
Dernière mise à jour le : `8 février 2023`

## Introduction
Bienvenue sur l'API Rest de Karl. Mais, ***<span style="text-decoration:underline">Karl, c'est quoi</span> ?***.
> **Karl** est une version améliorée des instances de gestion de l'Amicale CORE.  
> En effet, ayant pu constaté son instabilité sur certains points, son inaccessibilité sur d'autre et son manque de scalabilité sur les derniers, nous avons décidé de nous lancer dans le développement d'une alternative plus complète, compréhensible, scalable et sécurisé que l'actuel Seb qu'utilise l'Amicale CORE.

Reprenons sur de bonnes bases pour faciliter son utilisation aux générations futures et à sa facilité de maintenance.

## Table des matières
- [Routes classiques](#routes-classiques)
- [Authentification](#authentification)
- [Gestion des membres](#gestion-des-membres)
- [Gestion des utilisateurs](#gestion-des-utilisateurs)
- [Gestion des produits](#gestion-des-produits)
- [Gestion des transactions](#gestion-des-transactions)
- [Comptabilité](#comptabilité)

## Routes

### Routes classiques
Les routes ci-dessous sont les routes accessible publiquement, sans permissions particulière et sans besoin d'authentification. Elle permettent notamment au•x développeur•s de vérifier la disponibilité de celle-ci ou son non fonctionnement.

#### /
`GET` : Récupération des informations de status de l'API (fonctionnement direct).

**Réponses de la route :**
> **Code 200 :**
> ```json
> {
>   "message": "Welcome in the Karl Rest API 👋"
> }
> ```

### Authentification
L'authentification est une partie cruciale de notre API puisque nous stockons des ressources sensibles notamment les données comptables, des informations utilisateurs mais aussi l'intégralité des stocks de l'Amicale.  
C'est pourquoi, pour la plupart des requêtes qui seront effectuées, il faudra être authentifié mais aussi avoir les permissions de la faire.

#### /auth/login
`POST` : Permet à un utilisateur de s'authentifier et de récupérer un token de connexion avec une durée de validité de 24h.

**Corps de la requête :**
> ```json
> {
>   "username?": "__username__",
>   "email?": "__email__",
>   "password": "__password__",
>   "stay_login": "true | false"
> }
> ```

**Réponses de la route :**
> **Code 200 :**
> ```json
> {
>   "message": "User successfully authentified.",
>   "token": "__generated_token__",
>   "reset_token?": "__generated_reset_token__",
>   "user": {
>       "code": "__user_code__",
>       "username": "__username__",
>       "first_name": "__first_name__",
>       "last_name": "__first_name__",
>       "createdAt": "__first_name__",
>       "updatedAt": "__first_name__"
>   }
> }
> ```

#### /auth/reset-token
`POST` : Permet à un utilisateur ayant un token invalide et ayant souhaité maintenir la connexion de mettre à jour son token de connexion.

**Corps de la requête :**
> ```json
> {
>   "username?": "__username__",
>   "email?": "__email__",
>   "reset_token": "__reset_token__"
> }
> ```

**Réponses de la route :**
> **Code 200 :**
> ```json
> {
>   "message": "New token successfully generated.",
>   "new_token": "__generated_token__",
>   "new_reset_token": "__generated_reset_token__"
> }
> ```
> **Code 401 :**
> ```json
> {
>   "message": "Your reset token is invalid! Login again."
> }
> ```

#### /auth/validate-token
`POST` : Validation d'un token de connexion ou d'un token de reset.

**Corps de la requête :**
> ```json
> {
>   "token": "__token__",
>   "type": "auth | reset"
> }
> ```

**Réponses de la route :**
> **Code 200 :**
> ```json
> {
>   "message": "You [auth | reset] token is valid."
> }
> ```
> **Code 401 :**
> ```json
> {
>   "message": "You [auth | reset] token is invalid! Login again."
> }
> ```

### Gestion des membres
Todo...

### Gestion des utilisateurs
Todo...

### Gestion des produits
Todo...

### Gestion des transactions
Todo...

### Comptabilité
Todo...
