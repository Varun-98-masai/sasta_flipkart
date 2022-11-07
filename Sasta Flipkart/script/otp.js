import navbar from "../components/navbar.js";

document.getElementById("nav").innerHTML = navbar();


const renderTotalPrice = () =>{
    // get the data from localStorage.

    const data = JSON.parse(localStorage.getItem("addressPageData"));
    


    const {totalPrice} = data;
    console.log(totalPrice);
    // append the data - span.

    const span = document.getElementById("total_price_span");
    span.innerText = totalPrice ;
}
renderTotalPrice();


const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");


const handleInputOne = () =>{
//   value for first input.
const oneValue = one.value;

if(oneValue.length === 1){
    two.focus();
} 
// if(oneValue.length === 0){
//     three.focus();
// }
}

const handleInputTwo = () =>{

    if(!one.value){
        two.value = null;
        one.focus();
        return;
    }
    const twoValue = two.value;

if(twoValue.length === 1){
    three.focus();
} if(twoValue.length === 0){
    one.focus();
}
}


const handleInputThree = () =>{
    if(!one.value ||!two.value){
        three.value = null;
        one.focus();
        return;
    }
    const threeValue = three.value;

    if(threeValue.length === 1){
        four.focus();
    }
    if(threeValue.length === 0){
        two.focus();
    }
}

const handleInputFour = () =>{
    if(!one.value ||!two.value ||!three.value){
        four.value = null;
        one.focus();
        return;
    }
    const fourValue = four.value;

    if(fourValue.length > 0){
        four.value = fourValue[0];
        return;
    }
    if(fourValue.length === 0){
        three.focus();
    }
}


one.addEventListener("input",handleInputOne);
two.addEventListener("input",handleInputTwo);
three.addEventListener("input",handleInputThree);
four.addEventListener("input",handleInputFour);


const handleSubmit = ()=>{
    const otp = one.value + two.value + three.value + four.value;
    

    // validation.

    if(otp !== "1234"){
        alert("Incorrect Details");
        return;
    }
    // user give correct OTP.

    const cont = document.querySelector(".otp_div");
    cont.innerHTML = null;

    const h2 = document.createElement("h2");
    h2.innerText = "Order Successfully Placed Thankyou for Shopping with Us !";
  
    h2.style.textAlign = "center";
    h2.style.marginTop ="2rem";
    h2.style.color = "yellow";

    cont.append(h2);

    setTimeout(()=>{
        // remove cart value form localStorage.
        localStorage.removeItem("cart")
        window.location.href = "product.html";

    },3000)
}




const button = document.querySelector("#submit");

button.addEventListener("click",handleSubmit)