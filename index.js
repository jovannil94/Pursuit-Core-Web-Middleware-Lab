document.addEventListener("DOMContentLoaded", () => {
    let input = document.querySelector("input")
    let button = document.querySelector("button")
    let p = document.querySelector("p")

    button.addEventListener("click", () => {
        try{
            let res = axios.get(`http://localhost:3000/animal/${input.value}`);
            debugger
            p.innerText = res.data
            debugger

        } catch (err){
            console.log(err)
        }
    }) 
})