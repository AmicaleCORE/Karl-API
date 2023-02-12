# Gestion des membres
Les membres sont la représentation virtuelle d'une personne physique nous permettant de lui attribuer toutes sortes d'opérations ou de critères comme :
- Transactions
- Compte personnel
- Dépenses
- Adhérent (oui ou non),
- etc...

## /members/
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

## /members/:id
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