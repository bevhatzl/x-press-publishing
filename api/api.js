const express = require('express');
const apiRouter = express.Router();
const artistRouter = require('./artists.js');

// to mount the router to /api/artists. It prepends the api router with /artists.
apiRouter.use('/artists', artistRouter);


module.exports = apiRouter;
