const { response } = require('express');
const db = require('../../database/models')
const sequelize = db.sequelize;

const moviesControllerApi = {

    'create': (req,res) =>{
        db.Movie
        .create(req.body)
        .then(movie =>{
            return res.status(200).json({
                data: movie,
                status: 200,
                created: 'ok'
            })
        })


    },
    destroy: (req,res) =>{
        db.Movie
        .destroy({
            where:{
                id: req.params.id
            }
        })
        .then(response =>{
            return res.json(response)
        })

    },
    update: (req,res) => {
        let movieId = req.params.id;
        db.Movie.update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
        })
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/movies/update/'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/movies/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })    
        .catch(error => res.send(error))
    }
}

module.exports = moviesControllerApi;