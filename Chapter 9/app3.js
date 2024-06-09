// answer1

let button=document.createElement('button');
let input=document.createElement('input');
button.innerHTML="Click me";
let body=document.querySelector('body');
body.append(input);
body.append(button);


// answer2

input.setAttribute('placeholder',"username");
button.setAttribute('id','btn');


// answer3

let btnStyle=document.querySelector("#btn");
// console.dir(btnStyle);
// btnStyle.style.backgroundColor='blue';
// btnStyle.style.color='white';
btnStyle.classList.add("btnStyle");


// answer4

let heading=document.createElement("h1");
heading.innerHTML="<u>DOM Practice</u>";
// body.append(heading)
// body.insertAdjacentElement("afterbegin",heading);
body.prepend(heading);
heading.style.color='purple';


// answer5

let para=document.createElement('p');
para.innerHTML="Apna College <b>Delta</b> Practice";
body.append(para);

