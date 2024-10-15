import express from "express"
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>My phone number is: </h1> <h2>+84 123 456 789</h2>")
})

app.listen(port, () => {
    console.log(`Server started on port ${3000}`);
})