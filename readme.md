<h1>BIBLIO</h1>

- Tableau de livres stockés en bibli avec infos habituelles : 
  - titre
  - siècle
  - genre
  - auteur
  - editeur
  - note
  - prêt à (nom de la personne)

Interface pour ajouter/modifer/retirer des livres
Système de prêt avec retour (checkboxes)

Intégration/Export des livres par csv

Création de comptes avec infos de base : 

- prénom
- mail
- mdp


- création des entités :


  - Book
    - title
    - pages
    - published_in
    - genre (manyToMany)
    - editor (oneToMany)
    - author (oneToMany)
    - note
    - lent_to
    - created_at
    - updated_at
    - cover (path)


  - Genre
    - name
    - description

  - Editor
    - name
  

  - Author
    - name
    - birth_date


  - User (avec security bundle à la fin)
    - name
    - mail
    - password
    - role
