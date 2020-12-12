var section=document.querySelector('#section');
var AddToDo1= document.querySelector('#AddToDo1');

 var AddToDo=[];

 document.querySelector('form').addEventListener("submit",function(event){
 event.preventDefault();
   
 let AddToDoObj= {
        text:AddToDo1.value,
        complete:false
    }
    AddToDo.push(AddToDoObj);
    renderAddToDoList();

});
       
function renderAddToDoList() {
    const template = AddToDo.map((list,index) => `
 <li  class="${list.complete ? "check":''}"> ${list.text}
 <button id="delete" value="${index}">x</button>  
 <button id="complete" value="${index}">complete</button> </li> `);

 section.innerHTML=template.join('');

let deleteBtn = document.querySelectorAll('#delete');
for (let i = 0; i < deleteBtn.length;i++) {
    deleteBtn[i].addEventListener("click",function (event){
        AddToDo.splice(event.target.value,1);
        renderAddToDoList();
    });
}

 
let completeBtn = document.querySelectorAll("#complete");
for(let i = 0; i < completeBtn.length; i++){
    completeBtn[i].addEventListener("click",function(event){
        AddToDo[event.target.value].complete =! AddToDo[event.target.value].complete; 
    renderAddToDoList();

});
};
  
}






 
