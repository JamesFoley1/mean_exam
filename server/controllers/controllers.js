const Pets = require('../models/models');
// for updating with unique validations
// { runValidators: true }

function allPets(req, res){
    Pets.find({}).sort({type: 'ascending'})
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function onePet(req, res){
    Pets.findById(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function createPets(req, res){
    Pets.create(req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};

function updatePets(req, res){
    Pets.findById(req.params.id)
        .then(data => {
            // validations if i don't want the user to re-enter same name.
            // if (data.name == req.body.name){
            //     console.log("This is your name!")
            //     let errors = {
            //         message: 'This is already your name!'
            //     };
            //     res.json(errors);
            // }
            // else {
                Pets.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: 'query'})
                    .then(data => res.json(data))
                    .catch(errs => res.json(errs));
            // }
        })
    
};

function addLikes(req, res){
    Pets.findById(req.params.id)
        .then(data => {
            console.log(data);
            data.likes ++;
            data.save();
            res.json(data)}
        )
        .catch(errs => res.json(errs));
};

function removePets(req, res){
    Pets.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
};


module.exports.allPets = allPets;
module.exports.onePet = onePet;
module.exports.createPets = createPets;
module.exports.updatePets = updatePets;
module.exports.addLikes = addLikes;
module.exports.removePets = removePets;
