import navbar from "../components/navbar.js";

document.getElementById("nav").innerHTML = navbar();


import loginCheck from "../utils/loginCheck.js";


const status = loginCheck();
console.log(status);
if(!status){
  window.location.href = "login.html";
}

const getData = async() =>{

    try{
       const res = await fetch(`https://fakestoreapi.com/products`);
        const data = await res.json();
        console.log(data);
        // let's remove the loading indcator.
        const cont = document.querySelector("#loading_div");
        cont.innerHTML = null;

        appendData(data)
    }catch(err){
      
         console.log(err);
         const cont = document.querySelector("#loading_div");  
         cont.innerHTML = null;
         const h2 = document.createElement("h2");
         h2.innerText = "404";
       
         h2.style.textAlign ="center";
         h2.style.marginTop = "2rem";
       
         cont.append(h2);
    }
}
getData();


const handleAddToCartClick = (el) =>{
//  alert("I am running");

  let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
 let flag = 0;

cartArr.map((element)=>{
   if(element.id === el.id){
       flag = 1;
   }
});

if(flag){
  alert("Data Already Present");
  return;
}

el.qty = 1;

 cartArr.push(el);
 console.log(cartArr);

 localStorage.setItem("cart",JSON.stringify(cartArr));

 document.getElementById("nav").innerHTML = navbar();

 alert("Data Added to Cart");
}

const appendData = (data) =>{
  const cont = document.getElementById("product_cont");

  data.forEach((el)=>{

    const div = document.createElement("div");

    div.setAttribute("class","product_div");


    const img = document.createElement("img");
    img.src = el.image;

    const name = document.createElement("h3");
    name.innerText = el.title;


    const price = document.createElement("p");
    price.innerText = el.price;
   

    const btn1 = document.createElement("button");
    btn1.innerText = "Buy";
    

    const btn2 = document.createElement("button");
    btn2.innerText = "Add To Cart";

    btn2.addEventListener("click",()=>{
      handleAddToCartClick(el);
    })


     div.append(img,name,price,btn1,btn2);
     cont.append(div)
  })


}


const renderLoadingIndicator =()=>{

  const cont = document.querySelector("#loading_div");


  const h2 = document.createElement("h2");
  h2.innerText = "Loading...";

  h2.style.textAlign ="center";
  h2.style.marginTop = "2rem";

  cont.append(h2);
}

renderLoadingIndicator();