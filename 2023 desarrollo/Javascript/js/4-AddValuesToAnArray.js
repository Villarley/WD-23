let vec = [];
document.getElementById('button').addEventListener("click", () => {
    input = document.getElementById("input").value;
    vec.push(input);//le añade el valor del input en una posición del vector 'vec'
    console.log(vec);
});//escucha el boton cada vez que lo toca

