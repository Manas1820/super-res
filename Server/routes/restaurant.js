const router = require('express').Router();
const db = require('../db')

// To create a new restaurants
router.post('/restaurant', async(req, res) => {
    try {
        const result = await db.query(
            "INSERT INTO restaurants(name,location,price_range) VALUES($1,$2,$3) returning *", [req.body.name, req.body.location, req.body.price])
        return res.status(200).json(result)
    } catch (e) {
        return res.status(400).json({
            "message": e
        })
    }
})

//To get all the restaurants
router.get('/restaurant', async(req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants")
        return res.status(200).json({
            "results": results['rowCount'],
            "restaurant": results["rows"]
        })
    } catch (e) {
        return res.status(400).json({
            "message": e
        })
    }
})

// To get a specific restaurant
router.get('/restaurant/:id', async(req, res) => {
    try {
        const result = await db.query("SELECT * FROM restaurants WHERE id=$1", [req.params.id])
        return res.status(200).json({
            "results": result['rowCount'],
            "restaurant": result["rows"]
        })
    } catch (e) {
        return res.status(400).json({
            "message": e
        })
    }
})

// To edit a specific restaurant
router.put('/restaurant/:id', async(req, res) => {
    try {
        const result = await db.query(
            "UPDATE restaurants SET name=$1,location=$2,price_range=$3 WHERE id=$4", [req.body.name, req.body.location, req.body.price, req.params.id])
        return res.status(200).json(result)
    } catch (e) {
        return res.status(400).json({
            "message": e
        })
    }
})

// To delete a specific restaurant
router.delete('/restaurant/:id', async(req, res) => {
    try {
        const result = await db.query(
            "DELETE FROM restaurants WHERE id=$1", [req.params.id])
        return res.status(204).json({
            'status': "success"
        })
    } catch (e) {
        return res.status(400).json({
            "message": e
        })
    }
})

module.exports = router;