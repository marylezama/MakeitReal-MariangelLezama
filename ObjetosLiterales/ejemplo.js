let persona = {
    name: "Mariangel",
    apellido:"Lezama",
    edad: 21,
    estatura: 1.6

}
console.log("Objetos Persona", persona);
let llave = "name"
console.log(persona[llave]);
console.log(persona.apellido);
console.log(persona["edad"]);
console.log(persona.estatura);

persona.peso = 69;
console.log("Objeto persona modificado", persona);

persona.edad = 25;
console.log("Objeto persona modificado edad", persona);

delete persona.estatura;
console.log("Objeto persona eliminando", persona);
