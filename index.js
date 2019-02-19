const express = require('express');
const bodyParser = require('body-parser');// body-parser middleware
const cookieParser= require('cookie-parser')
const FileSync = require('lowdb/adapters/FileSync');
const db= require('./db');
const userRoute = require('./routes/user.route')
const app = express();



const port = 3000;
// Set some defaults (required if your JSON file is empty)
// db.defaults({ users: [] })
//   .write();


app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('process.env.SESSION_SECRET'))
app.use(express.static('public'));
// var users=[
//     {id:1,name:'Van'},
//     {id:2,name:'Thinh'}
// ];


app.get('/',  (req,res)=>{// create a URL named
    res.render('index',{
        name:'Tadaaaa'
    });
});
app.use('/users',userRoute)



app.listen(port, () => 
console.log(`Server running on port ${port}!`));