const Vue = require('vue');
const server = require('express')();
const renderer = require('vue-server-renderer').createRenderer();

const vueApp = require('./index');

server.get('*', (req, res) => {

  if (req.url === '/items.json') {
    res.json([{ "name": "My item 1" }, { "name": "Second item" }]);
    return;
  }

  console.log(req.url);

  const app = new Vue(vueApp);

  renderer.renderToString(app, (err, html) => {
    if (err) {
      console.log(err);
      res.status(500).end('Internal Server Error');
      return;
    }
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `);
  });
});

server.listen(8080);