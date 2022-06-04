const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const identityRoutes = require('./utils/routes/identityRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use('/assets',express.static(__dirname + '/public/assets'));


// set routing
app.use('/api/identity', identityRoutes);

// group pages identity
app.get('/dashboard', function(req, res) {
    res.render('pages/dashboard/v_index');
});

// group pages identity
app.get('/identity', function(req, res) {
    res.render('pages/identity/v_index');
});


// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));