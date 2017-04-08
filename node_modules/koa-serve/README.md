# koa-serve

Koa middleware for serving static files. Simple but works.

    var koa = require('koa'),
        serve = require('koa-serve'),
        app = koa();

    app.use(serve('assets'));
    app.listen(8000);

You can also define where you root dir is, if isn't `__dirname`.

    var koa = require('koa'),
        serve = require('koa-serve'),
        app = koa();

    app.use(serve('assets', '/path/to/your/root'));
    app.listen(8000);

Example if your client files are in the parent directory, and index.js is in server/ for example:

    var koa = require('koa'),
        serve = require('koa-serve'),
        path = require('path'),
        app = koa();

    app.use(serve('assets', path.join(__dirname, '..', 'client'));
    app.listen(8000);

## License

The MIT License (MIT)

Copyright (c) 2015 Adam K Dean

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
