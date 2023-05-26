/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
app.get('/', (request, response) => {
  response.send('Hello!');
});
// eslint-disable-next-line no-console
app.listen(1807, () => console.log('Server started at http://localhost:1807'));
