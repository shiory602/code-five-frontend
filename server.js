const express = require('express')
const { resolve } = require('path')
const app = express()
app.use('/', express.static (
    resolve (
            __dirname,
            './build'
    )
))

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        return console.log(err)
        }
        console.log('All good!!')
})