const express = require('express');
const cors = require('cors');

const app = express();

// CORs is required so that frontend can start consuming the apis
app.use(cors());

const PORT = 5000;

// GET Request
app.get('/hello-world', (req, res) => {
  res.send({
    msg: "Blah blah"
  });
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
})