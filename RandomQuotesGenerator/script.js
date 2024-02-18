const getQuotes = () =>{
    fetch('https://api.kanye.rest')
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        showNewQuotes(data)
    })
    .catch((error)=>{
        console.log(error)
    })
}

const showNewQuotes = (data) =>{
    document.getElementById('quotes').innerText =`${data.quote}`
}

document.getElementById('btn').addEventListener("click",()=>{
    getQuotes();
})