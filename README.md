# NestJS + Docker Demo

This is my first time setting up a NestJS project with Docker for Back-End development so I won't go too deep into NestJS or Docker as the main focus of this repo is running the NestJS application environment with Docker.

To fully understand how the project works, I learned the basics of the following subjects:
- Working with terminal
- JavaScript / TypeScript
- How Docker works
- ✨Magic ✨

## Let's get started!

Create a new NestJS application.
Started by installing the NestJS CLI using npm and creating a new project:

```sh
npm i -g @nestjs/cli
nest new nestjs-docker
```
I am going to choose npm for this.

```sh
npm run start:dev
```
I have added an Exportable Model: Movie to make the service class file in the app.service.ts and app.controller.ts files to work with Docker.

## Creating a API service

I've created an API service that returns a hardcoded array of movies to test the API after containing it using Docker.

Run the project again using npm run start: dev and open the app in the browser at http://localhost:3000 or I can use Postman and create a new GET request for the formatted workflow and more semantic.
The final result will look like this:

![image text](demo-readme.png)

##  Let's Dockerize this!
Now I have the Back-End API application up and running to contain it using Docker for development.

Start by creating the following files in the project root directory:

- Dockerfile - This file will be responsible for importing Docker images, splitting them into development and production environments, copying all our files and installing npm dependencies
- docker-compos.yml - This file will be responsible for defining our container, the images required for the application of other services, storage space, environment variables, etc.

##  Running the Docker containers
This is what Magic I want to talk about. I'll probably need to learn how to run your app solely on Docker in the future.
... to start our app in production mode, you guessed it... run the following command in your terminal:
```sh
docker-compose up prod
```
Make a GET request again to http://localhost:3000 and...
That's all!

## License

MIT
