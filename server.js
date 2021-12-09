const express = require('express');
const mainroutes = require('./routes/mainRoutes.js');
const errorroutes = require('./routes/errorRoute.js');
const { urlencoded } = require('express');

const app = express();
app.use(express.static('public'))
app.set(express-urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.use(mainRoutes);
app.use(errorRoute);


port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});