import { apiKeys } from '../config/config.js'
import moment from 'moment'

const isKeyExpired = (expirationDate) => {
  const now = moment().format('YYYY-MM-DD')
  return moment(now).isAfter(expirationDate)
}

const checkApiKey = (req, res, next) => {
  const apiKey = req.query.apikey

  if (!apiKey) {
    return res.status(403).json({ error: 'No API key provided' })
  }

  if (!apiKeys[apiKey]) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key' })
  }

  const expirationDate = apiKeys[apiKey].expires

  if (isKeyExpired(expirationDate)) {
    return res.status(401).json({ error: 'Unauthorized: API key expired' })
  }

  next()
}

export default checkApiKey
