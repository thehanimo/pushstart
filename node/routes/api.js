const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const fileName = __dirname + '/tasks.json'

router.get('/tasks', function(req, res) {
    fs.readFile(fileName, function read(err, data) {
        if (err) {
            return res.status(403).send({success: false, msg: 'Error.'})
        }
        return res.status(200).send(JSON.parse(data))
    });
});

router.post('/tasks', function(req, res) {
    fs.readFile(fileName, function read(err, data) {
        if (err) {
            return res.status(403).send({success: false, msg: 'Error.'})
        }
        obj = JSON.parse(data);
        obj["tasks"].push({
            "taskTitle": req.body.data.taskTitle,
            "category": req.body.data.category.value,
            "status":req.body.data.status.value
        })
        fs.writeFile(fileName, JSON.stringify(obj), function(err) {
            if(err) {
                return res.status(403).send({success: false, msg: 'Error.'})
            }
            return res.status(200).send({success: true, msg: 'Updated'})
        })
    })
});


module.exports = router;