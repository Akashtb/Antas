const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  const contactInfo = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\n`;
  fs.appendFile('contacts.txt', contactInfo, err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Unable to save contact information' });
    } else {
      console.log('Contact information saved');
      res.status(200).json({ message: 'Contact information saved' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
