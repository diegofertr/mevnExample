const express = require('express');
const router = express.Router();

const Item = require('../models/Item');

// get item by id
router.get('/:id', (req, res, next) => {
  Item.findById(req.params.id, (err, item) => {
    res.json(item);
  })
});

// get all data- /item
router.get('/', (req, res) => {
  Item.find((err, items) => {
    if (err) {
      throw err;
    } else {
      res.json(items);
    }
  })
});

// add data
router.post('/', (req, res) => {
  const item = new Item(req.body);
  item.save()
    .then(item => {
      res.status(200).json({item: 'Item agregado!'});
    })
    .catch(err => {
      res.status(400).send({item: 'Error al agregar el Item!'});
    });
});

// update data /item/231232135 -PUT
router.put('/:id', (req, res, next) => {
  Item.findById(req.params.id, (err, item) => {
    if (!item) {
      return next(new Error('no se pudo cargar documento'));
    } else {
      item.name = req.body.name;
      item.price = req.body.price;
      item.save()
        .then(item => {
          res.json('Item Actualizado correctamente!');
        })
        .catch(err => {
          res.status(400).send('No se pudo actualizar Item!');
        })
    }
  })
});

// delete data
router.delete('/:id', (req, res, next) => {
  Item.findByIdAndRemove(req.params.id, (err, item) => {
    if (err) {
      res.json(err);
    } else {
      res.json('Item eliminado correctamente!');
    }
  })
});

module.exports = router;
