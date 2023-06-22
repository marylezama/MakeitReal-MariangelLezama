//Formula del IMC: imc = peso / (altura ^ 2)

function imc(peso, altura){
    return peso / (altura ** 2);
}

let imcCalculo = imc(68 , 1.60);

console.log("TU IMC es de: " +imcCalculo);