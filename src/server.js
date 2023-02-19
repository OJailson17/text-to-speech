import 'dotenv/config';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

// Set public as the static folder
app.use(express.static('public'));

app.get('/api/key', (req, res) => {
	return res.json({
		key: process.env.API_KEY,
	});
});

app.listen(8082, () => console.log('Server is running'));
