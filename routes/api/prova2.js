const express = require('express');
const router = express.Router();


const Prova2 = require('../../models/Prova2');


//@route Get api/items
/*  GET API ITEMS   */

router.get('/', (req, res) => {
    Prova2.find()
        .sort({ date: -1 })
        .then(prova2 => res.json(prova2));
});


/*    POST ITEM      */

router.post('/', (req, res) => {
    const newProva2 = new Prova2({
        name: req.body.name,
        description: req.body.description
    });
    newProva2.save().then(prova2 => res.json(prova2));
});

/*   DELETE ITEM   */

router.delete('/:id', (req, res) => {
    Prova2.findByID(req.params.id)
        .then(prova2 => prova2.remove().then(() => res.json({
            success: true
        })))
        .catch(err => res.status(404).json({
            success: false
        }));
});

module.exports = router;