const Pacientes = require('../models/Paciente')


// Cuando se crea un nuevo cliente de

exports.nuevoCliente = async (req,res,next)=>{
    // TODO: insertar en la base de datos

    // Crear obj de paciente 

    const paciente = new Pacientes(req.body)
    try {
        await paciente.save();
        res.json({mensaje:'El cliente se agrego correctamente'})
    } catch (error) {
        console.log(error)
        next();
    }

}

// Obtiene todos los pacientes

exports.obtenerPacientes = async (req,res,next) => {
    try {
        const pacientes = await Pacientes.find({})
        res.json(pacientes)
    } catch (error) {
        console.log(error)
        next();
    }
}


// Obtiene paciente en especifico por id

exports.obtenerPaciente = async (req,res,next) => {
    try {
        const paciente = await Pacientes.findById(req.params.id);
        res.json(paciente)
    } catch (error) {
        console.error(error)
        next();
    }
}


// Actualizacar pacientes

exports.actualizarPaciente = async (req, res, next) => {

    try {
        const paciente = await Pacientes.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true
        });

        res.json(paciente)
    } catch (error) {
        console.log(error)
        next();
    }
}


// Borrar un paciente a

exports.borrarPaciente = async (req, res, next) => {

    try {
         await Pacientes.findOneAndDelete({_id: req.params.id});
         res.json({mensaje: 'success'})
    } catch (error) {
        console.log(error)
        next();
    }
}