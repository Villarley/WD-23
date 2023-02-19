document.getElementById('button').addEventListener("click", () => {
    let vec = [], length = document.getElementById('input').value;
    for (let i = 0; i < length; i++) {
        vec[i] = i;
    }
    console.log(vec);
});//escucha el boton cada vez que lo toca