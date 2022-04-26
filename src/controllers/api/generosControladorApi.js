//const db = require('../database/models');
const db = require('../../database/models')
const sequelize = db.sequelize;


const genresControllerApi = {
    'list': (req, res) => {
        //console.log(req.url)
        db.Genre.findAll()
            .then(genres => {
                res.json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: req.url
                    },
                    data: genres
                })
            })
    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.json({
                    data: genre.name
                });
            });
    }

}

module.exports = genresControllerApi;