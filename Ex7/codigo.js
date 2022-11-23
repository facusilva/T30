function calcularFactorial(){
    //leo el número que ha introducido el usuario
    let numero = document.getElementById("numero").value;
    //asigno a la variable resultado el número, para que la primera multiplicación sea numero * numero-1
    let resultado = numero;
    for(let i = numero; i >1; i--){
        //asigno el resultado de la multiplicación del resultado de la anterior operación por el siguiente número en orden descendiente
        resultado = resultado * (i-1);
    }
    //muestro el resultado por pantalla
    alert("El factorial de "+ numero +" és: "+resultado);
}