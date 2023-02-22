var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 8080;

app.configure(function(){
    // app.use(express.static(__dirname + '/'));
    app.use(express.logger('dev'));
    app.use(express.methodOverride());
});


const mongoAtlasUri = 'mongodb+srv://Santivilla23_:Santivilla23_@cluster0.gtuzq8j.mongodb.net/?retryWrites=true&w=majority';
try{
    mongoose.connect(mongoAtlasUri, {useNewUrlParser: true, useUnifiedTopology: true},
        () =>
        console.log('Connected to MongoDB Atlas')
        );
}catch(error){
    console.log("Couldnt connect");
}

const dbConnection = mongoose.connection;
dbConnection.on('error', (err) => console.log(err));
dbConnection.once('open', () => console.log('Connected to MongoDB Atlas'));
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./routes.js')(app)
app.listen(port);
console.log("App por el puerto" +port);