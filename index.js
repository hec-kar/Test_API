const express = require('express');

const app = express();
const port = 3000;

// * Cấu hình body parser;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

// * ROUTER
const homeRouter = require('./app/routers/homeRouter');
const bookRouter = require('./app/routers/bookRouter');

homeRouter(app);
bookRouter(app);



app.listen(port, '127.0.0.1' ,() => {
    console.log(`listening on port ${port}`);
}); 