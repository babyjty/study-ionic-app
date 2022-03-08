//this config file is to ensure my mongo URI is not exposed to the public 
//mongoURI is to be contained in this config file and this config file to be gitignored

if (process.env.NODE_ENV === 'production'){
    module.exports = require('./prod')
} else {
    module.exports = require('./dev')
}