// $env:NODE_ENV="production" for windows
// export NODE_ENV="production" for ubuntu

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");


const env = process.env.NODE_ENV;

console.log(env)

const path = env === "production" ? "" : ".staging";

require("dotenv").config({
  path: `./.env${path}`,
});


let booleanDev;

if (env == 'production' || env == 'staging') {
  booleanDev = false;
}
else { 
  booleanDev=true
}


const hostname = "localhost";
const port = process.env.NEXT_PUBLIC_PORT;
const app = next({ dev: booleanDev, hostname, port });
const handle = app.getRequestHandler();
console.log(port);

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
