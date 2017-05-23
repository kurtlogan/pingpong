const fetch = require("node-fetch")
const express = require("express")
const app = express()
const port = parseInt(process.argv[2])

if (isNaN(port)) {
  throw `Port ${process.argv[2]} is not valid`
}

app.get('/', (req, res) => {
  console.log("pong")

  setTimeout(() => {
    fetch("http://ping:3000")
      .then(() => res.send("done"))
      .catch(() => res.send("failed"))
  }, 1000)
})

app.listen(port, () => {
  console.log(`Pong started on port ${port}!`)
})
