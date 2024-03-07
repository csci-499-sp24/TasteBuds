const express = require('express');
const router = express.Router();
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

// https://rapidapi.com/guides/call-apis-in-express-via-node-fetch
router.get('/', async function (req, res) {
    const url = "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2";

    const get_options = {
        method: 'GET',
        headers: {
            'API-Host': 'famous-quotes4.p.rapidapi.com',
            'API-Key': 'api-key-here'
        }
    };

    // promise syntax
	fetch(url, get_options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));

    try {
        let response = await fetch(url, get_options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }
});

router.get('/multisend', (req, res) => {
    res.send("Line 1");
    //res.send("Line 2");
});

module.exports = router