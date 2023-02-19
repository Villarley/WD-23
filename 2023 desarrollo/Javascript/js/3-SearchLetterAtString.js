function count(){
    let input = document.getElementById("input").value; // obtiene el valor del elemento HTML con ID "input"
    let input2 = document.getElementById("input2").value; // obtiene el valor del elemento HTML con ID "input2"
    for(i=0; i<=input.length; i++){ // itera a través de cada carácter de la cadena input
        if (input.charAt(i) == input2){ // compara el carácter actual de input con input2
            console.log(i+1); // muestra el índice del carácter actual en la consola (añade 1 para que el índice comience en 1 en lugar de 0)
            i=input.length+1; // detiene el bucle for estableciendo el valor de i para que sea mayor que la longitud de input
        }
    }   
}