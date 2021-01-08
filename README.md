# PlantR Search App

## FullStack Web App created with React and Django

### Packages Needed:

- [x] Django Rest Framework
- [x] Django
- [x] Npm Packages: (npm i [cmd])
- - react react-dom --save-dev
- - webpack webpack-cli --save-dev
- - @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
- - bulma
- - @babel/plugin-proposal-class-properties
- - react-router-dom

### Requirements:

- [ ] create a plant_api app 
- [ ] User can log in/ sign up
- [ ] User can search plants from Trefle
- [ ] User can save plants to their profile

### Tasks:

- [ ] switch dev database to postgres sql
- [x] setup react to manage the front end
- [ ] set up route to preform search
- [ ] set up enviroment variables
- [x] set up ~~materialize-css or~~ bulma ui for front end

### Scripts:

- django-admin startproject name # create a new project, not needed
- python manage.py startapp name # create a new app, may be needed
- python manage.py runserver # to run
- python manage.py makemigrations
- python manage.py migrate # migrate new changes to the db, after making migrations
- python manage.py createsuperuser # create a new super user
