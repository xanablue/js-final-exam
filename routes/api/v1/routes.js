const router = require('express').Router()
const { getCollection, ObjectId } = require('../../../dbconnect')

// GET /api/v1/menu
router.get('/menu', async (_, response) => {
    const collection = await getCollection('food-truck', 'menu-items')
    const found = await collection.find().toArray()
    response.send(found)
})

// GET api/v1/menu/:id
router.get('/menu/:id', async (request, response) => {
    const { id } = request.params
    const collection = await getCollection('food-truck', 'menu-items')
    const found = await collection.findOne({ _id: new ObjectId(id) })
    if (found) response.send(found)
    else response.send({ error: { message: `Menu Item with ID ${id} not found!` }})
})

// POST /api/v1/menu
router.post('/menu', async (request, response) => {
    const { name, description, price, image } = request.body
    const collection = await getCollection('food-truck', 'menu-items')
    const { acknowledged, insertedId } = await collection.insertOne({ name, description, price, image })
    response.send({ acknowledged, insertedId })
})

module.exports = router