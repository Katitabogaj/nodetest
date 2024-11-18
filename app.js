
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`A szerver a http://localhost:${port}-on fut.`);
  });