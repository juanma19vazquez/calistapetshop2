const express = require('express');
const path = require('path');
const bcrypt = require("bcrypt");

// Create our Express app
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// Base middlewares
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.set('views', path.join(__dirname, 'views'))
//Rutas
app.get("/", function (req, res) {
    res.render('inicio',{title:"INICIO CALISTA"})
});
app.get("/item1", function (req, res) {
    res.render('item1')
});
app.get("/contacto", function (req, res) {
    res.render('contacto')
});

app.get("/signup", function (req, res) {
    res.render('signup')
});

app.get("/signup-exitoso", function (req, res) {
  res.render("signup-existoso");
});

app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/nodesarrollada", function (req, res) {
  res.render("nodesarrollada");
});

app.get("/login-exitoso", function (req, res) {
  res.render("login-exitoso");
});
app.get("/login-incorrecto", function (req, res) {
  res.render("login-incorrecto ");
});

const users = [
  {
  id:1,
  nombre: "Test",
  telefono:2895023,
  direccion:"Rivera 1234",
  correo:"test@hotmail.com",
  password:123456,
}
];

app.get("/users", function (req, res) {
  res.send(users);
});

app.post("/signup", async function (req, res) {
  const id = users.length + 1;
  const name = req.body.name;
  const telefono = req.body.telefono;
  const direccion = req.body.direccion;
  const correo = req.body.correo;
  
  const newUser = {
    Id: id,
    nombre: name,
    telefono: telefono,
    direccion: direccion,
    correo: correo,
    password: await bcrypt.hash(req.body.password, 10),
  };
  users.push(newUser);
  console.log(users);
  
  res.render('signup-exitoso');
});

app.post('/login', async function (req, res) {
  const correo = req.body.correo;
  const password = req.body.password;
  let usuarioObj = null;
  let resultado = false;
  console.log(correo);
  console.log(password);
  /*res.render("inicio");*/

  users.forEach(function(usr){
    if(usr.correo === correo) {
      usuarioObj = usr;
    }
    console.log(usuarioObj);

  });
  if (usuarioObj !== null) {
    resultado = await bcrypt.compare(password, usuarioObj.password);
  }
  if (resultado) {
    res.redirect("login-exitoso");
    return;
  }
  else {
    res.redirect("login-incorrecto");
  }
});

const port = 2008;
  const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });