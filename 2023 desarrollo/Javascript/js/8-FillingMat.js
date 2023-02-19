let vec = [];
document.getElementById("button").addEventListener('click', () =>{
    const length = document.getElementById('length').value;
    let number = document.getElementById('number').value;
    vec.push(number);
    if (vec.length == length && len%1 == 0) {        
        let mat = [], len = length**0.5;
        for (let i = 0; i < len; i++) {
            mat[i] = [];
            for (let j = 0; j < len; j++) {
                mat[i][j] = vec[i * mat.length+ j];   
            }        
        }
        console.log(mat);
    }
});