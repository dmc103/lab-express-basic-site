const express = require("express");
const app = express();
const PORT = 5345;

app.get("/home", (req, res) => {
    console.log("You are connected!");
    res.send(__dirname + "/views/home.html");
});


app.get("/about", (req, res) => {
    console.log("You are connected!");
    res.send(__dirname + "/views/About.html");
});

app.get("/works", (req, res) => {
    console.log("You are connected!");
    res.send(__dirname + "/views/works.html");
});


app.listen(PORT, () => {
    console.log("I am listening", PORT);
});
