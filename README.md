# To Do List REST API

A simple REST API with Nodejs, Typescript, PostgreSQL, TypeORM, Docker. Just for the purpose of practice.


## Stack

- NodeJS >= v16.16.0  
- Express  
- Typescript  
- PostgreSQL  
- TypeORM  
- Docker  
- Unit Tests with Jest


## Documentation

To access Swagger Documentation in your browser: `http://localhost:3000/api/v1/docs/`


## Running locally

To run this project locally, follow the steps:  
1. Have Docker installed and your service started;  
2. Have Node.js installed;  
3. Run the command `cp .env.default .env` for env variables;  
4. After cloning the project, run the command `npm install` to install the dependencies;  
5. To up Docker and database, run the command `docker-compose up`;  
6. In another tab, run the command `npm run dev`.  

Then, you can open in your browser the documentation with this URL `http://localhost:3000/api/v1/docs/`.  

Also, in root directory, we have the file `postman_collection.json`. You can use it and import in your Postman to tests all endpoints.