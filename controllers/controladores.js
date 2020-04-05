exports.inicioController = (req, res) => {
    res.render("index", {
        nombrePagina: 'Cartas de Vocabulario'
    });
}
exports.nuevaBarajaController = (req, res) => {
    res.render("nuevaBaraja", {
        nombrePagina: 'Nueva Baraja'
    });
}
exports.addBarajaController = (req, res) => {

    //Validamos que el input no esté vacio
    const { nombre } = req.body
    let errores = []
    if (!nombre) {
        errores.push({ 'texto': 'Agrega un nombre' })
    }
    if (errores.length > 0) {
        res.render('nuevaBaraja', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    }else{
        
    }
}



exports.autorController = (req, res) => {
    res.render("autor")
}