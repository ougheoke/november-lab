const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000; 

//set the view engine to ejs

app.set('view engine', 'ejs');

let myName = 'Omonegho';

app.get('/', async (req, res) => {
//   res.send('<!DOCTYPE html><html lang="en"><h1>Hello World, is it November?</h1>')
  let result = await res.send(`<h3> Hi, ${ myName }</h3>`);
  console.log(myName);
// res.send(`<h3> Hi, ${ myName }</h3>`)

})

app.get('/show', (req, res) => {
    // res.sendFile('index.html' , { root : __dirname});
  })

  console.log('before app dot get to /ejs')

app.get('/ejs', (req, res) => {
    res.render('index');
})

app.get('/name', (req, res) => {
  console.log("in get to /name:", req.query.ejsFormName)
})

console.log('in the node console');

app.listen(PORT, () => {
    console.log(`Server is running & listening on port: ${PORT}`);
  });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })