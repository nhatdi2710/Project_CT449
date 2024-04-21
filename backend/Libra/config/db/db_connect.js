const db = {
    connect: {
        uri: process.env.MONGODB_URI || "mongodb://localhost:27017/ct449-db",
        port: 27017
    }
}

module.exports = db;