const { connect } = require("mongoose");
const { success,error,info } = require('consola');
const { NODE_ENV, MONGODB_URL_CLOUD, MONGODB_URL_LOCAL } = require("./index");

exports.DbConnection = async () => {
  try {
      if (NODE_ENV === "development") {
        await connect(MONGODB_URL_LOCAL);
        success(`LOCAL MONGODB DATABASE CONNECTED ${NODE_ENV} MODE`.magenta.bold);
      } else {
        await connect(MONGODB_URL_CLOUD);
        success(`CLOUD MONGODB DATABASE CONNECTED`);
      }
  } catch (err) {
     error(err);
  }
};
