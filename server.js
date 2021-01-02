const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const express = require('express');
const morgan = require('morgan');
const apiRouter = require("./api/api");

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api', apiRouter);
app.use(errorHandler());

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

module.exports = app;