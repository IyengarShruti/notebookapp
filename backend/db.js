const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/"
const connectToMongo = () => {
    mongoose.connect(mongoURI, {})
        .then(result=>console.log("connected"))
        .catch(err=>console.log(err))
}
module.exports = connectToMongo;