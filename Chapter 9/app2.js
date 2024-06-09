let para=document.createElement('p');
para.innerHTML="Hey I'm red!";
para.style.color='red';
document.querySelector('body').appendChild(para);

let heading=document.createElement("h3");
heading.style.color='blue';
heading.innerHTML="I'm a blue h3!"
document.querySelector('p').append(heading);

// let div1=document.createElement('div');
// document.querySelector('h3').append(div1);
// div1.classList.add('box');

// heading2=document.createElement('h1');
// heading2.innerHTML="I'm in a div";
// para2=document.createElement('p');
// para2.innerHTML="ME TOO!";
// document.querySelector("div").appendChild(heading2,para2);

let div1=document.createElement("div");
let heading1=document.createElement("h1");
let para1=document.createElement("p");

heading1.innerHTML="I'm in a div";
para1.innerHTML="ME TOO";

div1.append(heading1);
div1.append(para1);

document.querySelector('body').append(div1);
div1.classList.add('box');
