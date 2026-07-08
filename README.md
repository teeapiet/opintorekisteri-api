### Opintorekisteri API
Teea Pietikäinen 
TVT26KMO

Tämän harjoitustyön tarkoituksena oli toteuttaa Node.js-, Express- ja MySQL-teknologioita käyttävä REST-rajapinta opintorekisterille MVC-arkkitehtuuria hyödyntäen.

Sovelluksella voidaan hallita opiskelijoita, opintojaksoja ja arviointeja CRUD-operaatioiden avulla.

Käytin:

- Node.js
- Express
- MySQL
- JWT
- bcrypt
- Postman
- MySQL Workbench
- Visual Studio Code

http://localhost:3000
/api/opiskelijat
/api/arvioinnit
/api/opintojaksot
/api/login

### Tietokanta
Sisältää nejä taulua:

Opiskelija

- opiskelija_id
- etunimi
- sukunimi
- sahkoposti

Opintojakso

- opintojakso_id
- nimi
- laajuus

Arviointi

- arviointi_id
- opiskelija_id
- opintojakso_id
- arvosana

User

- user_id
- username
- password

EER-diagrammista löytyy kuva projektikansiosta.


### Models

Sisältävät tietokantakyselyt.

- opiskelijaModel.js
- opintojaksoModel.js
- arviointiModel.js
- userModel.js

### Controllers

Käsittelevät HTTP-pyynnöt ja palauttavat vastaukset.

- opiskelijaController.js
- opintojaksoController.js
- arviointiController.js
- loginController.js

### Routes

Määrittelevät API-reitit.

- opiskelijaRoutes.js
- opintojaksoRoutes.js
- arviointiRoutes.js
- loginRoutes.js


### Opiskelijat

- GET ..../api/opiskelijat 
- POST ..../api/opiskelijat 
- PUT ..../api/opiskelijat/:id 
- DELETE ..../api/opiskelijat/:id 

### Opintojaksot

- GET ..../api/opintojaksot 
- POST ..../api/opintojaksot 
- PUT  ..../api/opintojaksot/:id 
- DELETE ..../api/opintojaksot/:id 

### Arvioinnit

- GET ..../api/arvioinnit 
- POST ..../api/arvioinnit 
- PUT  ..../api/arvioinnit/:id 
- DELETE ..../api/arvioinnit/:id 

### Kirjautuminen
POST ..../api/login

json
{
  "username": "____",
  "password: "_____"
}

Kirjautumisen jälkeen palvelin palauttaa JWT-tokenin, jota käytetään suojattujen reittien käyttöön.


### MySQL-aliohjelma

Tietokanta sisältää MySQL Stored Procedure -aliohjelman.
Aliohjelmaa voidaan kutsua SQL-komennolla: CALL LaskeKeskiarvo(1);

Aliohjelma palauttaa opiskelijan arvosanojen keskiarvon.


### Testaus

Testaus Postmanilla.
Testatut toiminnot:
- Opiskelija CRUD
- Opintojakso CRUD
- Arviointi CRUD
- Login
- JWT-autentikointi
- Suojatut reitit

Kaikki testit suoritettiin onnistuneesti.


## Esittelyvideo
https://youtu.be/n75S4ZwzSVw

