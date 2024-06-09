let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let input=document.querySelector('input');

btn.addEventListener('click',function(event){
    let item=document.createElement('li');
    item.innerText=input.value;

    let done=document.createElement('button');
    done.innerHTML="Done";
    done.classList.add("done");

    ul.appendChild(item);
    item.appendChild(done);
    console.log("Task Added");
    input.value="";
})
ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
        console.log('Task Deleted');
    }
    // else{
    //     console.log("Don't Delete");
    // }
    // console.dir(event.target);
    // console.log("Clicked");
})
// let delBtns=document.querySelectorAll(".done");
// for(delBtn of delBtns){
//     delBtn.addEventListener('click',function(){
//         // ul.removeChild(item);
//         // console.log("Delete Event");
//         let par=this.parentElement;
//         par.remove();
//         // console.dir(par);
//     })
// }
