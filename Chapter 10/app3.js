// // answer1

// let div=document.querySelector('div');
// div.addEventListener('mouseenter',function(){
//     console.log("Enter Box");
// })
// div.addEventListener('mouseout',function(){
//     console.log("Exit Box");
// })

// let input=document.querySelector("#user");
// input.addEventListener("keypress",function(){
//     console.log("KEY PRESSED!");
// })

// window.addEventListener("scroll",function(){
//     console.log("User Scrolling");
// })

// window.addEventListener("load",function(){
//     console.log("Web Page Loaded");
// })


// // answer2
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     this.style.backgroundColor="green";
//     console.log("Button Clicked");
// })


// answer3

// let name=document.querySelector('#name');
// name.addEventListener('input',function(event){
//     console.dir(event);
//     // if((event.keyCode>=65 && event.keyCode<=90)||(event.keyCode>=97 && event.keyCode<=122)||(event.keyCode==32)){
//     //     let heading=document.querySelector('h2');
//     //     heading.addEventListener("input",function(event){
//     //         console.log(heading);
//     //     })
        
//     // }
// })

let form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
})
let user=document.querySelector('#name');
user.addEventListener('input',function(event){
    let heading=document.querySelector('h2');
    // heading.innerHTML=user.value;
    let inputValue=user.value;
    let validInput=/^[a-zA-Z\s]*$/;
    if (validInput.test(inputValue)) {
        heading.innerHTML = inputValue;
    } else {
        // If input doesn't match the pattern, remove invalid characters
        user.value = inputValue.replace(/[^a-zA-Z\s]/g, '');
    }
})







    // console.log()
    // if((event.data>='a'&&event.data<='z')){
    //     console.log(event.data);
    // }
    // if((event.keyCode>=65 && event.keyCode<=90)||(event.keyCode>=97 && event.keyCode<=122)||(event.keyCode==32)){
    //     let heading=document.querySelector('h2');
    //     // heading.innerHTML=user.value;
    //     console.dir(user);
    // }
    // else{
    //     let heading=document.querySelector('h2');
    //     // heading.innerHTML=user.value;
    // } 



