const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

//function for getting all contacts from mongodb
const getAllContacts = async (req, res, next) => {
    const payload = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find();
    payload.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
    console.log(payload);
};

//function for getting a single contact from mongodb via id
const getSingleContact = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const payload = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId});
    payload.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = {
    getAllContacts, 
    getSingleContact
};