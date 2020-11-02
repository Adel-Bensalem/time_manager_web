const express = require('express');
const history = require('connect-history-api-fallback');
const proxy = require("express-http-proxy");

const apiMockRouter = require("./api");
const app = express();
const staticFileMiddleware = express.static('dist');

app.use(staticFileMiddleware);
app.use("/api", process.env.NODE_ENV === "production" ? proxy(process.env.API_URL) : apiMockRouter);

app.use(history({
    index: '/dist/index.html'
}));

app.use(staticFileMiddleware);

app.listen(3000, () => console.log('App listening on port 3000'));