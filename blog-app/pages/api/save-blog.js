import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, post } = req.body;

    const data = {
      title: title,
      post: post,
    };

    const filePath = path.join(process.cwd(), 'pages', 'data', 'blog.json');

    try {
      const previousBlogs = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      previousBlogs.push(data);

      fs.writeFileSync(filePath, JSON.stringify(previousBlogs, null, 2));

      res.status(200).json({ message: 'Blog data saved successfully.' });
    } catch (error) {
      res.status(500).json({ error: 'Error saving blog data.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
