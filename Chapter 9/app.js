// let smallImage = document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImage.length;i++){
//     smallImage[i].src="assets/spiderman_img.png";
//     console.log(`Value of Image ${i} is changed`);
// }

// console.dir(document.getElementsByTagName("p"));

// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// //Single
// console.dir(document.querySelectorAll(".box a"));
// //all


// let para = document.querySelector('p');
// console.dir(para);
// console.dir(para.innerText);
// console.dir(para.textContent);
// console.dir(para.innerHTML);

// let heading = document.querySelector('h1');
// heading.innerHTML=`<u>${heading.innerText}</u>`;
// console.log(heading);


// let img=document.querySelector("img");
// console.log(img.getAttribute('id'));
// img.setAttribute('id','spiderMan');
// console.log(img.getAttribute('id'));

// console.log(img.getAttribute('src'));
// img.setAttribute('src','assets/creation_3.jpeg');

// console.log(img.getAttribute('class'));
// img.setAttribute('class','image');
// console.log(img.getAttribute('class'));


// let heading = document.querySelector("h1");
// console.dir(heading);
// heading.style.color="red";
// heading.style.backgroundColor="blue";

// let links=document.querySelectorAll(".box a");
// console.dir(links);
// for(let i=0;i<link.length;i++){
//     link[i].style.color="green";
// }
// for(link of links){
//     link.style.color="red";
// }


// let image=document.querySelector("img");
// console.dir(image.classList);

// let heading=document.querySelector('h1');
// heading.classList.add("green","underline");
// console.log(heading.classList);
// heading.classList.remove("green");
// console.log(heading.classList);
// console.log(heading.classList.contains("green"));
// console.log(heading.classList.toggle("green"));
// console.log(heading.classList.toggle("underline"));
// console.log(heading.classList);

// let box = document.querySelector(".box");
// box.classList.add("yellow");


// let h4=document.querySelector('h4');
// console.log(h4.parentElement);
// console.log(h4.children);
// let box=document.querySelector('.box');
// console.log(box.children);
// console.log(box.childElementCount);

// let ul=document.querySelector('ul')
// console.log(ul.childElementCount);
// console.log(ul.children);
// console.log(ul.children[1].previousElementSibling);
// console.log(ul.children[1].nextElementSibling);

// let img=document.querySelector('img');
// console.log(img.previousElementSibling)
// img.previousElementSibling.style.color="blue";


// let newP=document.createElement('p');
// newP.innerText="Hii I am newP";
// let body=document.querySelector('body');
// body.appendChild(newP);

// let newP=document.createElement('p');
// newP.innerText="Hello"
// let box=document.querySelector('.box');
// box.appendChild(newP);
// let btn=document.createElement('button');
// btn.innerText="Click Me!";
// box.appendChild(btn);

// newP.append(btn);
// box.prepend(newP);

let btn=document.createElement('button');
btn.innerHTML="NEW BUTTON";
let para=document.querySelector('p');
para.insertAdjacentElement('beforebegin',btn);
para.insertAdjacentElement('afterbegin',btn);
para.insertAdjacentElement('beforeend',btn);
para.insertAdjacentElement('afterend',btn);


// let body=document.querySelector('body');
// body.removeChild(btn)
para.insertAdjacentElement('afterend',btn);
btn.remove();