const express = require('express');
const app = express();
const { mongoose } = require('./db.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/routes');


app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use('/api', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
