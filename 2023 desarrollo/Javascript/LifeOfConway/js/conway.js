//
let td = document.querySelectorAll("td");
//lleno el vector td con los td que hay en el html
function reiniciar() {
  let random = [];
  for (let i = 0; i < td.length; i++) {
    random[i] = parseInt(Math.random() * (2 - 0) + 0);
  }
  return random;
}
//aqui lleno la tabla con los numeros aleatorios del numero
function llenarTabla(random) {
  for (let i = 0; i < td.length; i++) {
    if (random[i] == 1) {
      td[i].style.backgroundColor = "black";
    } else {
      td[i].style.backgroundColor = "";
    }
  }
}
//el vector rand se llena con 2500 numeros aleatorios entre 1 y0
let rand = reiniciar();
llenarTabla(rand);

let bot1 = document.getElementById("reiniciar");
bot1.addEventListener("click", () => {
  rand = reiniciar();
  llenarTabla(rand);
});

let bot = document.getElementById("boton");
bot.addEventListener("click", () => {
  setInterval(() => {
    let filas = document.querySelectorAll("tr");
    let celdas = [];
    for (let i = 0; i < filas.length; i++) {
      celdas[i] = [];
      for (let j = 0; j < filas.length; j++) {
        celdas[i][j] = rand[i * filas.length + j];
      }
    }
    for (let i = 0; i < celdas.length; i++) {
      for (let j = 0; j < celdas.length; j++) {
        let estado = Ordenar(celdas, i, j);
        if (estado) {
          rand[i * filas.length + j] = 1;
        } else {
          rand[i * filas.length + j] = 0;
        }
      }
    }
    llenarTabla(rand);
  }, 1000);
  //en esta funcion se llena la matriz celdas, ademas se llama a la funcion ordenar la cual hace la comparacion  para ver el vecindario,
});

function Ordenar(celdas, ob, or) {
  let vivas = 0;
  for (let i = ob - 1; i <= ob + 1; i++) {
    for (let j = or - 1; j <= or + 1; j++) {
      if (
        i >= 0 &&
        i < celdas.length &&
        j >= 0 &&
        j < celdas.length &&
        !(i == ob && j == or)
      ) {
        //aqui se verifica si la celda analizada esta dentro del rango correcto del vecindario debido a que las posiciones varian
        if (celdas[i][j] == 1) {
          vivas++;
        }
      }
    }
  }
  if (vivas == 3 || (celdas[ob][or] == 1 && vivas == 2) || vivas == 2) {
    return true;
  } else {
    return false;
  }
}
