// answer 1

let arr=[10,20,30,40,50,60,70,80,90,100];
let n=5;
console.log(arr.slice(0,n));

// answer 2

let arr2=[10,20,30,40,50,60,70,80,90,100,110,120];
let m=6;
console.log(arr2.slice(-m));

// answer 3

let str=" ";
if(str.length==0){
    console.log("Empty String");
}
else{
    console.log("Not Empty");
}

// answer 4

let str2="ThisIsString";
let index=4;
if('a'<=str2[index]&&str2[index]<='z'){
    console.log("Lower Case");
}
else{
    console.log("Upper Case");
}

// answer 5

let str3="   Java Script   ";
str3=str3.trim();
console.log(str3);

// answer 6

let arr3=[54,25,37,9,89,16];
let num=48;
if(arr3.includes(num)==true){
    console.log("Exist");
}
else{
    console.log("Not Exist");
}