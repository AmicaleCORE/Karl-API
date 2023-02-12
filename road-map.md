# Karl API - Road Map
Par : `Loïc MAES`  
Depuis le : `7 février 2023`  
Dernière mise à jour le : `8 février 2023`

## Introduction
Bienvenue sur l'API Rest de Karl. Mais, ***<span style="text-decoration:underline">Karl, c'est quoi</span> ?***
> **Karl** est une version améliorée des instances de gestion de l'Amicale CORE.  
> En effet, ayant pu constater son instabilité sur certains points, son inaccessibilité sur d'autre et son manque de scalabilité sur les derniers, nous avons décidé de nous lancer dans le développement d'une alternative plus complète, compréhensible, scalable et sécurisé que l'actuel Seb qu'utilise l'Amicale CORE.

Reprenons sur de bonnes bases pour faciliter son utilisation aux générations futures et à sa facilité de maintenance.

## Table des matières
- [Codes de réponses généraux](#codes-de-réponses-généraux)
- [Routes](#routes)
  - [Routes classiques](#routes-classiques)
  - [Authentification](#authentification)
    - [/auth/login](#authlogin)
    - [/auth/reset-token](#authreset-token)
    - [/auth/validate-token](#authvalidate-token)
  - [Gestion des membres](#gestion-des-membres)
    - [/members](#members)
    - [/members/:id](#members--id)
  - [Gestion des utilisateurs](#gestion-des-utilisateurs)
  - [Gestion des produits](#gestion-des-produits)
  - [Gestion des transactions](#gestion-des-transactions)
  - [Comptabilité](#comptabilité)

## Codes de réponses généraux
Toutes les routes renvoient un message à l'envoyeur lui permettant de connaître le status du traitement de sa demande.  
Voici les réponses que toutes les routes sont susceptibles de renvoyer.

> **Code 401 :** Utilisateur non authentifié.
> ```json
> {
>   "message": "Missing token or invalid token was provided!"
> }
> ```
> ---
> **Code 403 :** Utilisateur non autorisé.
> ```json
> {
>   "message": "You don't have the right permission: permission '__permission__' required!"
> }
> ```
> ---
> **Code 500 :** Erreur serveur.
> ```json
> {
>   "message": "Internal server error!"
> }
> ```

## Routes

### Routes classiques
Les routes ci-dessous sont les routes accessibles publiquement, sans permissions particulières et sans besoin d'authentification. Elles permettent notamment au•x développeur•s de vérifier la disponibilité de celle-ci ou son non-fonctionnement.

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
L'authentification est une partie cruciale de notre API puisque nous stockons des ressources sensibles notamment les données comptables, des informations utilisateurs, mais aussi l'intégralité des stocks de l'Amicale.  
C'est pourquoi, pour la plupart des requêtes qui seront effectuées, il faudra être authentifié, mais aussi avoir les permissions de la faire.

#### /auth/login
`POST` : Permet à un utilisateur de s'authentifier et de récupérer un token de connexion avec une durée de validité de h24.

**Corps de la requête :**
> ```json
> {
>   "username?": "__username__",
>   "email?": "__email__",
>   "password": "__password__",
>   "stay_login": "true | false"
> }
> ```

**Réponse de la route :**
> **Code 200 :** Utilisateur authentifié.
> ```json
> {
>   "message": "User successfully authenticated.",
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
> **Code 200 :** Nouveau jeton d'authentification généré.
> ```json
> {
>   "message": "New token successfully generated.",
>   "new_token": "__generated_token__",
>   "new_reset_token": "__generated_reset_token__"
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
> **Code 200 :** Jeton d'authentification valide.
> ```json
> {
>   "message": "Your [auth | reset] token is valid."
> }
> ```

### Gestion des membres
Les membres sont la représentation virtuelle d'une personne physique nous permettant de lui attribuer toutes sortes d'opérations ou de critères comme :
- Transactions
- Compte personnel
- Dépenses
- Adhérent (oui ou non),
- etc...

#### /members/
`GET` : Récupérer tous les membres enregistrés dans la base de données ainsi que leurs informations primaires.

Permission : Voir les membres (`see_members`)

**Réponses de la route :**
> **Code 200 :** Liste des membres récupérée.
> ```json
> {
>   "message": "Members list has been recovered!",
>   "users": [
>     {
>       "id": "__user_id__",
>       "discord_id": "__discord_id__",
>       "first_name": "__first_name__",
>       "last_name": "__last_name__",
>       "membership_date": "__membership_date__",
>       "createdAt": "__created_at_date__",
>       "updatedAt": "__updated_at_date__"
>     },
>     {...},
>     {...},
>     {...}
>   ]
> }
> ```
> ---
> **Code 206 :** Aucun membre enregistré.
---
`POST`: Enregistrer un membre dans la base de données

Permission : Créer un membre (`create_member`)

**Corps de la requête :**
> ```json
> {
>   "discord_id": "__discord_id__",
>   "first_name": "__first_name__",
>   "last_name": "__last_name__"
> }
> ```

**Réponse de la route :**
> **Code 200 :**
> ```json
> {
>   "message": "Member created!",
>   "user": {
>       "id": "__id__",
>       "discord_id": "__discord_id__",
>       "first_name": "__first_name__",
>       "last_name": "__last_name__",
>       "membership_date": null,
>       "createdAt": "__created_at__",
>       "updatedAt": "__updated_at__"
>   }
> }
> ```

#### /members/:id
`GET` : Récupération des informations d'un membre ciblé par son identifiant (`id`).

Permission : Récupération d'un membre (`recover-member`).

**Réponses de la route :**
> **Code 200 :** Le membre a été récupéré.
> ```json
> {
>   "message": "Member recovered",
>   "user": {
>       "id": "__id__",
>       "discord_id": "__discord_id__",
>       "first_name": "__first_name__",
>       "last_name": "__last_name__",
>       "membership_date": "__membership_date__",
>       "createdAt": "__created_at__",
>       "updatedAt": "__updated_at__"
>   }
> }
> ```
---
`PUT` : Modifier un membre ciblé par son identifiant (`id`).

Permission : Modification d'un membre (`update-membre`).

**Corps de la requête :**
> ```json
> {
>   "discord_id?": "__discord_id__",
>   "first_name?": "__first_name__",
>   "last_name?": "__last_name__",
>   "membership_date?": "__membership_date__"
> }
> ```

**Réponse de la requête :**
> **Code 200 :** Membre mis à jour.
> ```json
> {
>   "message": "Member has been updated!",
>   "user": {
>       "id": "__id__",
>       "discord_id": "__discord_id__",
>       "first_name": "__first_name__",
>       "last_name": "__last_name__",
>       "membership_date": "__membership_date__",
>       "createdAt": "__created_at__",
>       "updatedAt": "__updated_at__"
>   }
> }
> ```
---
`DELETE` : Supprimer un membre ciblé par son identifiant (`id`).

Permission : Supprimer un membre (`delete-member`)

**Réponse de la route :**
> **Code 200 :** Membre supprimé.
> ```json
> {
>   "message": "Member has been deleted.",
>   "user": {
>       "id": "__id__",
>       "discord_id": "__discord_id__",
>       "first_name": "__first_name__",
>       "last_name": "__last_name__",
>       "membership_date": "__membership_date__",
>       "createdAt": "__created_at__",
>       "updatedAt": "__updated_at__"
>   }
> }
> ```

### Gestion des utilisateurs
Todo...

### Gestion des produits
Todo...

### Gestion des transactions
Todo...

### Comptabilité
Todo...
