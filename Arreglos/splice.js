let nombres = ["Lina", "Oscar","Maria", "Juan"];

console.log("ARRAY INICIAL", nombres);

//insertando en una posicion especifica
nombres.splice(2, 0, "ana");

console.log("ARRAY CON ANA", nombres);

//Eliminando elementos 
nombres.splice(1, 3)

console.log("ARRAY ELIMINANDO", nombres);


//ELIMINANDO TODOS LOS ELEMENTOS DESDE CIERTA POSICION
nombres.splice(0)

console.log("ARRAY ELIMINANDO TODO", nombres);

