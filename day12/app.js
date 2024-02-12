const express = require('express');
const app = express();

const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 10; // Max 10 requests per minute per IP

const requestCounts = new Map();

function rateLimitMiddleware(req, res, next) {
    const clientIP = req.ip; 

    if (requestCounts.has(clientIP)) {
        const currentTime = Date.now();
        const windowStart = currentTime - RATE_LIMIT_WINDOW_MS;

        for (const [timestamp,] of requestCounts.get(clientIP)) {
            if (timestamp < windowStart) {
                requestCounts.get(clientIP).delete(timestamp);
            } else {
                break;
            }
        }

        // If the number of requests exceeds the limit, return 429
        if (requestCounts.get(clientIP).size >= MAX_REQUESTS_PER_WINDOW) {
            return res.status(429).send('Too Many Requests');
        }
    } else {
        // If the IP is not in the map, create a new entry
        requestCounts.set(clientIP, new Map());
    }

    requestCounts.get(clientIP).set(Date.now(), req.path);

    next();
}

app.use(rateLimitMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
