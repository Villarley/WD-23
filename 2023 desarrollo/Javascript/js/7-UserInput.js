let vec = [];
document.getElementById('boton').addEventListener('click', ()=>{
    let input = document.getElementById('numero').value, pas = 0;
    for (let i = 0; i < vec.length; i++) {
        if (input != vec[i]) {
            pas++;
        }
    }
    pas == vec.length ? vec.push(input) : 'dont matter';
    console.log(vec);
});