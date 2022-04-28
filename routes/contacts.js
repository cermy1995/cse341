const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

//Get routes
router.get('/', contactsController.getAllContacts);
router.get('/:id', contactsController.getSingleContact);

//POST routes to create a new contact
router.post('/', contactsController.createContact);

//PUT routes to update a contact
router.put('/:id', contactsController.updateContact);

//Delete route for removing a contact
router.delete('/:id', contactsController.deleteContact);

module.exports = router;