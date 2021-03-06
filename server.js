const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
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
    }
  });
  var users = []
  // force: true will drop the table if it already exists
  User.findAll({
    attributes: ['firstName', 'lastName']
  }).then(user => {
      users = user
    // for(let i = 0; i < users.length ; i++)
    //     console.log(users[i].dataValues)
  })




const app = express()

app.use(cors())

//get all users
app.route('/api/users').get((req, res) => {
    res.json({
        users
    })
})

//get specific user
app.route('/api/users/:id').get((req, res) => {
        var requestedUser = req.params['id']
        res.send({id: requestedUser})
})

//ad new user
app.route('/api/users').post((req, res) => {
    res.send(201, req.body);
  })

  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(8000, () => {
  console.log('Server started!')
})

app.post('/api/uploadPics', function (req, res, next) {
  console.log("hey");
var pic1 = req.body.formData;


var hashDir = SHA256(pic1);

mkdirp('/var/www/html/selfie/app/uploads/'+hashDir, function (err) {
  if (err)
  {
    res.json({"code":-1,"message":err})
  }
  else 
  {
    console.log('dir created!')
    require("fs").writeFile("/var/www/html/selfie/app/uploads/"+hashDir+"/1.png", pic1, 'base64', function(err) {
      console.log(err);
      });
      
      res.json({"code":0,"hash":hashDir.toString(),"message":"Pictures are uploaded successfully! they will be verified by admin"})
  }

});
})
app.get('/api/ba3',function(req,res)
{
  res.json({"hello": "world"})
})