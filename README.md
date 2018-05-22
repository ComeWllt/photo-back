# Back-end of MyPhoto

This is the back-end of a photo gallery website. 
This is a personnal project to share my photos with friends and family. 

## Modules

Run `npm install` from the app directory to install modules.

## Development mode

Run `npm run dev` to get the app in the development mode.<br>
The app will automatically reload thanks to the [nodemon](https://github.com/remy/nodemon) module.

## Environment and dependencies

- Node.js
- Express.js
- Mongoose
- MongoDB
- Passport.js and Bcrypt for security

## Database population

1. You may install [MongoDB](https://www.mongodb.com) or also use [mLab](https://mlab.com) for instance. 

2. Create a database with appropriate table names. 

3. Install node-mongo-seeds :
  `npm install -g node-mongo-seeds`

4. Run `seed` from the app directory in order to populate the database with data from the `seeds`folder.
