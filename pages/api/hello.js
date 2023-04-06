const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.post('/api/save-screenshot', (req, res) => {
  const { url, screenshot } = req.body;
  const buffer = Buffer.from(screenshot, 'base64');
  const filename = `${Date.now()}.png`;
  fs.writeFile(`screenshots/${filename}`, buffer, err => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Unable to save screenshot' });
    } else {
      console.log(`Saved screenshot for ${url} as ${filename}`);
      res.json({ message: `Saved screenshot for ${url} as ${filename}` });
    }
  });
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
