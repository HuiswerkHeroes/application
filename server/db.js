const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('\x1b[47m\x1b[30m[LOG]\x1b[0m \x1b[34m[MongoDB] \x1b[0mConnected');
    } catch (err) {
        console.error(`\x1b[41m\x1b[30m[ERROR]\x1b[0m \x1b[34m[MongoDB] \x1b[31m${err.message}\x1b[0m`);
        process.exit(1);
    }
};

module.exports = connectDB;
