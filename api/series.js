const express = require('express');
const seriesRouter = express.Router();
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(process.env.TEST_DATABASE || './database.sqlite');

// Router param for handling the seriesID parameter.
seriesRouter.param('seriesId', (req, res, next, seriesId) => {
    const sql = 'SELECT * FROM Series WHERE Series.id = $seriesId';
    const values = { $seriesId: seriesId };
    db.get(sql, values, (error, series) => {
        if (error) {
            next(error);
        } else if (series) {
            req.series = series;
            next();
        } else {
            res.sendStatus(404);
        }
    });
});

seriesRouter.get('/', (req, res, next) => {

    db.all("SELECT * FROM Series", (error, series) => {
        if (error) {
            next(error);
        } else {
            res.status(200).json({ series: series });
        }
    });

});

module.exports = seriesRouter;