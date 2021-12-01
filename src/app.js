const path = require('path');

const express = require('express');

const app = express();

/*mongoose.connect('mongodb://localhost/ALPHAS', { useNewUrlParser: true , useUnifiedTopology: true})
 .then (db=> console.log('Db Connected'))
 .catch(err => console.log(err));*/

const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'views' )));

//routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});