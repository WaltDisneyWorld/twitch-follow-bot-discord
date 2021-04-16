const mongoose = require('mongoose')
const mongoPath = "mongodb+srv://admin:ADMIN123@cluster0.1hze4.mongodb.net/test?authSource=admin&replicaSet=atlas-6uw0um-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"

module.exports = async() => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}