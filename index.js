const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors({
  origin: '*'
}))
const PORT = 3000;

async function connectDatabase() {
  await mongoose.connect('mongodb://localhost:27017')
}

app.listen(PORT, () => {
  connectDatabase().catch((error) => {
    console.log(`Erro connecting database: ${error}`);
  });
  app.use('/', routes);
  console.log(`Example app listening on port ${PORT}`);
});
