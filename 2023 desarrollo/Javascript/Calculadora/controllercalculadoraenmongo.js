var Item = require('./calculadoraenmongo');
exports.Guardar = function(req, res) 
{
    Item.create({
        NOMBRE:req.body.NOMBRE,
        OPERANDO1:req.body.OPERANDO1,
        OPERANDO2:req.body.OPERANDO2,
        TIPODEOPERACION:req.body.TIPODEOPERACION,
        RESULTADO:req.body.RESULTADO
    }, function(err, item) {
        if (err) {
            res.send(err);
        }
        else{
            Item.find(function(err, items) {
                if(err){
                    res.send(err);
                }
                else{
                    res.json(item);
                }
        }
        );
    }
    }
    );
}
exports.Modificar = function(req, res) 
{
    Item.update({_id:req.body._id}, {$set:{
        OPERANDO1:req.body.OPERANDO1,
        OPERANDO1:req.body.OPERANDO2,
        TIPODEOPERACION:req.body.TIPODEOPERACION,
        RESULTADO:req.body.RESULTADO
    }}, function(err, item) {
        if (err) {
            res.send(err);
        }
        else{
            Item.find(function(err, items) {
                if(err){
                    res.send(err);
                }
                else{
                    res.json(item);
                }
        }
        );
    }
    }
    );
}
exports.Eliminar = function(req, res) {
    Item.remove({_id:req.body._id}, 
        function(err, item) {
        if (err) {
            res.send(err);
        }
        else{
            Item.find(function(err, items) {
                if(err){
                    res.send(err);
                }
                else{
                    res.json(item);
                }
        }
        );
    }
    }
    );
}
exports.Seleccionartodos = function(req, res) {
    Item.find(function(err, items) {
        if (err) {
            res.send(err);
        }
        else{
            Item.find(function(err, items) {
                if(err){
                    res.send(err);
                }
                else{
                    res.json(item);
                }
        }
        );
    }
    });
}
exports.Seleccionarxoperacion = function(req,res){
    Item.find({TIPODEOPERACION:req.body.TIPODEOPERACION},
        function(err,item){
            if(err){
                res.send(err);
            }
            else{
                res.json(item);
            }
        });
}