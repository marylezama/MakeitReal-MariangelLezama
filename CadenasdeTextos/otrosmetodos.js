//Mayusculas
let name = "Mariangel";

console.log(name.toUpperCase());

//Minusculas
let saludo = "HOLA MUNDO";

console.log(saludo.toLowerCase());

//Inicia con
console.log(saludo.startsWith("HOLA"));
//Finaliza con
console.log(saludo.endsWith("HOLA"));
//Metodos anidados
console.log(saludo.toLowerCase().startsWith("hola"));
//Substr - no usar
console.log(saludo.substr(0,4));
console.log(saludo.substr(5, 3));
//substring
console.log(saludo.substring(0, 4));
console.log(saludo.substring(5, 8));
///Reemplazar
saludo =saludo.replace("MUNDO", "GRUPOB3");
console.log(saludo);
//INCLUYE
console.log(saludo.includes("MUNDO"));




