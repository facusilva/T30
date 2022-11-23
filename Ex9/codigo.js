function esMayus(){
    //leo el número que ha introducido el usuario
    let cadena = document.getElementById("cadena").value;
    
    if(cadena === cadena.toUpperCase()){//Comparo la cadena original con la misma cadena en UpperCase
        alert("La cadena está en mayúsculas");
    }else if(cadena === cadena.toLowerCase()){//Comparo la cadena original con la misma cadena en LowerCase
        alert("La cadena está en minúsculas");
    }else{//Si no es ninguna de las anteriores, es que es una mezcla
        alert("La cadena tiene mayúsculas y minúsculas");
    }
}