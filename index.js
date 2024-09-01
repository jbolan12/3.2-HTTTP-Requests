import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h2>Hello World!</h2>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1> <p> My name is George, and I'm a new Full Stack Web Developer!");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me: +52 33 3460 5337</h1> <h2>Or Email me at jorgedbolanosgh@gmail.com.");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});