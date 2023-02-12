# Authentification
L'authentification est une partie cruciale de notre API puisque nous stockons des ressources sensibles notamment les données comptables, des informations utilisateurs, mais aussi l'intégralité des stocks de l'Amicale.  
C'est pourquoi, pour la plupart des requêtes qui seront effectuées, il faudra être authentifié, mais aussi avoir les permissions de la faire.

## /auth/login
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

## /auth/reset-token
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

## /auth/validate-token
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