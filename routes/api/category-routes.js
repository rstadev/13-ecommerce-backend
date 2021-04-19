const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
 const categories = Category.findAll({
    include: {
      model: Product,
      attributes: ['product_name']
    }
  }).catch((err) => {
    res.json(err);
  });
  res.json(categories)
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const oneCat = Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['category_id']
    }
  }).catch(err => {
    console.log(err);
    res.json(err);
  })
  res.json(oneCat);
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then(data => res.json(data)).catch(err => {
    console.log(err);
    res.json(err)})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
