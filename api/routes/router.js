const express = require('express');
const fairyTale = require('./../model');
const fairyTaleList = require('./../modelList');
const router = express.Router();

// require('./audio');
// require('./author');
// require('./favorite');
// require('./folk');
// require('./lullabies');
// require('./recent-uploaded');

router.get('/fairytales', (req, res, next) => {
    fairyTale.find({})
        .then(function (fairytales) {
            res.json({fairytales})
        }).catch(next)
});

router.get('/fairytales/:id', (req, res, next) => {
    fairyTale.findById(req.params.id, (err, fairytales) => {
            if (err) {
                res.status(400).json(err)
            }
            res.status(200).json(fairytales)
        })


});

router.post('/fairytales', (req, res, next) => {
    new fairyTale(req.body.fairytale)
        .save()
        .then(function (fairytale) {
            res.json({fairytale})
        })
        .catch(next)
});

router.get('/fairytales/:id', function (req, res) {
    fairyTale.findById(req.params.id, function (err, fairyTale) {
        fairyTale.audioUrl = req.body.fairyTale.audioUrl || fairyTale.audioUrl;
        fairyTale.createTime = req.body.fairyTale.createTime || fairyTale.createTime;
        fairyTale.id = req.body.fairyTale.id || fairyTale.id;
        fairyTale.imageUrl = req.body.fairyTale.imageUrl || fairyTale.imageUrl;
        fairyTale.lullaby = req.body.fairyTale.lullaby || fairyTale.lullaby;
        fairyTale.text = req.body.fairyTale.text || fairyTale.text;
        fairyTale.updateTime = req.body.fairyTale.updateTime || fairyTale.updateTime;
        fairyTale.updated = req.body.fairyTale.updated || fairyTale.updated;

    })

});

router.delete('/fairytales/:id', function (req, res) {
    var id = req.params.id;
    fairyTale.remove({
        _id: id
    }, function () {
        res.json()
    })
});

// audio-fairy-tales

router.get('/audio-fairy-tales', (req, res, next) => {
    fairyTale.find({})
        .then(function (audioFairyTales) {
            res.json({audioFairyTales})
        }).catch(next)
})

router.get('/audio-fairy-tales/:id', (req, res, next) => {
    fairyTale.find({})
        .then(function (audioFairyTales) {
            res.json({audioFairyTales})
        }).catch(next)
});


//author
router.get('/author', (req, res, next) => {
    fairyTale.find({})
        .then(function (authors) {
            res.json({authors})
        }).catch(next)
})

router.get('/author/:id', (req, res, next) => {
    fairyTale.find({})
        .then(function (authors) {
            res.json({authors})
        }).catch(next)
});

//folk

router.get('/folk', (req, res, next) => {
    fairyTale.find({})
        .then(function (folkFairyTales) {
            res.json({folkFairyTales})
        }).catch(next)
})

router.get('/folk/:id', (req, res, next) => {
    fairyTale.find({})
        .then(function (folkFairyTales) {
            res.json({folkFairyTales})
        }).catch(next)
});
// lullabies
router.get('/lullabies', (req, res, next) => {
    fairyTale
        .find({lullaby: true})
        .then(function (lullabiesFairyTales) {
            res.json({lullabiesFairyTales})
        }).catch(next)
})

router.get('/lullabies/:id', (req, res, next) => {
    fairyTale.find({})
        .then(function (lullabiesFairyTales) {
            res.json({lullabiesFairyTales})
        }).catch(next)
});






module.exports = router
