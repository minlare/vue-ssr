//express server
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');

const {
  createBundleRenderer
} = require('vue-server-renderer');
const template = fs.readFileSync('./index.template.html', 'utf-8');
const renderer = createBundleRenderer(
  path.resolve(__dirname, './dist/vue-ssr-server-bundle.json'), {
    runInNewContext: false,
    template
  }
)

server.use('/dist', express.static(path.join(__dirname, './dist')));
server.get('*', (req, res) => {

  const context = {
    url: req.url
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err);
      if (err.code === 404) {
        res.status(404).end('Page not found');
      } else {
        res.status(500).end('Internal Server Error');
      }
    } else {
      res.end(html);
    }
  });
});

server.listen(8082);