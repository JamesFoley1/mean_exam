const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/pets', {useNewUrlParser: true}, (errs => console.log(errs)));
const unique = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'You must provide a name'], minlength: [3, 'The name must 3 characters or greater!'], unique: true},
    type: {type: String, required: [true, 'You must provide a type'], minlength: [3, 'the type must 3 characters or greater!'] },
    description: {type: String, required: [true, 'You must provide a description'], minlength: [3, 'Your description must 3 characters or greater!'] },
    skills: {type: Array, maxItems: 4},
    likes: {type: Number, default: 0 }
}, { timestamps: true });

PetSchema.plugin(unique, { message: 'A pet with this name has already been added, please choose another name!'});

module.exports = mongoose.model('pet', PetSchema);