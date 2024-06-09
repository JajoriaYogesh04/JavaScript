// answer1

// let arr1=[8,9,10,11,12];
// const arrayAverage=(arr)=>{
//     let n=arr.length;
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum+=arr[i];
//     }
//     return sum/n;
// }
// console.log(arrayAverage(arr1));


// answer2

// let num=4;
// const Even=(num)=> num%2==0;
// Even(num);


// answer3

// const object={
//     message:'Hello World!',
//     logMessage(){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);


// answer4

let length=4;
function callback(){
    console.log(this.length);
}
const object={
    length:5,
    method(callback){
        callback();
    },
}
object.method(callback,1,2);