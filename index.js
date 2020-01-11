document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("input")
    let button = document.querySelector("button")
    let p = document.querySelector("p")

    button.addEventListener("click", () => {
        try{
            axios.get(`http://localhost:3000/animal/${input.value}`).then(res => {
                debugger
                p.innerText = res.data
            });

        } catch (err){
            console.log(err)
        }
    }) 
})