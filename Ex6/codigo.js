//declaro la variable y le asigno el array de letras que puede tener el DNI
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];





function calcularLetra(){
    //numero del dni a evaluar
    let numero = document.getElementById("dni").value;
    //evalúo que el número esté comprendido entre 0 y 99999999
    if(numero > 0 && numero < 99999999){
        //calculo la posición del array de la letra que le corresponde
        let letra = document.getElementById("letra").value;
        //compruebo que la letra introducida por el usuario corresponda a la obtenida por el cálculo
        if(letra === letras[numero % 23]){
            alert("Las letra que has indicado es correcta");
        }else{//si no es correcta entra aquí
            alert("La letra que has indicado es incorrecta");
        }
    }else{//en caso de no ser un número válido se lo informo al usuario
        alert("El número que has introducido no és válido");
    }
    
}