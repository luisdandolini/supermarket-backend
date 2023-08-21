const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
const PORT = 3000;

async function connectDatabase() {
  await mongoose.connect('mongodb://localhost:27017')
}

const listItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  checked: Boolean,
});

const ListItem = mongoose.model('list_item', listItemSchema);

app.get('/', (req, res) => {
  res.send("Oi")
});

app.get('/list-items', async (req, res) => {
  const items = await ListItem.find();
  return res.json(items);
});

app.post('/list-items', async (req, res) => {
  const newItem = await ListItem.create({
    name: req.body.name,
    quantity: req.body.quantity,
    checked: req.body.checked,
  });

  return res.json(newItem);
});

app.delete('/list-item/:id', async (req, res) => {
  const id = req.params.id;
  const listItemItemDeleted = await ListItem.findByIdAndDelete(id);
  return res.json(listItemItemDeleted);
});

app.put('/list-item/:id', async (req, res) => {
  const id = req.params.id
  const listItemUpdate = await ListItem.findByIdAndUpdate(id, {
    name: req.body.name,
    quantity: req.body.quantity,
    checked: req.body.checked,
  },
  {
    new: true,
  })
  return res.json(listItemUpdate);
});

app.listen(PORT, () => {
  connectDatabase().catch((error) => {
    console.log(`Erro connecting database: ${error}`);
  });
  console.log(`Example app listening on port ${PORT}`);
});
