let elForm = document.querySelector("#form");

elForm.addEventListener("submit", async evt=>{
    evt.preventDefault()
    
    let {email,password}=evt.target.elements

   let data = await fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        email:email.value.trim(),
        password:password.value.trim()
    }),

    }).then(res=>res.json())
    .then(json => json)
    .catch(error => console.log(error));

    if(data.token){
        localStorage.setItem("token", JSON.stringify(data.token))
        window.location.replace("index.html")
    }
});
