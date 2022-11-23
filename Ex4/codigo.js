//declaro la variable valores y le asigno un array con valores de diferentes tipos
var valores = [true, 5, false, "hola", "adios", 2];

//compruebo qué cadena de texto es mayor
if(valores[3]>valores[4]){
    console.log("hola > adios");
}else{
    console.log("adios > hola");
}

//compruebo que 5>2 devuelva un boolean true igual que el que tenemos guardado en la posición 0 de valores
if(valores[1]>valores[5] === valores[0]){
    console.log(valores[1]+" es mayor que "+valores[5]+" y por tanto obtenemos true")
}

//compruebo que 5<2 devuelva un boolean false igual que el que tenemos guardado en la posición 2 de valores
if(valores[1]<valores[5] === valores[2]){
    console.log(valores[1]+" NO es menor que "+valores[5]+" y por tanto obtenemos false")
}

console.log("Resultado de la suma de los valores numéricos: "+(valores[1]+valores[5]));
console.log("Resultado de la resta de los valores numéricos: "+(valores[1]-valores[5]));
console.log("Resultado de la multiplicación de los valores numéricos: "+valores[1]*valores[5]);
console.log("Resultado de la división de los valores numéricos: "+valores[1]/valores[5]);
console.log("Resto de la división de los valores numéricos: "+valores[1]%valores[5]);