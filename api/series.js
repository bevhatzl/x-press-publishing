const express = require('express');
const seriesRouter = express.Router();
const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');


module.exports = seriesRouter;