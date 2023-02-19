function count() {
    let input = document.getElementById("input").value; // obtiene el valor del elemento HTML con ID "input"
    let vec = []; // crear un vector vacío para almacenar las cadenas resultantes

    for (let i = 0; i < input.length; i++) { // iterar a través de cada carácter de la cadena de entrada
        let char = input[i]; // obtener el carácter actual

        if (char !== 'a') { // si el carácter actual no es 'a'
            if (vec.length === 0) { // si el vector está vacío
                vec.push(char); // agregar el carácter actual como una nueva cadena
            } else { // si el vector no está vacío
                vec[vec.length - 1] += char; // agregar el carácter actual a la última cadena en el vector
            }
        } else { // si el carácter actual es 'a'
            vec.push(''); // agregar una cadena vacía al vector
        }
    }

    console.log(vec); // mostrar el vector resultante de las cadenas modificadas
}
//tambien se puede hacer uso de la función charAt ya que esta es de bastante provecho
