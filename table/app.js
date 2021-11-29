 //imports
 const express = require('express')
 const app = express()
 const path = require("path")
 const mysql = require("mysql")
 const hbs = require("hbs")
 const port = 3000

 const bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({ extended: true }));

 //db connection
 const conn = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password:'',
     database: 'bookingmachinetable'
 });


//static files
app.use(express.static('public'));

app.use(express.json());

app.set('view engine', 'hbs')
conn.connect((error) =>{
    if(error){
        console.log('err in connection')
    }
    else{
        console.log('mysql connected')
    }
});

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


//listening to the port
app.get('', (req, res) => {
    res.sendFile(__dirname + '../views/index')
});




//listening to port
app.listen(port, () => console.info('listening on ' + port ))