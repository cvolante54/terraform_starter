const http = require('http')
const express = require('express')

const app = express()

app.get('/health_check', (req, res) => {
  res.status(200).json({ message: 'OK' })
})

// Start the application after the database connection is ready
const PORT = process.env.PORT || 1998

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
