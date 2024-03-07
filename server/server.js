const express = require("express");
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());

// Database connection info
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false // just for development only; 
    }
});

pool.connect();

// pool.query("SELECT * FROM public.sample_data\n ORDER BY \"(PK) id\" ASC ", (err, res)=>{
//     if(!err){
//         console.log(res.rows);
//     } else{
//         console.log(err.message);
//     }
// })

app.get("/api/home", (req, res) => {
    pool.query('SELECT NOW()', (err, dbRes) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: 'Database error', details: err.message});
        }
        res.json({message: "Hello World!", timestamp: dbRes.rows[0].now});
    });
});

app.get("/", (req, res) => {
    pool.query("SELECT * FROM public.sample_data\n ORDER BY \"(PK) id\" ASC ", (err, dbRes)=>{
        if(err){
            console.log(err.message);
        }
        res.json({message: dbRes.rows});
    })
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
