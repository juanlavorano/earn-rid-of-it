const router = require('express').Router()
const Item = require('../models/Item')
const express = require('express')

router.post('/add', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        seller: req.body.seller,
        description: req.body.description
    })

    try {
        const savedItem = await item.save()
        res.status(200).send(savedItem)
    } catch (err) {
        res.status(400).send('Error uploading. Please try again')
    }
})

module.exports = router