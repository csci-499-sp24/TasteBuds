const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is a testing route message');
    // this gets executed when user visit http://localhost:8080/api/home/test
});

router.get('/json', (req, res) => {
    res.send({id: 0, message: "this is a json object", weed_number: 420, example_array: [1,2,3,4,5]});
    // this gets executed when user visit http://localhost:8080/api/home/test
});

module.exports = router;