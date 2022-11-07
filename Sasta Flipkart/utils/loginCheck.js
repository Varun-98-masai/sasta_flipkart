const loginCheck = () =>{
    const token = JSON.parse(localStorage.getItem("token"));

    if(token){
         return true;
    }else{
         return false;
    }
}


// const res = loginCheck();

// console.log(res);


export default loginCheck;
