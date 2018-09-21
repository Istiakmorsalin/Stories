# A simple application for storing and managing news stories


## Requirements

1. Java - 1.8.x

2. Maven - 3.x.x

3. Mysql - 5.x.x

## Steps to Setup

**1. Clone the application**

```bash
git clone https://IstiakMorsalin@bitbucket.org/IstiakMorsalin/storiesapplication.git
```

**2. Create Mysql database**
```bash
create database testy
```

**3. Change mysql username and password as per your installation**

+ open `src/main/resources/application.properties`

+ change `spring.datasource.username` and `spring.datasource.password` as per your mysql installation

**4. Build and run the app using maven**


Run the app without packaging it using -

```bash
mvn spring-boot:run
```

The app will start running at <http://localhost:8080>.

## Explore Rest APIs

The app defines following CRUD APIs.

    GET /api/stories
    
    POST /api/stories
    
    GET /api/stories/{storyId}
    
    PUT /api/stories/{storyId}
    
    DELETE /api/stories/{storyId}
    
    POST /users/sign-up 
    
    POST /login
    
 

## About Endpoints supporting both json and xml 
Here I implemented Content Negotiation.
 
**In order to achieve it we have to send another header namely "Accept" header as ‘application/xml’ for xml response.
If a consumer sends a request with Accept header as ‘application/json’, we will provide the JSON representation of the resource.**


## Authorization test

**Request Create stories in postman it will show 403 access forbidden. But register a  user by hitting /users/sign-up and do login by hitting with /login with the same username, password will provide a bearer accesstoken. 
 Add the token as Authorization token in request header and see creating stories has been authorized by login.voila!**
 
Test them using postman or any other rest client.


# StoryDB(Web App)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
