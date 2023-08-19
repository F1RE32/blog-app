import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'pages', 'data', 'users.json');

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const formData = req.body;

      const jsonData = JSON.parse(fs.readFileSync(filePath));

      jsonData.push(formData);

      fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2)); // Using 2 spaces for indentation

      res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error('An error occurred:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
