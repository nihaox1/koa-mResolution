# koa-mResolution
define mobile resolution for most populor mobile
help developer build html for mobile easily

##Install
npm install koa-mobile-resolution

##use 
```js
var koa = require('koa');
var app = koa();
var resolution = require( "koa-mobile-resolution" );

app.use( resolution() );

app.use(function *(){
  this.body = 'Hello World ' + this.req.client.mResolution.drp;
});

app.listen(3000);
```
