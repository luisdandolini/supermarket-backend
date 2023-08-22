const express = require('express');
const router = express.Router();
const ListItem = require('../models/ListItem');

router.get('/list-items', async (req, res) => {
  const items = await ListItem.find();
  return res.json(items);
});

router.post('/list-items', async (req, res) => {
  const newItem = await ListItem.create({
    name: req.body.name,
    quantity: req.body.quantity,
    checked: req.body.checked,
  });

  return res.json(newItem);
});

router.delete('/list-item/:id', async (req, res) => {
  const id = req.params.id;
  const listItemItemDeleted = await ListItem.findByIdAndDelete(id);
  return res.json(listItemItemDeleted);
});

router.put('/list-item/:id', async (req, res) => {
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

module.exports = router;