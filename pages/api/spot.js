export default function handler(req, res) {
    if (req.method === 'POST') {
        res.status(200).json({ message: 'Sent message to Spot.' })
    } else {
        res.status(200).json({ message: 'This is Spot.' })
    }
  }