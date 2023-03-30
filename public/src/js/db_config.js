const mongoose = require('mongoose');

mongoose.connect('mongodb://', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('Conectado a la base de datos'))
.catch(err => console.log('Error al conectar a la base de datos: ' + err));

const express = require('express');
const router = express.Router();
const Formulario = require('');

router.post('/formulario', async (req, res) => {
    const formulario = new Formulario({
        nombre: req.body.nombre,
        correo: req.body.correo,
        asunto: req.body.asunto,
        mensaje: req.body.mensaje
    });

    try {
        await formulario.save();
        res.status(201).send('Los datos han sido guardados con exito');
    }   catch (err) {
        console.error(err);
        res.status(400).send('Ha ocurrido un error al guardar los datos');
    }
});

module.exports = router;