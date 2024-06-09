// let btn=document.querySelector('button');
// btn.onclick = function(){
//     alert("Button is Clicked");
// }
// function sayHello(){
//     alert("Hello");
// }
// btn.onclick=sayHello;
// btn.onmouseenter=function(){
//     console.log("On Mouse Enter");
// }


// let btn=document.querySelector('button');
// function sayHello(){
//     alert("Hello");
// }
// function sayName(){
//     alert("Yogesh Jajoria");
// }
// // btn.onclick=sayHello;
// // btn.onclick=Alert;
// btn.addEventListener("click",sayHello);
// btn.addEventListener("click",sayName);
// btn.addEventListener("dblclick",function(){
//     console.log("You Double Clicked");  
//     })
// // btn.dblclick=function(){
// //     console.log("You Double Clicked");
// // }


// let para=document.querySelector('p');
// para.addEventListener("click",function(){
//     console.log("Clicked Paragraph");
// })
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("Mouse in Box");
// })


// let h1=document.querySelector('h1');
// let h3=document.querySelector('h3');
// let p=document.querySelector('p');
// let btn=document.querySelector('button');
// function changeColor(){
//     console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// }
// h1.addEventListener("click",changeColor)
// h3.addEventListener("click",changeColor)
// p.addEventListener("click",changeColor)
// btn.addEventListener("click",changeColor)


// let btn=document.querySelector('button');
// let input=document.querySelector('input');
// input.addEventListener("keydown",function(event){
//     // console.log(event);
//     console.log(`Key: ${event.key}`);
//     console.log(`Code: ${event.code}`);
//     console.log("Key is Pressed");
// })
// // input.addEventListener("keyup",function(){
// //     console.log("Key is Raised");
// // })
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button Clicked");
// })


// let input=document.querySelector('input');
// input.addEventListener("keydown",function(event){
//     console.log(`KeyCode: ${event.code}`);
//     if(event.code=="ArrowUp"){
//         console.log("Move Upward");
//     }
//     else if(event.code=="ArrowDown"){
//         console.log("Move Downward");
//     }
//     else if(event.code=="ArrowLeft"){
//         console.log("Move Left");
//     }
//     else if(event.code=="ArrowRight"){
//         console.log("Move Right");
//     }
//     else{
//         alert("Pressed Wrong Key");
//     }
// })


// let form=document.querySelector('form');
// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     // console.log(event);
//     // console.log("Form Submitted Successfully");
//     // let input=document.querySelector('input');
//     // console.dir(input);
//     // console.log(input.value);
    
//     // let user=document.querySelector('#user');
//     // let pass=document.querySelector('#pass');
//     let user=form.elements[0];
//     let pass=this.elements[1];
//     console.log(`Username: ${user.value}`);
//     console.log(`Password: ${pass.value}`);
//     alert(`Hii ${user.value}, your password is set to ${pass.value}`);
// })


let form=document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
})
let user=document.querySelector('#user');
user.addEventListener('input',function(){
    console.log("Changed Value");
    console.log(`Final Value: ${this.value}`);
})


