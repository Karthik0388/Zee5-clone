const express = require('express');
const { success,error,info} = require('consola');
const colors = require('colors');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const { join } = require("path");
const { DbConnection } = require('./config/db');
const AuthRouter = require('./Routes/auth');
const MovieRouter = require("./Routes/movieRoute");
const { PORT, NODE_ENV } = require('./config');

const app = express();

let StartServer = () => {
  //?---------Database connection is starts here
  DbConnection();
  //?---------Database connection is ends here
//?-------middleware section starts here------------
    if (NODE_ENV === "development") {
        app.use(morgan('dev'))
  }

  app.use(express.static(join(__dirname,'public')))
    app.use(express.json());
    app.use(cors());
  app.use(cookieParser());
  
//?-------middleware section ends here------------
  app.use("/api/auth", AuthRouter);
  app.use("/MoviesData", MovieRouter);
  //?---------------- listen port starts here-----------------
  app.listen(PORT, err => {
    if (err) throw err;
    info(`Server is running on Port Number ${PORT}`.blue.bold);
  });
  //?---------------- listen port ends here-----------------
}
StartServer();


