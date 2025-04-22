import express from 'express';
import zipRoute from './src/Components/Interfaces/Zip.js';
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const app = express();
const port = 5000

app.use(cors())

app.use(express.json());

// Register the ZIP route here
app.use(zipRoute);

// Other routes, static files, etc.
app.listen(port, () => console.log('Server running on port 5173'));