window.onload = () =>{
    randomUser()
}
const randomUser = () =>{
    fetch("https://randomuser.me/api")
    .then((response)=>{
    return response.json()
    })
    .then((data)=>{
        console.log(data)
        RandomUser(data)
    })
    .catch((error)=>console.log(error))
}
const RandomUser = (random)=>{
    document.getElementById('name').innerText=`${random.results[0].name.title}${random.results[0].name.first}${random.results[0].name.last}`
    document.getElementById('age').innerText=`${random.results[0].dob.age}`
    document.getElementById('Email').innerText=`${random.results[0].email}`
    document.getElementById('phone').innerText=`${random.results[0].phone}`
}
document.getElementById('btn-1').addEventListener('click',()=>{
    randomUser();
});

