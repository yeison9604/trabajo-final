

const indexController = {}


indexController.index = (req, res) =>{
    res.render('index')
}

indexController.personas = (req, res) =>{
    res.render('personas')
}

indexController.login = (req, res) =>{
    res.render('login')
}

indexController.registro = (req, res) =>{
    
    res.render('registro')
}

indexController.loginUser = async (req, res) => {
    try {
        const conexion = await getConnection()
        const username = req.body.username
        const pass = req.body.pass
        console.log(username + " - " + pass)
        if (!username || !pass) {
            console.log("paso 1")
            res.render('login', {
                alert: true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese un usuario y contraseña validos",
                alertIcon: 'info',
                showConfirmButton: true,
                timer: 10000,
                ruta: 'login'
            })
        } else {
            const result = await conexion.request().query("select * from login where username = '" + username + "'")
            if (result.recordset.length == 1 && pass == result.recordset[0].pass) {
                const usuario = result.recordset[0].username

                res.render('login', {
                    alert: true,
                    alertTitle: "conexion exitosa",
                    alertMessage: "ingreso correcto",
                    alertIcon: 'success',
                    showConfirmButton: true,
                    timer: 10000,
                    ruta: ''
                })
            } else {
                const usuario = result.recordset[0].username
                res.render('login', {
                    alert: true,
                    alertTitle: "Datos Erroneos",
                    alertMessage: "El usuario o contraseña son incorrectos",
                    alertIcon: 'error',
                    showConfirmButton: false,
                    timer: 10000,
                    ruta: 'login'
                })
            }
        }


    } catch (error) {
        console.error(error)
    }


}



export default indexController