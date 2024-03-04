// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

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

// Queries for recipes of a specific cuisine type.
// Added by Ze Hong Wu at the request of Philip.
// Self reminder: use single quotations for values and double quotations for colnames
app.get("/mediterranean", (req, res) => {
    pool.query("SELECT * FROM public.sample_data\n WHERE cuisines LIKE \'%Mediterranean%\'\n ORDER BY \"(PK) id\" ASC ", (err, dbRes)=>{
        if(err){
            console.log(err.message);
        }
        try {
            res.json({message: dbRes.rows});
        } catch {
            console.log("see the error")
        }
    })
});

app.get("/first", (req, res) => {
    pool.query("SELECT * FROM public.sample_data\n WHERE \"(PK) id\" = 1\n ORDER BY \"(PK) id\" ASC ", (err, dbRes)=>{
        if(err){
            console.log(err.message);
        }
        try {
            res.json({message: dbRes.rows});
        } catch {
            console.log("see the error")
        }
    })
});

app.get("/cuisines_types", (req, res) => {
    pool.query("SELECT DISTINCT cuisines FROM public.sample_data\n ORDER BY \"cuisines\" ASC ", (err, dbRes)=>{
        if(err){
            console.log(err.message);
        }
        try {
            res.json({message: dbRes.rows});
        } catch {
            console.log("dbRes.rows doesn't exist or something")
        }
    })
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
