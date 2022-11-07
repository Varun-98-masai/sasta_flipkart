import navbar from "../components/navbar.js";

document.getElementById("nav").innerHTML = navbar();


import data from "../utils/data.js"

// console.log(data);



const renderStateDetails = (data) =>{
    // catch the select tag.

    const select = document.getElementById("state_select")
    
    data.map((element)=>{
        

        const option = document.createElement("option");

        option.innerText = element;
        option.value = element;


        select.append(option);

    })
    
}

renderStateDetails(data);

const handlePaymentModeChange = (event)=>{
    event.preventDefault();

    const select = document.getElementById("paymentMode_select").value;
    if(select === "cod"){
        const cont = document.getElementById("paymentDetails_div");
        cont.innerHTML = null;
        return;
    }else{
        const cont = document.getElementById("paymentDetails_div");


        const html = `  <label for="">Card Number</label>
        <input type="number" id="cardNumber">

        <label for="">CVV</label>
        <input type="password" id="cvv">

        <label for="">Expiry Date</label>
        <input type="date" id="expiryDate">

        <label for="">Card Holder Name</label>
        <input type="text" id="cardHolderName">`

        cont.innerHTML = html;
    }

    
}
const paymentModeSelect = document.getElementById("paymentMode_select");
paymentModeSelect.addEventListener("change",handlePaymentModeChange);

const handleFormSubmit = (event)=>{
     event.preventDefault();
    
    //  catch all the value;
    // commom value.

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const selectstate = document.getElementById("state_select").value;
    const pin = document.getElementById("pin").value;
    const paymentMode = document.getElementById("paymentMode_select").value;


    if(!name || !address || !city || !selectstate || !pin || !paymentMode){
        alert("Fill The Details");
        return;
    }
    let cardNumber;
    let cvvNumber;
    let expiryDate;
    let cardHolderName;
    
    if(paymentMode === "card"){
       cardNumber = document.getElementById("cardNumber").value;
       cvvNumber = document.getElementById("cvv").value;
       expiryDate = document.getElementById("expiryDate").value;
       cardHolderName = document.getElementById("cardHolderName").value;

       if(!cardNumber || !cvvNumber || !expiryDate || !cardHolderName){
        alert("Missing Card Details");
        return;
       }
    }

    // payload
    // data

    const payload = {
        name,
        address,
        city,
        selectstate,
        pin,
        paymentMode
    }

    if(paymentMode === "card"){

        payload.cartDetails ={
            cardNumber,
            cvvNumber,
            expiryDate,
            cardHolderName
        }
    }

    const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));

    payload.totalPrice = totalPrice;

    console.log(payload);

   localStorage.setItem("addressPageData",JSON.stringify(payload));

//    redirect to otp page.

    window.location.href = "otp.html";


}
const form = document.getElementById("addressForm_form");

form.addEventListener("submit", handleFormSubmit )