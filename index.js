import express from 'express';

require('dotenv').config({ path: './dotenv/vars.env'})

const app = express();

app.listen(process.env.PORT, function() {
	console.log(`Listening on port ${process.env.PORT}`);
});