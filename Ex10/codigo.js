function esPalindromo(){
    //leo el número que ha introducido el usuario
    let cadena = document.getElementById("cadena").value;
    let inversa = "";
    //recorro la cadena desde el final hasta el principio y la copio del reves carácter a carácter
    for(let i = cadena.length-1; i>=0; i--){
        //concateno el caracter a la variable que resultará en la cadena inversa
        inversa += cadena.charAt(i);
    }

    //compruebo si ambas cadenas son iguales removiendo los espacios para comprobar que las letras sean las mismas indiferentemente del órden
    //si no quitara los espacios aunque fuera palíndromo si tiene espacios entre medio me diría que no lo és
    if(inversa.replace(/\s+/g, '') === cadena.replace(/\s+/g, '')){
        alert("Es palíndromo!")
    }else{
        alert("No es palíndromo")
    }
}