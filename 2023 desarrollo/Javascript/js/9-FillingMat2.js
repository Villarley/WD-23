document.getElementById('button').addEventListener('click', () =>{
    let length = document.getElementById('MatrixLength').value, mat = [], a = 0;
    length = length**0.5;
    for (let i = 0; i < length; i++) {
        mat[i] = []
        for (let j = 0; j < length; j++) {
            mat[i][j] = a;
            a+=5;
        }
    }
    console.table(mat);
});