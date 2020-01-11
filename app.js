const express = require("express");
const cors = require("cors");

const port = 3000;

const app = express();

app.use(cors());

let animalArr = ["tiger", "zebra", "lion", "bear", "wolf", "owl", "elephant", "shark", "giraffe"]

app.get("/animal/:species", (req, res) => {
    if(animalArr.includes(req.params["species"].toLowerCase())){
        res.json({
            status: "Success",
            message: true
        })
    } else {
        res.json({
            status: "Unsuccessful",
            message: false
        })
    }
})

app.get("/", (req, res) => {
    res.json("Hello World")
})

app.listen(port, () => console.log("listing on port: " , port))
