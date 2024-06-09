let btn=document.querySelector('button');

function randomNumber(){
    return ((Math.floor(Math.random()*255))+1);
};
function getRandomColor(){
    let r=randomNumber();
    let g=randomNumber();
    let b=randomNumber();
    let color=`(${r},${g},${b})`;
    return color;
}

btn.addEventListener('click',function(){
    let h3=document.querySelector('h3');
    let randomColor=getRandomColor();
    h3.innerHTML=`rgb${randomColor}`;
    console.log("Color Updated");
    
    let div=document.querySelector('div');
    div.style.backgroundColor=`rgb${randomColor}`;
})