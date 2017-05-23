const fetch = require("node-fetch")
const express = require("express")
const app = express()

app.get('/', (req, res) => {
  console.log("ping")

  setTimeout(() => {
    fetch("http://pong").then(() => { res.send("done") })
  }, 1000)
})

app.listen(3000, () => {
  console.log("Ping started on port 3000!")
})
