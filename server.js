const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Replace with your actual n8n webhook URL
const N8N_WEBHOOK_URL = 'https://navithakamisetty.app.n8n.cloud/webhook-test/form-submit';

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

app.post('/submit', async (req, res) => {
    console.log('Received form data:', req.body);
  const { name, email, company, message } = req.body;

  // Validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  try {
    // Send data to n8n webhook
    await axios.post(N8N_WEBHOOK_URL, {
      name,
      email,
      company,
      message
    });

    res.status(200).json({ message: 'Form submitted and sent to n8n.' });
  } catch (error) {
    console.error('Error sending data to n8n:', error.message);
    res.status(500).json({ error: 'Failed to send data to n8n.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
