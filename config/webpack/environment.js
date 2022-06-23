const { environment } = require('@rails/webpacker');
const typescript =  require('./loaders/typescript')

const exposeLoader = require('./loaders/expose');
environment.loaders.append('expose', exposeLoader);

environment.loaders.prepend('typescript', typescript)
module.exports = environment;
