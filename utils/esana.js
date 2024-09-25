// utils/esananews.js
import Esana from '@sl-code-lords/esana-news';

const api = new Esana(); // Initialize the Esana API

export const fetchEsanaNews = async () => {
  // This function fetches the latest news articles from Esana
  try {
    const newsData = await api.list(); // Fetch the latest news articles

    // Check if the results field contains an array
    if (newsData.code === 200 && Array.isArray(newsData.results)) {
      // Here, we only take the latest 20 news articles
      const latestNews = newsData.results.slice(0, 20);
      return {
        status: 'success',
        data: latestNews,
      };
    } else {
      throw new Error('Invalid data format: Expected an array in results.');
    }
  } catch (error) {
    throw new Error(`Error fetching news: ${error.message}`);
  }
};
