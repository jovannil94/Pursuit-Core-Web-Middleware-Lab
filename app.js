const express = require("express");
const cors = require("cors");

const port = 3000;

const app = express();

app.use(cors());

let animalArr = ["tiger", "zebra", "lion", "bear", "wolf", "owl", "elephant", "shark", "giraffe"]

const isAnimal = (req, res, next) => {
    if(animalArr.includes(req.params["species"].toLowerCase())){
        next();
    } else {
        res.json({
            status: "Unsuccessful",
            message: false
        })
    }
}

app.get("/animal/:species",isAnimal, (req, res) => {
    res.json({
        status: "Success",
        message: true
    })
})
const generateSpread = (req, res, next) => {
    // res.json(req.params)
    let arr = []
    let floor = parseInt(req.params["floor"])
    let ceiling = parseInt(req.params["ceiling"])
    for(let i = floor; i <= ceiling; i++ ){
        arr.push(i)
    }
    let randomNum = arr[Math.floor(Math.random() * arr.length)]
    
}

app.get("/random/:floor/:ceiling", generateSpread, (req, res) => {
    res.json(randomNum)
})


app.get("/", (req, res) => {
    res.json("Hello World")
})

app.listen(port, () => console.log("listing on port: " , port))
