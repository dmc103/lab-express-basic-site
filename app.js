const express = require("express");
const app = express();
const PORT = 5250;


app.arguments(express.static('public'));



app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});


app.get("/About", (req, res) => {
    res.sendFile(__dirname + "/views/About.html");
});

app.get("/Works", (req, res) => {
    res.sendFile(__dirname + "/views/Works.html");
});

app.get("/gallery", (req, res) => {
    res.sendFile(__dirname + "/views/gallery.html");
});


app.listen(PORT, () => {
    console.log("I am listening", PORT);
});
