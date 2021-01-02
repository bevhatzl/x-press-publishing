const express = require('express');
const apiRouter = express.Router();
const artistRouter = require('./artists.js');
const seriesRouter = require('./series.js');

// to mount the router to /api/artists. It prepends the api router with /artists.
apiRouter.use('/artists', artistRouter);

apiRouter.use('/series', seriesRouter);


module.exports = apiRouter;
