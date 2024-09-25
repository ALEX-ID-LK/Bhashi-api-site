import express from 'express';
import { youtubeSearcher } from '../utils/ytsearch.js';
import checkApiKey from '../middleware/checkApiKey.js';
import { fetchAPOD } from '../utils/apod.js';
import { fetchRandomCocktail } from '../utils/cocktail.js';
import { getLocationInfo } from '../utils/location.js';
import { fetchThreadData } from '../utils/threads.js';
import { fetchTikTokData } from '../utils/tiktok.js';
import { fetchSportyNews } from '../utils/sport.js';
import { fetchDeraNews } from '../utils/derananews.js';
import { fetchIOSNews } from '../utils/iosnews.js';
import { fetchEsanaNews } from '../utils/esana.js';
import { fetchCurrentMatches } from '../utils/cric.js'; 
// Import the current matches function
import { Bing } from '../utils/bing.js';

const router = express.Router();

// YouTube Search Route
router.get('/youtube/search', checkApiKey, async (req, res) => {
  const { q, apikey } = req.query;

  if (!q || !apikey) {
    return res.status(400).json({ status: 'error', message: 'Search query and apikey parameters are required' });
  }

  try {
    const searchResults = await youtubeSearcher(q, apikey);
    return res.json(searchResults);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

router.get('/youtube/search', checkApiKey, async (req, res) => {
  const { q, apikey } = req.query;

  if (!q || !apikey) {
    return res.status(400).json({ status: 'error', message: 'Search query and apikey parameters are required' });
  }

  try {
    const searchResults = await youtubeSearcher(q, apikey);
    return res.json(searchResults);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// YouTube Search Route
router.get('/youtube/search', checkApiKey, async (req, res) => {
  const { q, apikey } = req.query;

  if (!q || !apikey) {
    return res.status(400).json({ status: 'error', message: 'Search query and apikey parameters are required' });
  }

  try {
    const searchResults = await youtubeSearcher(q, apikey);
    return res.json(searchResults);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

router.get('/bing', checkApiKey, async (req, res) => {
  const { q, apikey } = req.query;

  if (!q || !apikey) {
    return res.status(400).json({ status: 'error', message: 'Search query and apikey parameters are required' });
  }

  try {
    const results = await Bing(q); // Use the renamed function
    return res.json(results);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});
// NASA Astronomy Picture of the Day (APOD) Route
router.get('/apod', checkApiKey, async (req, res) => {
  const { apikey } = req.query;

  if (!apikey) {
    return res.status(400).json({ status: 'error', message: 'API key parameter is required' });
  }

  try {
    const apodData = await fetchAPOD(apikey);
    return res.json(apodData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// Random Cocktail Route
router.get('/cocktailrandom', checkApiKey, async (req, res) => {
  try {
    const cocktailData = await fetchRandomCocktail();
    return res.json(cocktailData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// Location Info Route
router.get('/location/:ipAddress', checkApiKey, async (req, res) => {
  const { ipAddress } = req.params;

  try {
    const locationData = await getLocationInfo(ipAddress);
    return res.json(locationData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// Thread Data Route
router.get('/thread', checkApiKey, async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ status: 'error', message: 'Thread URL parameter is required' });
  }

  try {
    const threadData = await fetchThreadData(url);
    return res.json(threadData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// TikTok Data Route
router.get('/tiktok', checkApiKey, async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ status: 'error', message: 'TikTok URL parameter is required' });
  }

  try {
    const tiktokData = await fetchTikTokData(url);
    return res.json(tiktokData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// Sporty News Route
router.get('/sportynews', checkApiKey, async (req, res) => {
  const { apikey } = req.query;

  if (!apikey) {
    return res.status(400).json({ status: 'error', message: 'API key parameter is required' });
  }

  try {
    const sportyNewsData = await fetchSportyNews(apikey);
    return res.json(sportyNewsData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// Derana News Route
router.get('/DeranaNews', checkApiKey, async (req, res) => {
  const { apikey } = req.query;

  if (!apikey) {
    return res.status(400).json({ status: 'error', message: 'API key parameter is required' });
  }

  try {
    const deNewsData = await fetchDeraNews(apikey);
    return res.json(deNewsData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// iOS News Route
router.get('/iosNews', checkApiKey, async (req, res) => {
  const { apikey } = req.query;

  if (!apikey) {
    return res.status(400).json({ status: 'error', message: 'API key parameter is required' });
  }

  try {
    const iosNewsData = await fetchIOSNews(apikey);
    return res.json(iosNewsData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// Esana News Route
router.get('/esana', checkApiKey, async (req, res) => {
  const { apikey } = req.query;

  if (!apikey) {
    return res.status(400).json({ status: 'error', message: 'API key parameter is required' });
  }

  try {
    const esanaNewsData = await fetchEsanaNews(apikey);
    return res.json(esanaNewsData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

// Current Cricket Matches Route
router.get('/cric', checkApiKey, async (req, res) => {
  const { apikey } = req.query;

  if (!apikey) {
    return res.status(400).json({ status: 'error', message: 'API key parameter is required' });
  }

  try {
    const currentMatchesData = await fetchCurrentMatches(apikey); // Call the fetchCurrentMatches function
    return res.json(currentMatchesData);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

import {fetchISSLocation} from '../utils/iss.js';
// ISS Location Route
router.get('/iss', checkApiKey, async (req, res) => {
  const { apikey } = req.query;

  if (!apikey) {
    return res.status(400).json({ status: 'error', message: 'API key parameter is required' });
  }

  try {
    const ISSLocation = await fetchISSLocation(apikey); // Call the fetchCurrentMatches function
    return res.json(ISSLocation);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});

import {fetchDeliriusData} from '../utils/hirunews.js';
// ISS Location Route
router.get('/chatgpt', checkApiKey, async (req, res) => {
  const { apikey } = req.query;

  if (!apikey) {
    return res.status(400).json({ status: 'error', message: 'API key parameter is required' });
  }

  try {
    const HiruNews = await fetchDeliriusData(apikey); // Call the fetchCurrentMatches function
    return res.json(HiruNews);
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
});
  

export default router;
