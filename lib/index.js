const spdy = require('spdy')
const express = require('express')
const path = require('path')
const fs = require('fs')
const {key, cert, ca} = require('spdy-keys')
// const {make} = require('systemjs-tools');

const app = express()

// const tools = make({
//   packagePath: path.join(process.cwd(), './app'),
//
//   hmr: true,

  // entries: ['index.js'],

  // resolveHandler: ({req, initiatedBySystemJS, resolvers, tools}) => {
  //   const {bundle, next} = resolvers
  //
  //   return req.originalUrl.endsWith("dependencies.js")
  //     ? bundle({expression: 'app'})
  //     : next()
  // },

  // builderConfig: {
  //   sourceMaps: false
  // }
// })

// app.use("*", tools.handler)

app.use(express.static('public'))
app.use(express.static('static'))

const port = 443

spdy.createServer({key, cert, ca}, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  })

