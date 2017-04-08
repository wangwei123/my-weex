var assert = require('chai').assert;
var expect = require('chai').expect;
var request = require('supertest');
var serve = require('..');
var koa = require('koa');

describe('serve()', function() {
  var app;

  before(function() {
    app = koa();
  });

  it('should serve static files', function(done) {
    app.use(serve('fixtures', __dirname));

    request(app.listen())
    .get('/fixtures/hello.txt')
    .expect(200, done);
  });

  it('should support nesting', function(done) {
    app.use(serve('fixtures', __dirname));

    request(app.listen())
    .get('/fixtures/nested/foo.txt')
    .expect(200, done);
  });

  it('should return 404 when asset doesn\'t exist', function(done) {
    app.use(serve('fixtures', __dirname));

    request(app.listen())
    .get('/fixtures/world.txt')
    .expect(404)
    .expect('Not Found', done);
  });

  it('should return index.html when requesting a directory', function(done) {
    app.use(serve('fixtures', __dirname));

    request(app.listen())
    .get('/fixtures/')
    .expect(200)
    .expect('index\n', done);
  });

  it('should yield the control when not GET', function(done) {
    app.use(serve('fixtures', __dirname));

    app.use(function* (next) {
      this.body = 'world';
    })

    request(app.listen())
    .post('/hello')
    .expect(200)
    .expect('world', done);
  });

  it('should yield the control when not an asset', function(done) {
    app.use(serve('fixtures', __dirname));

    app.use(function* (next) {
      this.body = 'world';
    })

    request(app.listen())
    .get('/hello')
    .expect(200)
    .expect('world', done);
  });

  it('should throw an error when directory is not passed', function(done) {
    expect(serve).to.throw(Error, /Directory argument not specified/);
    done();
  });
});
