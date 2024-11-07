const dados = require("./cliente.json");

console.log(dados);

console.log (typeof dados);

const clienteEmstring = JSON.stringify(dados);

console.log(clienteEmstring);

const ObjectCiente = JSON.parse (clienteEmstring);

console.log(ObjectCiente)