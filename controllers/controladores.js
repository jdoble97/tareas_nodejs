const Proyectos = require('../models/Proyectos');

exports.inicioController = async (req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render("index", {
        nombrePagina: 'Proyectos',
        proyectos
    });
}
exports.nuevoProyectoController = (req, res) => {
    res.render("nuevoProyecto", {
        nombrePagina: 'Nuevo Proyecto'
    });
}
exports.addProyectoController = async (req, res) => {

    //Validamos que el input no esté vacio
    const { nombre } = req.body
    let errores = []
    if (!nombre) {
        errores.push({ 'texto': 'Agrega un nombre' })
    }
    if (errores.length > 0) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    } else {
        //Al no haber errores, insertamos en la BBDD
        const proyecto = await Proyectos.create({ nombre});
        res.redirect('/');
    }
}

exports.proyectoUrlController = (req,res)=>{
    res.send("Listo--->"+req.params.url)
}

exports.autorController = (req, res) => {
    res.render("autor")
}