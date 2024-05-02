## Exercie : 

- Créer un model Category 
avec un champ name / id
- Relation Article sur la Category
Définir la relation : un article peut appartenir à plusieurs catégories

- Créer le type dans graphql 
- Créer les resolvers suivants : 
    - Améliorer le update / create 
    - créer un resolver "createCategory"
    - Sur les queries : 
        - Si je récupère mes catégories (getCategories), je dois avec pour chaque catégorie la liste des articles, 
        - Inversement : getArticles : On doit avoir pour chaque article toutes les catégories affectées
