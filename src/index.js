const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment =require('moment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use (function (req, res, next) {
        const today = moment();
        console.log(today.format("YYYY-MM-DD hh-mm-ss") + ", " + req.ip + ", " + req.path);
        next()
  }
  );

// mongoose.connect("mongodb+srv://functionup-radon:radon123@cluster0.q0p7q73.mongodb.net/monisha04-DB?retryWrites=true&w=majority", {
//     useNewUrlParser: true
// })
// .then( () => console.log("MongoDb is connected"))
// .catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
