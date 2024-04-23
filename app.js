const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const loginRouters=require('./routers/login');
const chatRouters=require('./routers/chat');



app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRouters);
app.use(chatRouters);

app.use((req, res, next) => {
  res
    .status(404)
    .send('<h1>Page is not Found</h1>');
});

app.listen(3000);