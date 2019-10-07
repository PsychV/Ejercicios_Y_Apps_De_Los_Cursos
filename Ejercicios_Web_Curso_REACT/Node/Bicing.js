const fetch = require('node-fetch');
const numBicis = process.argv[2]*1;
// coge el segundo argumento, el primero es "./Bicing.js" *1 para volverlo de string a numero

fetch("https://api.citybik.es/v2/networks/bicing")
.then(res => res.json())
.then(datos => console.log(datos.network.stations.filter(el => el.empty_slots >= numBicis).forEach(el => console.log(el.empty_slots, el.name))))
.catch(err => console.log(err));