//Archivo para manejar las Rutas de Acceso y poder acceder a ellas desde el Servidor
//Comprime las funciones de .controller y .gateway en un solo acceso

const { seleccionRouter } = require('./selecciones/selecciones.controller')
const { sedeRouter } = require('./sedes/sedes.controller')

module.exports = {
    seleccionRouter,
    sedeRouter
}