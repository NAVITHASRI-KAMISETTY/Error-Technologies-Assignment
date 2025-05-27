const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
  console.log('Received form data:', req.body);
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
