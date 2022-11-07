const navbar=()=>{
    // if user is logged in or not?
    let length;
       const status = JSON.parse(localStorage.getItem("token"));

       if(!status){
        length = null;
       }else{
        // USER logged in.
        const cartArr =  JSON.parse(localStorage.getItem("cart"));
       if(!cartArr){
        length = null;
       }else{
        length = cartArr.length;
       }
       
        

       }
       console.log(length);

    // if user logged in -> show the count.
    // evaluating cart data from JSON.



    return `
    <div><h1>Sasta Flipkart</h1></div>
    <div>
        <ul>
            <li>
                <a href="index.html">Home</a>
            </li>
        </ul>
        <ul>
           <li>
               <a href="product.html">Product</a>
           </li>
       </ul>
       <ul>
           <li>
               <a href="cart.html">Cart ${length ? `:${length}` : "" }</a>
           </li>
       </ul> 
       
       <ul>
           <li>
               <a href="login.html">Login</a>
           </li>
       </ul>
       
    </div>
`
}



export default navbar;