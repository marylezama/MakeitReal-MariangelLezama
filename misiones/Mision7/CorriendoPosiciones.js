let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
let newArray = ["Quinto", "Sexto"];

// Obtener la posición de inserción después del elemento "Cuarto"
let insertPosition = arr.indexOf("Cuarto") + 1;

// Insertar cada elemento del newArray en el arreglo arr
for (let i = 0; i < newArray.length; i++) {
  arr.splice(insertPosition + i, 0, newArray[i]);
}

// Imprimir cada elemento del arreglo arr en la consola
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

