/*const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
//Basically, we pass in all of the pieces of the path, 
//and path.join puts them together. 
//The result is then passed into app.use(express.static()), 
//so Express will know which files to serve.

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });
  */