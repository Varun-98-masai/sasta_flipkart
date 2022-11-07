const form = document.querySelector("#login_form");

const handleFormSubmit = async(e) =>{
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  if(!email || !password){
    alert("Fill The Details");
    return;
  }

  const payload = {
    email:"eve.holt@reqres.in",
    password: "cityslicka"
  }
  console.log(payload);

//make a post request to server.
//we need a server - fake server.
// https://reqres.in/api/login.
try{
    const response = await fetch(`https://reqres.in/api/login`,{
      method: 'POST',
      headers:  {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    console.log(data);
    alert("Login Successful")
    localStorage.setItem("token",JSON.stringify(data));

    window.location.href = "product.html";
}
catch(err){
    console.log(err);
}

}


form.addEventListener("submit",handleFormSubmit)


import navbar from "../components/navbar.js";

document.getElementById("nav").innerHTML = navbar();


