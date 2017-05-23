const fetch = require("node-fetch")
const express = require("express")
const app = express()

app.get('/', (req, res) => {
  console.log("pong")

  setTimeout(() => {
    fetch("http://ping").then(() => { res.send("done") })
  }, 1000)
})

app.listen(3000, () => {
  console.log("Pong started on port 3000!")
})
