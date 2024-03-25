// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

// server.js
const express = require("express");
const cors = require('cors');
const sequelize = require('./database'); // Adjust the path as necessary

const app = express();
app.use(cors());

async function syncDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
syncDB();

// Sequelize table object.
const database = sequelize.define("sample_data", {
        "\"(PK) id\"": {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        summary: {
            type: DataTypes.STRING,
        },
        instructions: {
            type: DataTypes.STRING,
        },
        cuisines: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        preparationMinutes: {
            type: DataTypes.INTEGER,
        },
        cookingMinutes: {
            type: DataTypes.INTEGER,
        },
        readyInMinutes: {
            type: DataTypes.INTEGER,
        },
        priceperServing: {
            type: DataTypes.INTEGER,
        },
        dishTypes: {
            type: DataTypes.STRING,
        },
        servings: {
            type: DataTypes.INTEGER,
        },
        image: {
            type: DataTypes.STRING,
        },
        diet: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "sample_data",
        timestamps: false,
    },
)

async function sync_table() {
    try {
        await database.sync();
        console.log("The table for the db has been (re)created.");
    }
    catch (error) {
        console.log("Syncing the table failed for this reason: ", error)
    }
};
sync_table();

async function get_first_ten() {
    try {
        const first_ten = await database.findAll({
            subQuery: false,
            limit: 10,
            raw: true,
        });
        console.log("attempting to find the first entries in db");
        console.log(first_ten[0]);
    }
    catch(error){
        console.log("encountered error: ", error)
    }
}
get_first_ten()

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
