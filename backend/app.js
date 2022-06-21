const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const identityRoutes = require('./utils/routes/identityRoutes');
const identitasRoutes = require('./utils/routes/identitasRoutes');
const kurikulumRoutes = require('./utils/routes/kurikulumRoutes');
const akademikRoutes = require('./utils/routes/akademikRoutes');
const jurusanRoutes = require('./utils/routes/jurusanRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'views'));
app.use('/img',express.static(__dirname + '/public/img'));

 
// set api routing
app.use('/api/identity', identityRoutes);
app.use('/api/identitas', identitasRoutes);
app.use('/api/akademik', akademikRoutes);
app.use('/api/kurikulum', kurikulumRoutes);
app.use('/api/jurusan', jurusanRoutes);



// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));