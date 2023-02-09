"use strict"

const express = require("express");
require("dotenv").config();
const jsonData = require("./assets/Programming-languages.json");

const app = express();
const PORT = process.env.PORT



app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/api", (req, res) => {
    let progData = jsonData.map((item) => {
        return new ProgLang(item)
    })
    res.status(200).send(progData)
})

class ProgLang {
    constructor(data) {
        this.title = data.title;
        this.dateCreated = data.dateCreated;
        this.description = data.description;
        this.imageUrl = data.imageUrl;
    }
}


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})