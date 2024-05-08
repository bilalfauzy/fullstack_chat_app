const mongoose = require('mongoose')

const connectDB = async() => {
    try {
		await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB