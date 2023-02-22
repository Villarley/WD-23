var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var calculadoraenmongo = new Schema(
    {
        OPERANDO1:String,
        OPERANDO2:Number,
        TIPODEOPERACION:String,
        RESULTADO:String,
        // USUARIO:{
        //     CORREO:String,
        //     NOMBRECOMPLETO:String
        // }
    }
);
module.exports = mongoose.model('Calculadoraenmongo', calculadoraenmongo);