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
    
 

Test them using postman or any other rest client.
