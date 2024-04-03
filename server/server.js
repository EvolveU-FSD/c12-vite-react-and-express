import express from 'express'
const app = express()

let count = 200

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/value', function (req, res) {
    console.log('Sending count')
    res.send("" + count)
})

app.get('/api/increment', function (req, res) {
    console.log('incrementing count')
    count++
    res.send("" + count)
})

app.get('/api/decrement', function (req, res) {
    console.log('decrementing count')
    count--
    res.send("" + count)
})

app.listen(3000)