import navbar from "../components/navbar.js";

document.getElementById("nav").innerHTML = navbar();


let todoArray = JSON.parse(localStorage.getItem("todos")) || [];

const addTodo_button = document.querySelector("#addTodo_button");
addTodo_button.addEventListener("click",handleAddTodo);

function handleAddTodo(){
    const input = document.querySelector("#addTodoInput").value;
     
    // const TodoName = document.querySelector("#Todo_name");

    // TodoName.innerHTML = input;
    if(!input){
        alert("Type Something");
        return;
    }
    const payload = {
        todo : input,
        status : false,
        id : Date.now() + input
    }
    
      todoArray.push(payload);
      append(todoArray);
      localStorage.setItem("todos",JSON.stringify(todoArray));
}


append(todoArray);



function append(todos){
    const cont = document.querySelector(".allTodo_div");
    cont.innerHTML = null;
    todos.map((el)=>{
    // 1. create HTML with DOM.
        const  maindiv = document.createElement("div");

        const h3 = document.createElement("h3");
        const update_button = document.createElement("button");
        const delete_button = document.createElement("button");
        delete_button.style.backgroundColor = "violet";
        delete_button.style.color = "black"
        // 2. if any atrributes por style are required.

       

        h3.textContent = el.todo;

        if(el.status){
           update_button.textContent = "Done";
           update_button.style.backgroundColor = "green";
        }else{
            update_button.textContent = "Not Done"
            update_button.style.backgroundColor = "red";
        }
        delete_button.textContent = "Delete";

         // EventListner.

         update_button.addEventListener("click", ()=>{
            handleUpdateTodo(el.id)
         })

         delete_button.addEventListener("click",()=>{
            handleDelete(el.id)
         })

        maindiv.append(h3,update_button,delete_button);

       cont.append(maindiv)


    })
}





const handleUpdateTodo = (id) =>{

     todoArray = todoArray.map((element)=>{

        if(element.id === id){
            return { ...element , status: !element.status}
        }else{
            return element;
        }
        
    })
    append(todoArray);
    localStorage.setItem("todos",JSON.stringify(todoArray));
   
}

const  handleDelete =(id)=>{

    todoArray = todoArray.filter((el)=>{
        return el.id !== id;
    })


    append(todoArray);
    localStorage.setItem("todos",JSON.stringify(todoArray));
}