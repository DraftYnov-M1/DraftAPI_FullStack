1/ configurer graphql / installer les packages
    - Installer @apollo/server
    - Installer graphql

2/ Utiliser le server apollo en middleware dans l'api 
    - Dans app.js line 45 à 70 (passer schemas & resolvers dans le server apollo)


3/ Resolvers & Schemas
    - Créer des sous dossiers dans app 
        - Schema 
        - Resolvers
    - Schemas 
        - Pour chaque entité (typage)
        - Pour chaque resolver (query, mutations) (typage)
        - Possibilité de typer des inputs (ensemble d'arguments à passer dans un resolver)
        - Typer des réponses
    - Resolvers
        - Query : écrire la logique des fonctions de type GET/READ (méthode ORM : findAll, findByPk etc...)
        - Mutations : idem , reste du CRUD sauf GET (delete, update/put, create/post etc...)
4/ Tester avec le playground /graphql
5/ Passer un token décodé dans le context
6/ Créer un validator pour protéger dess resolvers 
    

