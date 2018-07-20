const bodyParser = require('body-parser');
const api = require('../controllers/controllers');

function router(app){
    //ensures we receive json data w/ parser
    app.use(bodyParser.json());

    app.get('/api/pets', api.allPets);

    app.get('/api/pets/:id', api.onePet);

    app.post('/api/pets/new', api.createPets);

    app.patch('/api/pets/update/:id', api.updatePets);

    app.get('/api/pets/update/likes/:id', api.addLikes);

    app.delete('/api/pets/adopt/:id', api.removePets);

    return app;
};

module.exports = router;