let cardTemp = document.querySelector(".temp").content;

let users = document.querySelector("#student")

let elLogout = document.querySelector("#logout");

let token = localStorage.getItem("token") || false;

if (!token){
    window.location.replace("login.html")
}

elLogout.addEventListener("click", ()=>{
    localStorage.removeItem("token")
    window.location.replace("login.html")
});
function getUsers(elem){


  let data = await Api.GET("users");

  let cloneTemp = cardTemp.cloneNode(true);


      let li = cloneTemp.querySelector("li");
      let h2 = cloneTemp.querySelector("h2");
      let p = cloneTemp.querySelector("p");
      let  date = cloneTemp.querySelector("p");
      let name = cloneTemp.querySelector("p");
      let city = cloneTemp.querySelector("p");
      let contact=cloneTemp.querySelector("a");
      let del = cloneTemp.querySelector("button");


      h2.textContent = user.name;
      p.textContent = user.address.zipcode;
      date.textContent = user.suite;
      name.textContent = user.username;
      city.textContent = user.address.city;
      contact.href = user.phone;
      del.textContent = "🗑️";

      elem.append(li);
      
   
    
renderUsers(data,users);
};

 getUsers(users);


 function renderUsers(array, elem) {
    elem.innerHTML = null;
   array.forEach(user => {

    
    let li = cloneTemp.querySelector("li");
    let check = cloneTemp.querySelector("checkbox");
    let h2 = cloneTemp.querySelector("h2");
    let p = cloneTemp.querySelector("p");
    let  date = cloneTemp.querySelector("p");
    let name = cloneTemp.querySelector("p");
    let city = cloneTemp.querySelector("p");
    let contact=cloneTemp.querySelector("a");
    let del = cloneTemp.querySelector("button");



    h2.textContent = user.name;
    p.textContent = user.address.zipcode;
    date.textContent = user.suite;
    name.textContent = user.username;
    city.textContent = user.address.city;
    contact.href = user.phone;
    del.textContent = "🗑️";

    li.append(check);
    li.append(h2);
    li.append(p);
    li.append(date);
    li.append(name);
    li.append(city);
    li.append(contact);
    li.append(del);
     
   });

    
        elem.append(li);
      };
    
  

const Api = {
    GET: async (value) => {
      try {
        let data = await fetch(`https://jsonplaceholder.typicode.com/users?page=${value}`)
          .then((res) => res.json())
          .then((data) => data.data);
  
        return await data;
      } catch {
        return undefined;
      }
    },
    POST: async (data) => {
      try {
        let respons = await fetch(`https://jsonplaceholder.typicode.com/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((json) => json);
  
        return respons;
      } catch {
        return alert("xato");
      }
    },
    DELETE: async (value) => {
      try {
        let respons = await fetch(`https://jsonplaceholder.typicode.com/users/${value}`, {
          method: "DELETE",
        })
  
        return respons;
      } catch {
        return alert("xato");
      }
    },
  };
  
 