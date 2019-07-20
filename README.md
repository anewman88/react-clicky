# react-clicky
Homework Assignment 15 - Memory Game Utilizing React
SMU Programming Bootcamp Spring 2019

The working app is deployed on Github [here](https://anewman88.github.io/react-clicky/)

### Overview
The purpose of this assignment is to create a memory game with React. The application is divided into components, manage component state, and respond to user events.

- The application should render different images to the screen (I chose crystals). Each image should listen for click events.

- The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

- Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

- Once the user's score is reset after an incorrect guess, the game should restart.

### Node Packages Used
The following packages were used to develop and deploy the app

   * [React](https://www.npmjs.com/package/react)

   * [React-Dom](https://www.npmjs.com/package/react-dom)

   * [Create-React-App](https://github.com/facebook/create-react-app)

## Instructions for Starting the App 

There are two ways to start/run the app

### Running the app on Github

* The working app can be found on Github [here](https://anewman88.github.io/react-clicky/)

### Running the app on your computer from a Bash Window

* Using a Bash command line window, clone or download the repo to the desired directory on your computer

* Execute "npm install" in the cloned project directory to install the needed program packages

* Start the software by executing the command "npm start"

* Open an internet window and goto url "http://localhost:3000/"

## Instructions for Using the App

Welcome to the Crystal Clicky Memory Game App. Click on a crystal and earn a point, but only click on it once.  Notice that each time you click a crystal, all of them are re-ordered.  Click on each crystal, without repeating, and you win the game.  Good Luck!

