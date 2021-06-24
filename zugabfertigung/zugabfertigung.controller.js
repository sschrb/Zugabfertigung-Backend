const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const zugabfertigungService = require('./zugabfertigung.service');


// routes


router.post('/', authorize(), createSchema, create);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), update);








router.delete('/:id', authorize(), _delete);

module.exports = router;



function createSchema(req, res, next) {
    const schema = Joi.object({
        

      

       

        Zugnummer: Joi.string().allow(''),
Fahrplandatum: Joi.string().allow(''),
Versandbahnhof: Joi.string().allow(''),
Bestimmungsbahnhof : Joi.string().allow(''),
Wagenmeister : Joi.string().allow(''),
Kundenreferenz: Joi.string().allow(''),
Wagenliste_betrieblich: Joi.string().allow(''),
Status: Joi.string().allow(''),
Bremszettel: Joi.string().allow(''),
Gewicht_arbTf: Joi.string().allow(''),
Bremsgewicht_arbTf: Joi.string().allow(''),
Achszahl_arbTf: Joi.string().allow(''),
Laenge_arbTf: Joi.string().allow(''),
Mindestbremshundertstel: Joi.string().allow(''),
Datum_Bremszettel: Joi.string().allow(''),
AusführendePerson: Joi.string().allow(''),

    });
    validateRequest(req, next, schema);
}

function create(req, res, next) {

  

    zugabfertigungService.create(req.body)
        .then(() => res.json({ message: 'zugabfertigung gespeichert' }))
        .catch(next);
}





function getAll(req, res, next) {
    zugabfertigungService.getAll()
        .then(zugabfertigung => res.json(zugabfertigung))
        .catch(next);
}



function getById(req, res, next) {
    zugabfertigungService.getById(req.params.id)
        .then(zugabfertigung => res.json(zugabfertigung))
        .catch(next);
}



function update(req, res, next) {
    zugabfertigungService.update(req.params.id, req.body)
        .then(zugabfertigung => res.json(zugabfertigung))
        .catch(next);
}

function _delete(req, res, next) {
    zugabfertigungService.delete(req.params.id)
        .then(() => res.json({ message: 'zugabfertigung gelöscht' }))
        .catch(next);
}