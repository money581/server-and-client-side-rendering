const path = require('path');


const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db=require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
// app.get('/delete',function(req,res){
//     con.connect(function(error){
//         if(error) console.log(error);
//         var sql="delete from products where id=?";
//         var id=req.query.id;
//         con.query(sql,[id],function(error,result){
//             if(error) console.log(error);
//             res.redirect('/products')
//         })
//     })
// })

app.use(errorController.get404);

app.listen(3000);
