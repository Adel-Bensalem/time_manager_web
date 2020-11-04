const express = require('express');
const { resolve } = require('path');
const history = require('connect-history-api-fallback');
const proxy = require("express-http-proxy");

const apiMockRouter = require("./api");
const app = express();

app.use("/api", process.env.NODE_ENV === "production" ? proxy(process.env.API_URL) : apiMockRouter);

app.use(history({
    index: '/dist/index.html'
}));

app.use(express.static(resolve(__dirname, '..', 'dist')));

app.use('*', (req, res) => res.sendFile(resolve(__dirname, '..', 'dist', 'index.html')));

app.listen(3000, () => console.log('App listening on port 3000'));