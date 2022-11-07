import navbar from "../components/navbar.js";

document.getElementById("nav").innerHTML = navbar();


import loginCheck from "../utils/loginCheck.js";


const status = loginCheck();
console.log(status);
if(!status){
  window.location.href = "login.html";
}

  


const appendData = (data) =>{
    const cont = document.getElementById("cart_product_div");
    cont.innerHTML = null;
    data.map((el)=>{
  
        const mainDiv = document.createElement("div");
  
        const buttonDiv = document.createElement("div");

        const contentDiv = document.createElement("div");

        const imgDiv = document.createElement("div");
  
  
      const img = document.createElement("img");
      img.src = el.image;
  
      const name = document.createElement("h3");
      name.innerText = el.title;
  
  
      const price = document.createElement("p");
      price.innerText = el.price;
      

      const qty_p = document.createElement("p");
      qty_p.innerText = "Quatity:-"+ `${el.qty}`;
      qty_p.style.color = "yellow";
  
      const increment_btn = document.createElement("button");
      increment_btn.innerText = "+";
      increment_btn.style.backgroundColor = "teal";
      increment_btn.style.color = "white";
      increment_btn.addEventListener("click",()=>{
        handleQuantity(el , "+");

      })
  
      const decrement_btn = document.createElement("button");
      decrement_btn.innerText = "-";
      decrement_btn.style.backgroundColor = "teal";
      decrement_btn.style.color = "white";
      decrement_btn.addEventListener("click",()=>{
        handleQuantity(el , "-");

      })

      const remove_btn = document.createElement("button");
      remove_btn.innerText = "Remove";
      remove_btn.style.backgroundColor = "Red";
      remove_btn.style.color = "white";
      remove_btn.addEventListener("click",()=>{

        handleRemove(el);
      })

     
  
       
       imgDiv.append(img);
       
       contentDiv.append(name,price,qty_p);
       
       buttonDiv.append(decrement_btn,increment_btn,remove_btn);
       
       mainDiv.append(imgDiv,contentDiv,buttonDiv);
       mainDiv.setAttribute("class","product_div");
      
       cont.append(mainDiv);
    })
  
  
  }

  const getData = () =>{

    const cartArr = JSON.parse(localStorage.getItem("cart")) ;

    appendData(cartArr);
  }
   getData();
 



   const handlePriceCalculation = () =>{
      const cartArr = JSON.parse(localStorage.getItem("cart"));
      let sum = 0;
      cartArr.map((el)=>{
         sum = sum + el.price * el.qty;
      });

      sum = Math.round(sum)
      console.log(sum);
      document.getElementById("total_price_span").innerText = sum;
   
      localStorage.setItem("totalPrice",JSON.stringify(sum));
   
    }

   handlePriceCalculation();


   const handleQuantity = (el , type) =>{

    let cartArr = JSON.parse(localStorage.getItem("cart"));

          if(type ==="+"){


            cartArr = cartArr.map((element)=>{
                if(element.id === el.id){
                    return {...element, qty: element.qty + 1}
                }else{
                    return element;
                }
                
            })

            
            localStorage.setItem("cart",JSON.stringify(cartArr));

            appendData(cartArr);
            handlePriceCalculation();
           
           
          }
          else {
            cartArr = cartArr.map((element)=>{
                if(element.id === el.id){
                    return {...element, qty: element.qty - 1}

                }else{
                    return element;
                }
                
            })
           
           
           
            localStorage.setItem("cart",JSON.stringify(cartArr));
            appendData(cartArr);
            handlePriceCalculation();
        }
    
   }


   const handleRemove = (el) =>{
      
        let cartArr = JSON.parse(localStorage.getItem("cart"));

        cartArr = cartArr.filter((element)=>{

            return element.id !== el.id;
        })

        
        
        localStorage.setItem("cart",JSON.stringify(cartArr));
        appendData(cartArr);
        handlePriceCalculation();
        document.getElementById("nav").innerHTML = navbar();
       
 
    }
  

    const addressPageButton =  document.getElementById("address_page_btn");
    addressPageButton.addEventListener("click",()=>{
        //  check cart data.

        const cartArr = JSON.parse(localStorage.getItem("cart"));
        if(!cartArr || cartArr.length === 0){
            alert("Nothing in Cart");
            return;
        }
      window.location.href = "address.html";
    })