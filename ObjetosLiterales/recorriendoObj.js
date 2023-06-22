let persona = {
    name: "Mariangel",
    apellido:"Lezama",
    edad: 21,
    estatura: 1.6 

}

//usando metodos especificos para objetos
for (let llave in persona);
   if (persona.hasOwnProperty(llave)) {
    console.log(persona[llave]);
   }
{

//Usando propiedad Objects.keys
let llaves = Objects.keys(persona);
console.log("LLAVES---", llaves);
for (let i = 0; i < llaves.length; i++); {
    console.log(persona[llave]);
}

}