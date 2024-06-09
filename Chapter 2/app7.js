// answer 1

let num=-10;
if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}


// answer 2

let name=prompt("Enter your name");
let age=prompt("Enter your age");
alert(`${name} is ${age} years old`);


// answer 3

let quarter=3;
switch(quarter){
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December");
        break;
    default:
        console.log("Error");
        break;
}


// answer 4

let str="apfple";
if((str[0]=="a"||str[0]=="A") && str.length>5){
    console.log("Golden");
}
else{
    console.log("Not Golden");
}

// answer 5

let num1 = 40;
let num2 = 60;
let num3 = 30;
if(num1>num2){
    if(num3>num1){
        console.log(num3);
    }
    else{
        console.log(num1);
    }
}
else if(num1<num2){
    if(num3>num2){
        console.log(num3);
    }
    else{
        console.log(num2);
    }
}

// answer 6

let nub1=154510;
let nub2=11234;
if(nub1%10==nub2%10){
    console.log(`${nub1} and ${nub2} have the same last digit i.e ${nub1%10}`);
}
else{
    console.log("Not same last digit");
}

