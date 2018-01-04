const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const itemRoutes = require('./routes/Item');

// connecting to the database
const db = require('mongoose');
db.connect('mongodb://localhost:27017/mevn-stack')
  .then(() => console.log('db connected'))
  .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(cors());
app.use(bodyParser.json());

/**
 * Building the Rest API
 * routes
 */
app.use('/item', itemRoutes);


// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('server on port ', app.get('port'));
});
