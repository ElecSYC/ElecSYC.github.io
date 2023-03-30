const mongoose = require('mongoose');

const FormularioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true
    },
    asunto: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    }
});

const Formulario = mongoose.model('Formulario', FormularioSchema);

module.exports = Formulario;