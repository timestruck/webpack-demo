const path = require('path');
const koa = require('koa');
const compress = require('koa-compress');
const serveStatic = require('koa-static');
const Jade = require('koa-jade');
const app = koa();

const jade = new Jade({
  viewPath: path.join(__dirname, 'views'),
  app: app,
});

app.use(compress());

// app.use(serveStatic(path.join(__dirname, 'dist')));

app.use(function* handleErrors(next) {
  try {
    yield next;
  } catch (err) {
    this.status = 500;
    this.body = 'There was an error';
  }
});

app.use(function* renderBody() {
  this.render('index');
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
