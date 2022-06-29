const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
  app.use(
    createProxyMiddleware(
      '/course.oc-static.com/projects/Front-End+V2/P9+React+1',
      {
        target: "https://s3-eu-west-1.amazonaws.com",
        changeOrigin: true
      }
    )
  )
}