// Es como el ejemplo de Web1 pero simplificado con Express (tmb se instala en node modules)
const express =require("express")
const app = express()

app.use(express.urlencoded({ extended: true}));
// Para poder usar POST pq la info esta codificada y necesita esta funcion
// Extended: true hace que no aparezca un warning, no sabemos pq, de stackoverflow

app.get("/", function (req, res){
    res.send("Hola Mundo!");
})

app.get("/adios", function (req, res){
    res.send("Adios Mundo!");
})

app.get("/usuario", function (req, res){
    var nombre = req.query.nombre;
    var clave = req.query.clave;
    res.send("Registrando usuario "+nombre+" con clave: "+clave);
})
// Version GET arriba

// /usuarios ? id=3

app.get("/usuario", function (req, res){
    var nombre = req.body.nombre;
    var clave = req.body.clave;
    res.send("Registrando usuario "+nombre+" con clave: "+clave);
})
// Version POST arriba

// /Usuarios (Post => id=3)

app.listen(3001, function(){
    console.log("Escuchando en puerto 3001!");
})

// npm install nodemon -g
// nodemon .\Web1.js para auto-mostrar los cambios sin tener que recargar


// /usuarios/3 pasamos el argumento escribiendo directamente en el navegador (Tipo GET)