const express = require('express')
const app = express()

const fs = require('fs')
const path = require('path')
const { createBundleRenderer } = require('vue-server-renderer')

const resolve = file => path.resolve(__dirname, file)

// 生成服务端渲染函数
const renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
  // 模板html文件
  template: fs.readFileSync(resolve('./index.html'), 'utf-8'),
  // client manifest
  clientManifest: require('./dist/vue-ssr-client-manifest.json')
})

function renderToString (context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      err ? reject(err) : resolve(html)
    })
  })
}
app.use(express.static('./dist'))

app.use(async(req, res, next) => {
  try {
    const context = {
      title: '服务端渲染测试', // {{title}}
      url: req.url
    }
    // 设置请求头
    res.set('Content-Type', 'text/html')
    const render = await renderToString(context)
    // 将服务器端渲染好的html返回给客户端
    res.end(render)
  } catch (e) {
    console.log(e)
    // 如果没找到，放过请求，继续运行后面的中间件
    next()
  }
})

app.listen(3000)
