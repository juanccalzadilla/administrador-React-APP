const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')



module.exports = function(){

    // Agrega nuevos pacientes via post 

    router.post('/pacientes',pacienteController.nuevoCliente)


    // Obtiene todos los registros
    router.get('/pacientes',pacienteController.obtenerPacientes)

    // Obtiene paciente by id 

    router.get('/pacientes/:id',pacienteController.obtenerPaciente)

    // Actualizar registro con id especifico


    router.put('/pacientes/:id',pacienteController.actualizarPaciente)
    // Eliminar paciente

    router.delete('/pacientes/:id',pacienteController.borrarPaciente)
    return router;
}