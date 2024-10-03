const express = require('express');
const router = express.Router();

const {createBooking,getBookingsForUser, deleteBooking ,getBookingsForHost,updateBooking,} = require('../services/vanService');

// GET request to retrieve all items
router.get('/items', async (req, res) => {
    try {
        const items = await getItems();  
        res.status(200).json(items);     
       
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve items' }); 
    }
});


// POST request to add a new item
router.post('/items', async (req, res) => {
    try {
        const newItem = await addItem(req.body);  
        res.status(201).json(newItem);           
    } catch (error) {
        res.status(500).json({ error: 'Failed to add item' }); 
    }
});

// PUT request to update an existing item
router.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await updateItem(req.params.id, req.body);  
        res.status(200).json(updatedItem);                        
    } catch (error) {
        res.status(500).json({ error: 'Failed to update item' });      
    }
});

// DELETE request to remove an item
router.delete('/items/:id', async (req, res) => {
    try {
        await deleteItem(req.params.id);          
        res.status(204).send();                   
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete item' }); 
    }
});

