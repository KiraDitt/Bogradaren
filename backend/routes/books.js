import express from 'express'; 
import fetch from 'node-fetch'; 
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const GOOGLE_BOOKS_API = 'https://www.googleapis.com/books/v1/volumes';

router.get('/search', async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing query parameter: q' });
  }

  try {
    const response = await fetch(`${GOOGLE_BOOKS_API}?q=${encodeURIComponent(q)}&key=${process.env.GOOGLE_BOOKS_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching from Google Books API:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

export default router;
