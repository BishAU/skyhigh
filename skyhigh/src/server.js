import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World from Skyhigh Platform!' });
});

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '1.0.0',
    services: {
      server: 'running'
    }
  });
});

// Readiness probe endpoint
app.get('/api/ready', (_req, res) => {
  res.json({ status: 'ready' });
});

app.listen(port, () => {
  console.log(`Skyhigh Platform running at http://localhost:${port}`);
});
