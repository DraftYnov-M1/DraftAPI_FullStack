# LOCALSTORAGE vs COOKIES 

- Capacité de stockage 
    -> Cookies : 4ko
    -> LocalStorage : 5 - 10mo
- Sécurité : 
    ->cookies : 
        - dans requête HTTP (kill à la fermeture / durée de vie)
        - https only 
        - Peuvent être utilisé côté serveur
    ->LS: 
        - persiste tant que tu n'as pas explicitement supprimé dans le navigateur
        - Accessible côté client (+ vulnérable)
