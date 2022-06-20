require('dotenv').config();
const app = require('./app');

const port = process.env.PORT || 3000;
const callback = () => console.log(`server running on port ${port}`);

app.listen(port, callback);
