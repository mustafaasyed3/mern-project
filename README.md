# Project Management Application

This application is built using MERN stack, the server.js file connects to a MongoDB Database and has a controller which handles all the REST API endpoints exposed, the client
folder contains seperate dependencies and is using React and Redux, utilizing the Redux Toolkit we can track state of the certain CRUD operations performed in the application. 

# Github Actions, Jenkins, and Docker

This application has a Jenkinsfile, Dockerfile and Github Actions YAML file. The Dockerfiles create container images for the front and backend of the applicaiton
the Jenkinsfile contains the declarative script which creates docker images along with some react tests on a CI server. Also the same CI process was tested with Github Actions in this workflow on every commit a new image are created for front and backend and pushed to Docker Hub.
