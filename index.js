document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("input")
    let button = document.querySelector("button")
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