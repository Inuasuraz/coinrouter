const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user01:user01@ds253104.mlab.com:53104/coinrouter');

const CoinRouter = require('./routes/CoinRouter');

app.use(express.static('public'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/coins', CoinRouter);

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.listen(port,function(){
    console.log('Node js Express js Tutorial')
});