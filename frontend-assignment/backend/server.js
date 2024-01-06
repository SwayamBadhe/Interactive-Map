const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const data = require('./data.json');

app.get('/api/data', (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
