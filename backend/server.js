import express from 'express'; 
import cors from 'cors'; 
import dotenv from 'dotenv'; 
import booksRoute from './routes/books.js'; 

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', booksRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Serveren kører på http://localhost:${PORT}`);
});
