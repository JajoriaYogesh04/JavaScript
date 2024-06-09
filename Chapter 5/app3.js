let maxNum=prompt("Enter the MAXIMUM number for game:-");
console.log(`Maximum Number is: ${maxNum}`);
let randNum=Math.floor((Math.random()*maxNum)+1);
console.log(`Random Number is: ${randNum}`);
while(true){
    userNum=prompt("Enter your GUESS");
    console.log(`Your guess is: ${userNum}`);
    if(userNum=="quit"){
        console.log("You Quit");
        break;
    }
    if(userNum==randNum){
        console.log("You Win!!");
        break;
    }
    else if(userNum>maxNum){
        console.log("Out of range");
    }
    else if(userNum!=randNum){
        console.log("Wrong Guess");
    }
    
}