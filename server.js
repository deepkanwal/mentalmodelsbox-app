const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/model/', (req, res) => {
      app.render(req, res, '/', req.params);
    });

    server.get('/model/:id', (req, res) => {
      const actualPage = '/model';
      const queryParams = {
        id: req.params.id
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/explore/', (req, res) => {
      app.render(req, res, '/explore', req.params);
    });

    server.get('/explore/:tag', (req, res) => {
      const actualPage = '/explore';
      const queryParams = {
        tag: req.params.tag
      };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
