var controllercalculadoraenmongo = require('./controllercalculadoraenmongo')
module.exports = function(app) {
app.put('./api/nuevaoperacion', controllercalculadoraenmongo.Guardar);
app.post('./api/modificaoperacion', controllercalculadoraenmongo.Modificar);
app.delete('./api/eliminaoperacion', controllercalculadoraenmongo.Eliminar);
app.get('./api/todaslasoperaciones', controllercalculadoraenmongo.Seleccionartodos);
app.post('./api/operacionesportipo', controllercalculadoraenmongo.Seleccionarxoperacion);

app.get('/javascript',
    function(req, res){
        res.sendfile('calculatorFrontEnd.js');
    }
    );
app.get('/javascript2',
    function(req, res){
        res.sendfile('calculator.js');
    }
    );
    app.get('/css',
    function(req, res){
        res.sendfile('css/style.css');
    }
    );
app.get('/saludo',
    function(req, res){
        res.send('<h1>Bienvenido a mi app...</h1>');
    }
    );
app.get('/despedida',
    function(req, res){
        res.send('<h1>Chau</h1>');
    }
    );
app.get('/calculadora',
    function(req, res){
        let username = req.query.username,
        password = req.query.password;
        if(username == 'sisoy' && password == 'creeme'){
            res.sendfile('indice.html');
        }else{
            res.send('<h1>Usuario o contraseña incorrecta</h1>');
        }
    }
    );
app.post('/suma',
    function(req, res){
        let num1 = req.body.num1,
        num2 = req.body.num2;
        res.send(parseInt(num1 + num2).toString());
    });
app.post('/resta',
    function(req, res){
        let num1 = req.body.num1,
        num2 = req.body.num2;
        res.send(parseInt(num1 - num2).toString());
});
app.post('/multiplicacion',
    function(req, res){
        let num1 = req.body.num1,
        num2 = req.body.num2;
        res.send(parseInt(num1 * num2).toString());
});
app.post('/division',
    function(req, res){
        let num1 = req.body.num1,
        num2 = req.body.num2;
        res.send(parseInt(num1 / num2).toString());
});
}