function esPar(){
    //leo el número que ha introducido el usuario
    let numero = document.getElementById("numero").value;
    //si el resto de la división entre 2 es igual a 0 el número es par, si es diferente a 0 es impar
    if(numero%2 === 0){
        return alert("Es par");
    }else{
        return alert("Es impar");
    }
}