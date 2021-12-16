const express = require('express')
const { resolve } = require('path')
const app = express()
app.use('/', express.static (
    resolve (
            __dirname,
            './build'
    )
))
app.use('/history', express.static (
    resolve (
            __dirname,
            './build'
    )
))
app.use('/approval', express.static (
    resolve (
            __dirname,
            './build'
    )
))
app.use('/settings', express.static (
    resolve (
            __dirname,
            './build'
    )
))


app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        return console.log(err)
        }
        console.log('All good!!')
})