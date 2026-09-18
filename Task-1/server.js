const express = require("express")
const app = express()

app.get("/student/:id", (req, res) => {
    res.send(`Student ID: ${req.params.id}`)
})

app.listen(3700, () => {
    console.log("Server running on port 3700...")
})