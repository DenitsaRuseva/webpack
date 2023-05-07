const path = require('path');

const config = {
    entry: './src', //if filename not difine -> will search for index
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production' //production default
}

module.exports = config;