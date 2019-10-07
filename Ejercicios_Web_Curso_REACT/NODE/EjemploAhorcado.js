const express = require('express');
const session = require('cookie-session'); 
const app = express();

//middleware necessari per poder llegir body en post
// extended en false es para evitar un warning
app.use(express.urlencoded({ extended: false }));

//middleware d'inicialització de les sessions,Nombre de las cookies puede ser el que sea
app.use(session({secret: 'ahorcadoSecret'}));
app.use(express.static('public'))
//Permite a la app usar la carpeta public

//llista de paraules a endevinar, se'n triarà una random
const words = ["llapis", "triatlo", "bicicleta", "Barcelona", "Javascript", "Node", "MySQL" ];

//aquest app use s'executa cada vegada que es rep una petició get/post...
//mirem la var todolist de la sessió, si no existeix en fem una de nova
//el next permet que es continui el codi
app.use(function(req, res, next){
    if (typeof(req.session.palabraSecreta) == 'undefined') {
        //triem paraula secreta
        let i = Math.floor(Math.random()*words.length);
        let palabraSecreta = words[i].toLowerCase();
        //definim paraula actual inicial (només guions "----")
        let palabraActual = "-".repeat(palabraSecreta.length);
        //establim variables de sessió/cookie
        req.session.palabraSecreta = palabraSecreta;
        req.session.palabraActual = palabraActual;
        req.session.vidas = 6;
        req.session.letras = [];
    }
    //seguim cercant match de ruta, next tiene que definirse arriba como parametro
    next();
});


// app.get('/adivinax', function(req, res) { 
//     res.render('adivina.ejs', {
//         palabraSecreta: req.session.palabraSecreta,
//         palabraActual: req.session.palabraActual,
//         vidas: req.session.vidas,
//         letras: req.session.letras});
//     });


    
//ruta principal, mostra vista adivina.ejs passant-li les variables
app.get('/adivina', function(req, res) { 
    //passem a la vista tot el "paquet" de variables session
    res.render('adivina.ejs', req.session);
});
// recibe una palabra y un array de letras,
// devuelve una nueva palabra con "-" en las posiciones de la palabra original 
// que no coinciden con ninguna letra del array
function mezcla(palabra, letras){
    return palabra.split("").map(letra => letras.indexOf(letra)===-1 ? "-" : letra).join("");
}

//rebem la lletra nova
app.post('/adivina/letra',  function(req, res) {
    let letra = req.body.lletra;
    //verifiquem que la lletra no sigui "" i que no existeixi en les lletres ja endevinades
    if (letra != '' &&  req.session.letras.indexOf(letra.toLowerCase())===-1) {
        //mirem si la lletra forma part de la paraula secreta
        if (req.session.palabraSecreta.indexOf(letra)!==-1){
            //si forma part, l'afegim a les lletres endevinades...
            req.session.letras.push(letra.toLowerCase());
            //i calculem de nou la paraula actual tipus "--x--x-x"
            req.session.palabraActual = mezcla(req.session.palabraSecreta, req.session.letras);
        } else {
            //si la lletra no s'ha encertat, reduim numero de vides
            req.session.vidas--;
        }
    }
    //redirigim a /adivina
    res.redirect('/adivina');
});

//nova partida, buidem req.session i redirigm a /adivina
app.get('/nova', function(req, res) { 
    req.session = undefined; // funciona con null tmb
    res.redirect('/adivina');
});

//aquest use es genèric, el definim al final
//si no hi ha hagut cap coincidencia amb les rutes anteriors reenviem /adivina
app.use(function(req, res, next){
    res.redirect('/adivina');
});


//inciem "escolta" en port 3000
app.listen(3000, function () {
    console.log('App a http://localhost:3000')
  });
  

