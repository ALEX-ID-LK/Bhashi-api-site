import { updateApiKey } from '../config/config.js'

// Route to add or update an API key
export const addOrUpdateApiKey = (req, res) => {
  const { key, expiration } = req.body

  if (!key || !expiration) {
    return res.status(400).json({ error: 'Both key and expiration date are required' })
  }

  updateApiKey(key, expiration)
  res.json({ message: `API Key ${key} has been added/updated successfully!` })
}
