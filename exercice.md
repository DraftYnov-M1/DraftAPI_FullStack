#exercice 1 
sur Articles : 
- Modifier les deux resolvers (getArticle, getArticles) pour communiquer avec l'ORM
- Ajouter 3 resolvers : deleteArticle, updateArticle, createArticle fonctionnels

- Créer une nouvelle table / model User avec les propriétés : 
    - firstName
    - lastName
    - mail
    - password
    - isAdmin

- Typer dans graphQl le model User
- Créer un resolver registerUser() pour faire l'inscription, qui doit être fonctionnel

#exercice 2

Creer un model Category avec les propriétés :
- name
- id

Relation Article sur la Category 
- Definir la relation : un article peut avoir plusieurs categories

Créer un type dans graphql 
Créer un resolver pour les categories
- Ameliorer le update/ create
- creer resolver "createCateory"
- sur les queries :
    - si je recupere mes categories (getCategories), je dois avoir pour chaque categorie la liste des articles associés
    - inversement getarticles doit me retourner les categories associées  