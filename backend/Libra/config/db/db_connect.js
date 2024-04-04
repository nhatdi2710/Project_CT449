const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/ct449-db');
        console.log('Connected to the Database!');
    } catch (error) {
        console.log('Cannot connect to Datatbase!');
    }
}

module.exports = {connect};