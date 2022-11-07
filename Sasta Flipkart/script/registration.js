import navbar from "../components/navbar.js";

document.getElementById("nav").innerHTML = navbar();






const form = document.querySelector("#registration_form");

const handleFormSubmit = async(e) =>{
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirm_password = document.getElementById("confirm_password").value;



  if(!email || !password || !name || !confirm_password){
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
    const response = await fetch(`https://reqres.in/api/register`,{
      method: 'POST',
      headers:  {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    console.log(data);
    alert("Registration Successful")
    localStorage.setItem("token",JSON.stringify(data));

    window.location.href = "login.html";
}
catch(err){
    console.log(err);
}

}


form.addEventListener("submit",handleFormSubmit)


