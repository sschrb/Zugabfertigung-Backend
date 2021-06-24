const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const authorize = require('_middleware/authorize')
const wagendatenBetrieblichService = require('./wagendatenBetrieblich.service');


// routes


router.post('/', authorize(), createSchema, create);
router.get('/', authorize(), getAll);
router.get('/:id', authorize(), getById);
router.put('/:id', authorize(), update);








router.delete('/:id', authorize(), _delete);

module.exports = router;



function createSchema(req, res, next) {
    const schema = Joi.object({
        

      

       


        UIC_Wagennummer: Joi.string().allow(''),
        Wagennummer: Joi.string().allow(''),
        Wagengattung: Joi.string().allow(''),
        Achsen: Joi.string().allow(''),
        LüP: Joi.string().allow(''),
        Eigengewicht: Joi.string().allow(''),
        Automatische_Lastabremsung: Joi.string().allow(''),
        Bremsgewicht_leer: Joi.string().allow(''),
        Bremsgewicht_beladen: Joi.string().allow(''),
        Umstellgewicht: Joi.string().allow(''),
        Handbremse: Joi.string().allow(''),
        Scheibenbremse: Joi.string().allow(''),
        Verbundstoffsohle: Joi.string().allow(''),
        Bremsart: Joi.string().allow(''),

        Ladegewicht: Joi.string().allow(''),

        Bremsstellung: Joi.string().allow(''),
        Bremsgewicht: Joi.string().allow(''),
        Versandbahnhof: Joi.string().allow(''),
        Zielbahnhof: Joi.string().allow(''),
        Bemerkung: Joi.string().allow(''),
        Bremse_aus: Joi.string().allow(''),


    });
    validateRequest(req, next, schema);
}

function create(req, res, next) {

  

    wagendatenBetrieblichService.create(req.body)
        .then(() => res.json({ message: 'WagendatenBetrieblich gespeichert' }))
        .catch(next);
}





function getAll(req, res, next) {
    wagendatenBetrieblichService.getAll()
        .then(wagendatenBetrieblich => res.json(wagendatenBetrieblich))
        .catch(next);
}



function getById(req, res, next) {
    wagendatenBetrieblichService.getById(req.params.id)
        .then(wagendatenBetrieblich => res.json(wagendatenBetrieblich))
        .catch(next);
}



function update(req, res, next) {
    wagendatenBetrieblichService.update(req.params.id, req.body)
        .then(wagendatenBetrieblich => res.json(wagendatenBetrieblich))
        .catch(next);
}

function _delete(req, res, next) {
    wagendatenBetrieblichService.delete(req.params.id)
        .then(() => res.json({ message: 'WagendatenBetrieblich gelöscht' }))
        .catch(next);
}