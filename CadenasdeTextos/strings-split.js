let str ="Hola Grupo";

for (let i =0; i < str.length; i++) {
    console.log(str[i]);
}

let strConv = str.split("");
console.log("Cadena a Arreglo", strConv);

let strConv2 = str.split(" ");
console.log("Cadena a Arreglo2:", strConv2); 

let palabra = "prueba,separar,cadena,con,comas";

let palabraArr = palabra.split(",");
console.log("Arreglo con comas:", palabraArr[0]);
 

