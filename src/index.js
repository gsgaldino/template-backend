const environment = process.env.NODE_ENV || 'development';
const { resolve } = require('path');

require('dotenv').config({
  path: resolve(__dirname, `../config/.env.${environment}`),
});

const { listen } = require('./app');

const port = process.env.PORT || 3000;
const callback = () => console.log('server running on port', port, `${environment} environment`);

listen(port, callback);
