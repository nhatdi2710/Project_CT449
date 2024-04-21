const express = require('express');
const db = require('./Libra/config/db/db_connect');
const MongoDB = require("./Libra/utils/mongodb.utils");
const app = require('./app');

const PORT = 3000;

async function startServer() {
    try {
        // Connect to MongoDB -> ct449-db
        await MongoDB.connect(db.connect.uri);
        console.log("Connected to the Database!");

        // Go to / and Run on PORT: 3000
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        }); 
    } catch (error) {
        console.log("Cannot connect to the Database! ", error);
        process.exit();
    }
}

startServer();