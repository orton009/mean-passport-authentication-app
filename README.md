# mean-passport-authentication-app
## Technology Stack Used : 
 - Node JS
 - Express JS
 - Angular 6
 - HTML5 / CSS3/ Bootstrap3
 
 ### FrameWorks Used on Backend ;
 - Express JS
 - Cors
 - Passport
 - passport-jwt
 - JsonWebToken
 
 ### Libraries used on frontend  : 
 - angular2-jwt 
 - angular-flash-messages
 
 ### prerequisites : 
 - Node JS v8.9+ 
 - angular-cli 6 
 - NPM 5.5.1 +
 
 ### Summary
 This app consists of basic login authentication system. The user values are hardcoded in the backend (no database is used).
 The user authentication session is maintained through passport js and JWT tokens on the front end.
 Both the server and client are running on the same port. Just download the project and follow these steps :
 
 - cd angular-src
 - npm install
 - then cd to node_modules and find and delete angular2-jwt directory from there (as the available version is not supported with the latest angular version)
 - copy angular2-jwt directory and paste it inside node_modules folder (This version is modified by me)
 - In angular-src directory and run "ng build"
 - cd to root 
 - npm start 
 
 and server will start running on port 3000.
  - goto browser and type url = "http://localhost:3000"
 
