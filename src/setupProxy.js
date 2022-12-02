
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) 
{
  app.use(
    '/apis',
    createProxyMiddleware({
        target: 'http://apis.data.go.kr',
        pathRewrite: {
            '^/apis':''
          },
        changeOrigin: true,
      })
  )
};