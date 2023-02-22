var calculadorInstanciada = new calculadora();
function escribenumero(input) {
    document.getElementById("input").innerHTML += input.value;
}
function escribeOp(input) {
    calculadorInstanciada.OPERANDO1 = document.getElementById("input").value ;
    calculadorInstanciada.TIPODEOPERACION = input.id ;
    document.getElementById("input").value = '';
}
function escribeIgual() {
    console.log(document.getElementById("input").value);
    calculadorInstanciada.OPERANDO2 = document.getElementById("input").value;
    switch (calculadorInstanciada.TIPODEOPERACION) {
        case 'mas':
            {
                calculadorInstanciada.Sumar().then(function (response) {
                    console.log(response);
                    document.getElementById("input").value = response;
                    calculadorInstanciada.RESULTADO = response;
                    calculadorInstanciada.Guardar().then(function (response) 
                    {
                        alert('guardado en base de datos');
                    },
                    function (err) {
                        alert(err);
                    }
                    );
                },
                function (err) {
                    alert(err);
                }
                );
                    break;
                }
                    
            case 'menos':
                {
                    calculadorInstanciada.Restar().then(function (response) {
                        console.log(response);
                        document.getElementById("input").value = response;
                    },
                    function (err) {
                        alert(err);
                    });
                    break;
                }
                case 'por':
                    {
                        calculadorInstanciada.Multiplicar().then(function (response) {
                            console.log(response);
                            document.getElementById("input").value = response;
                        },
                        function (err) {
                            alert(err);
                        });
                        break;
                    }
                    case 'entre':
                        {
                            calculadorInstanciada.Dividir().then(function (response) {
                                console.log(response);
                                document.getElementById("input").value = response;
                            },
                            function (err) {
                                alert(err);
                            });
                            break;
                        }

    }
}

