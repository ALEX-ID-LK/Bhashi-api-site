import express from 'express';
import checkApiKey from './middleware/checkApiKey.js';
import miscRoutes from './routes/misc.js';
import { addOrUpdateApiKey } from './controllers/apiKeyController.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Initialize the app
const app = express();
const port = process.env.PORT || 3000; // Use environment port if available

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files from the "public" folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

// Protect all routes under '/misc' with the API key middleware
app.use('/misc', checkApiKey, miscRoutes);

// API key management route
app.post('/apikey/add', addOrUpdateApiKey);

// Root endpoint, serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
