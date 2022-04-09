const getResButton = document.querySelector("#get-residents-button")

getRes = () => {
    axios.get("https://swapi.dev/api/planets/2")
    .then( (res) => {
        for(let i=0; i < res.data.residents.length; i++){
            axios.get(res.data.residents[i])
            .then( (res) => {
                let newRes = document.createElement("h2");
                newRes.textContent = res.data.name
                document.querySelector("#main").appendChild(newRes);
            })
        }
    })
}

getResButton.addEventListener("click", getRes)