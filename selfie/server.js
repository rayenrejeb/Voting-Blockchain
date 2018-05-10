var express = require('express')
var multer  = require('multer')
var bodyParser = require('body-parser')
var html = require('html');
var cons = require('consolidate');
var app = express()
var path = require('path');
var SHA256 = require('crypto-js/sha256');
var mkdirp = require('mkdirp');
const fs = require('fs');
const testFolder = './app/uploads/';
const Sequelize = require('sequelize')
const sequelize = new Sequelize('client', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })

  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    cinnp: {
      type: Sequelize.STRING
    }
  });
  var users = []
  // force: true will drop the table if it already exists
  User.findAll({
    attributes: ['firstName', 'lastName' ,'cin']
  }).then(user => {
      users = user
    for(let i = 0; i < users.length ; i++)
        console.log(users[i].dataValues)
  })


app.engine('html', cons.swig)
app.set('views', path.join(__dirname, './app'));
app.use('/static',express.static(path.join(__dirname, './app')));

app.set('view engine', 'html');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));




app.get('/api/getUsers',function(req,res){
  res.json(users);
})

  app.post('/api/uploadPhotos', function (req, res, next) {
      console.log("hey");
    var pic1 = req.body.image1.replace(/^data:image\/png;base64,/, "");
    var pic2 = req.body.image2.replace(/^data:image\/png;base64,/, "");
    var pic3 = req.body.image3.replace(/^data:image\/png;base64,/, "");
   
    
    var hashDir = SHA256(pic1+pic2+pic3);

    mkdirp('/var/www/html/selfie/app/uploads/'+hashDir, function (err) {
      if (err)
      {
        res.json({"code":-1,"message":err})
      }
      else 
      {
        console.log('dir created!')
        require("fs").writeFile("app/uploads/"+hashDir+"/1.png", pic1, 'base64', function(err) {
          console.log(err);
          });
          require("fs").writeFile("app/uploads/"+hashDir+"/2.png", pic2, 'base64', function(err) {
            console.log(err);
          });
          require("fs").writeFile("app/uploads/"+hashDir+"/3.png", pic3, 'base64', function(err) {
            console.log(err);
          });
          res.json({"code":0,"hash":hashDir.toString(),"message":"Pictures are uploaded successfully! they will be verified by admin"})
      }
    
  });
  })
  app.listen(2720, () => {
    console.log('Example app listening on port 2720!');
  });
  app.get('/',function(req,res){
    res.render('index')
})
app.get('/pics',function(req,res){
  res.render('pics')
})
app.get('/admin',function(req,res){
 
  res.render('admin');
})

app.get('/dashboard',function(req,res){
  res.render('dashboard')
})

app.get('/result',function(req,res){
  res.render('result')
})


app.get('/api/getPics',function(req,res){
  var tab = [];
  fs.readdirSync(testFolder).forEach(file => {
        tab.push(file);
    });
  
  res.json({"tableau":tab});

})