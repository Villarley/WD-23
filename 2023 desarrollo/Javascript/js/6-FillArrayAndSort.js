vec = new Array(10);
vec1 = new Array(10);
let bot = document.getElementById("boton");
function llenarVector() {
  for (let i = 0; i < 10; i++) {
    vec[i] = parseInt(Math.random() * (100 - 10) + 10);
  }
  return vec;
}
vec = llenarVector();
console.table(vec);
vector = ordenar(vec);
function ordenar(vector) {
  let ordenado = false;
  while (!ordenado) {
    ordenado = true;
    for (let i = 0; i < vector.length; i++) {
      if (vector[i] > vector[i + 1]) {
        aux = vector[i];
        vector[i] = vector[i + 1];
        vector[i + 1] = aux;
        ordenado = false;
      }
    }
  }
  return vector;
}
console.table(vector);
bot.addEventListener("click", () => {
  let numeroBuscado = document.getElementById("numero").value;
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] == numeroBuscado) {
      console.log("El valor se encuentra en la posicion " + i);
    }
    if (vector[i] < numeroBuscado && vector[i + 1] > numeroBuscado) {
      console.log(
        "El valor se encuentra entre la posicion " +
          i +
          " y la posicion " +
          (i + 1)
      );
    }
  }
});