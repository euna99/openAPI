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
  app.use(
    '/seoul',
    createProxyMiddleware({
        target: 'http://openapi.seoul.go.kr',
        pathRewrite: {
            '^/seoul':''
          },
        changeOrigin: true,
      })
  )
};