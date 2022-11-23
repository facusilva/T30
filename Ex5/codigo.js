//declaro las variables numéricas y les asigno el valor
var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2){//compruebo que el numero1 sea más pequeño que el numero2
    console.log("numero1 no es mayor que numero2");
}

if(numero2>0){//compruebo que el numero2 es mayor a 0, y por tanto és positivo
    console.log("numero2 es positivo");
}

if(numero1<0 || numero1!==0){//compruebo que el numero1 sea menor a 0 (negativo) o diferente a 0
    console.log("numero 1 es negativo o distinto de cero")
}

if( (numero1+1) < numero2 ){//compruebo que sumándole 1 a numero1 sigue siendo menor a numero2
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
}