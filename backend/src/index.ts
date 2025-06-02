import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import wordRoutes from './routes/words';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use('/api/words', wordRoutes);

app.get('/', (req, res) => {
    res.send('Dictionary API server is running ✅');
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
