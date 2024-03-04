// https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0

const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors());

const testingRoute = require('./routes/test_routes');
const fetchingRoute = require("./routes/fetch_routes")

app.use('/api/home/testing', testingRoute)

app.use('/api/home/fetching', fetchingRoute)

app.get("/api/home", (req, res) => {
    res.json({message: "Hello World!"});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});