const express = require('express');
const bodyParser = require('body-parser');
const identityRoutes = require('./utils/routes/identityRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set routing
app.use('/api/identity', identityRoutes);

// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));