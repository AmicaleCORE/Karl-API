# Routes classiques
Les routes ci-dessous sont les routes accessibles publiquement, sans permissions particulières et sans besoin d'authentification. Elles permettent notamment au•x développeur•s de vérifier la disponibilité de celle-ci ou son non-fonctionnement.

## /
`GET` : Récupération des informations de status de l'API (fonctionnement direct).

**Réponses de la route :**
> **Code 200 :**
> ```json
> {
>   "message": "Welcome in the Karl Rest API 👋"
> }
> ```