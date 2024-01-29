const express = require('express') //commonjs
const path = require('path') //commonjs
require('dotenv').config()
// import express from 'express'//es modunle




const app = express() //app express
const port = process.env.PORT || 8888;//port
const hotname = process.env.HOST_NAME;

//config Temple engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static files
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')))

//khai báo route//
app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/collection', (req, res) => {
    // res.send('collection!')
    res.render('sample');
})

app.listen(port, hotname, () => {
    console.log(`Example app listening on port ${port}`)
})