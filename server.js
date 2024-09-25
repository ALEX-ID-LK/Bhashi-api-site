import express from 'express';
import checkApiKey from './middleware/checkApiKey.js';
import miscRoutes from './routes/misc.js';
import { addOrUpdateApiKey } from './controllers/apiKeyController.js';
import path from 'path';

const app = express();
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static('public'));

// Protect all routes under '/misc' with the API key middleware
app.use('/misc', checkApiKey, miscRoutes);

// API key management route
app.post('/apikey/add', addOrUpdateApiKey);

// Root endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
