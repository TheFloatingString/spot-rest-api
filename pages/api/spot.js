let state = 0;
export default function handler(req, res) {
    if (req.method === 'POST') {
        state += 1;
        res.status(200).json({ message: state })
    } else {
        res.status(200).json({ message: state })
    }
  }