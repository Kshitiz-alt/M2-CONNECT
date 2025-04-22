import express from 'express';
import zipRoute from './src/Components/Interfaces/Zip.js';
import cors from 'cors'

const app = express();
const port = 5000

app.use(cors())

app.use(express.json());

// Register the ZIP route here
app.use(zipRoute);

// Other routes, static files, etc.
app.listen(port, () => console.log('Server running on port 5173'));