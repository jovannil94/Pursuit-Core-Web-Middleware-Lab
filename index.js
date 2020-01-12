document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("#animalInput")
    let button = document.querySelector("#animalButton")
    let p = document.querySelector("p")

    button.addEventListener("click", () => {
        try{
            axios.get(`http://localhost:3000/animal/${input.value}`).then(res => {
                // p.innerText = `${input.value} is on the list: ${res.data["message"]} `
                if(res.data["message"] === true){
                    p.innerText = `${input.value} is on the list`
                }
            });

        } catch (err){
            console.log(err)
        }
    }) 
})

document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("#num1");
    let input2 = document.querySelector("#num2");
    let button = document.querySelector("#numButton");
    let h2 = document.querySelector("#result");    

    button.addEventListener("click", () => {
        try {
            axios.get(`http://localhost:3000/random/${input.value}/${input2.value}`).then(res => {
            h2.innerHTML = "" 
            h2.innerText = res.data.randPick
            })
        } catch (err) {
            console.log(err)
        }
    })
})