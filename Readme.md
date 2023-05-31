# NODEJS -Express project starter that implements some components of clean architecture

### High level features

- It uses Express as http framework (Can easily replaced with any other http framework)
- It uses mongodb as primary database (Can easily be replaced with any other db or add another to it)
- It comes along with Socket.io by default
- The code is integrated with jest and supertest for running unite and integrated tests
- Two docker files
  - One build for production (Dockerfile)
  - One for development which is built by docker-compose file

- Docker compose file for running the application locally which has these services
  - App service -> Main app
  - Database -> Mongodb instance
  - Mongo Express -> Visualizing mongodb

### Folder structure - High level

The business logic of the application is placed in the src folder
