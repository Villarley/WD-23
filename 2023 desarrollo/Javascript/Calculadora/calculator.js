class calculadora{
    constructor(
        OPERANDO1,
        OPERANDO2,
        TIPODEOPERACION,
        input)
{       

this.OPERANDO1=OPERANDO1;
this.OPERANDO2=OPERANDO2;
this.TIPODEOPERACION=TIPODEOPERACION;
this.input=input;
}

Sumar()
{
    var objetoenviar = this;
    return new Promise(function(resolve, reject)
    {
    try
    {
        var xhr = new XMLHttpRequest();
        xhr.open('POST','/suma');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.onload = function(){
            if(xhr.status == 200)
            {
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                reject(xhr);
            }
        };
    xhr.send(JSON.stringify(objetoenviar));
}
catch(error)
{
    reject(error.message);
}
});
}
Restar()
{
    var objetoenviar = this;
    return new Promise(function(resolve, reject)
    {
    try
    {
        var xhr = new XMLHttpRequest();
        xhr.open('POST','/resta');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.onload = function(){
            if(xhr.status == 200)
            {
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                reject(xhr);
            }
        };
    xhr.send(JSON.stringify(objetoenviar));
}
catch(error)
{
    reject(error.message);
}
});
}
Multiplicar()
{
    var objetoenviar = this;
    return new Promise(function(resolve, reject)
    {
    try
    {
        var xhr = new XMLHttpRequest();
        xhr.open('POST','/multiplicacion');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.onload = function(){
            if(xhr.status == 200)
            {
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                reject(xhr);
            }
        };
    xhr.send(JSON.stringify(objetoenviar));
}
catch(error)
{
    reject(error.message);
}
});
}
Dividir()
{
    var objetoenviar = this;
    return new Promise(function(resolve, reject)
    {
    try
    {
        var xhr = new XMLHttpRequest();
        xhr.open('POST','/division');
        xhr.setRequestHeader('Content-Type','application/json');
        xhr.onload = function(){
            if(xhr.status == 200)
            {
                resolve(JSON.parse(xhr.responseText));
            }
            else{
                reject(xhr);
            }
        };
    xhr.send(JSON.stringify(objetoenviar));
}
catch(error)
{
    reject(error.message);
}
});
}
Guardar(){
    var objetoenviar = this;
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                xhr.open('PUT','/api/guardar');
                xhr.setRequestHeader('Content-Type','application/json');
                xhr.onload = function(){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText));
                    }
                    else{
                        reject(xhr);
                    }
                };
            xhr.send(JSON.stringify(objetoenviar));
                }
                catch(err)
                {
                    reject(err.message);
                }
            }
    );
}
}
