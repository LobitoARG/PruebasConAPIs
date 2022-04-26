const express = require('express');
const router = express.Router();
const moviesController = require('../../controllers/api/moviesControladorAPI');

router.post('/api/movies/create', moviesController.create);
router.delete('/api/movies/delete/:id', moviesController.destroy);
router.put('/api/movies/update/:id',moviesController.update);

module.exports = router;