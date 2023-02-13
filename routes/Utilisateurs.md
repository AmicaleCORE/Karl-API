# Gestion des utilisateurs
Les utilisateurs sont de simples comptes virtuels permettant à un membre de se connecter au [panneau de contrôle de Karl](https://karl.amicalecore.org/).

## /users/
`GET` : Récupération de tous les utilisateurs enregistrés dans la base de données.

Permission : Voir les utilisateurs (`users.see`)

Paramètres :
- `limit` : Limite le nombre d'utilisateurs récupérés.

**Réponses de la route :**
> **Code 200 :** Les utilisateurs ont été récupérés.
> ```json
> {
>   "message": "Users list recovered.",
>   "users": [
>       {
>           "id": "__id__",
>           "username": "__username__",
>           "email": "__email__",
>           "group_id": "__group_id__",
>           "createdAt": "__created_at__",
>           "updatedAt": "__updated_at__"
>       }
>   ]
> }
> ```
> ---
> **Code 204 :** Aucun utilisateur n'a été enregistré.
---
`POST` : Ajouter un utilisateur.

Permission : Créer un utilisateur (`users.create`)

**Corps de la requête :**
> ```json
> {
>   "member_id": "__member_id__",
>   "email": "__email__",
>   "password": "__password__",
>   "group_id?": "__group_id__"
> }
> ```

**Réponse de la route :**
> **Code 201 :** L'utilisateur a été créé.
> ```json
> {
>   "message": "User created!",
>   "user": {
>       "id": "__id__",
>       "username": "__username__",
>       "email": "__email__",
>       "group_id": "__group_id__",
>       "createdAt": "__created_at__",
>       "updatedAt": "__updated_at__"
>   }
> }
> ```
> ---
> **Code 409 :** L'adresse e-mail donnée est déjà utilisée.
> ```json
> {
>   "message": "Email address already used!"
> }
> ```

## /users/:id
`GET` : Récupérer les informations d'un utilisateur ciblé par son identifiant (`id`).

Permission : Récupérer un utilisateur (`users.get`)

**Réponse de la route :**
> **Code 200 :** L'utilisateur a été récupéré.
> ```json
> {
>   "message": "User recovered!",
>   "user": {
>       "id": "__id__",
>       "username": "__username__",
>       "email": "__email__",
>       "group_id": "__group_id__",
>       "createdAt": "__created_at__",
>       "updatedAt": "__updated_at__"
>   }
> }
> ```
> ---
> **Code 404 :** L'utilisateur est introuvable dans la base de données.
> ```json
> {
>   "message": "User not found!"
> }
> ```
---
`PUT` : Mettre à jour les informations d'un utilisateur.

Permission : Modifier un utilisateur (`users.update`)

**Corps de la requête :**
> ```json
> {
>   "password?": "__password__",
>   "email?": "__email__",
>   "group_id?": "__group_id__"
> }
> ```

**Réponses de la route :**
> **Code 200 :**
> ```json
> {
>   "message": "User updated.",
>   "user": {
>       "id": "__id__",
>       "username": "__username__",
>       "email": "__email__",
>       "group_id": "__group_id__",
>       "createdAt": "__created_at__",
>       "updatedAt": "__updated_at__"
>   }
> }
> ```
> ---
> **Code 404 :** L'utilisateur est introuvable.
> ```json
> {
>   "message": "User not found!"
> }
> ```
---
`DELETE` : Supprimer un utilisateur.

Permission : Supprimer un utilisateur (`users.delete`)

**Réponses de la route :**
> **Code 200 :**
> ```json
> {
>   "message": "User deleted.",
>   "user": {
>       "id": "__id__",
>       "username": "__username__",
>       "email": "__email__",
>       "group_id": "__group_id__",
>       "createdAt": "__created_at__",
>       "updatedAt": "__updated_at__"
>   }
> }
> ```
> ---
> **Code 404 :** L'utilisateur est introuvable.
> ```json
> {
>   "message": "User not found!"
> }
> ```