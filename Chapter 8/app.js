// let arr=[12,23,56,16,89,46,35];
// arr.forEach(function(el){
//     console.log(el)
// });
// arr.forEach((el)=>{
//     console.log(el);
// });


// let arr=[{
//     name:"Yogesh",
//     marks:45
// },
// {
//     name:"Aryan",
//     marks:79
// }
// ,{
//     name:"Axad",
//     marks:98
// }];
// arr.forEach((student)=>{
//     console.log(student.marks);
// });


// let num=[1,2,3,4];
// let double=num.map((el)=>{
//     return el*2;
// })
// console.log(double);


// let arr=[{
//     name:"Yogesh",
//     marks:45
// },
// {
//     name:"Aryan",
//     marks:79
// }
// ,{
//     name:"Axad",
//     marks:98
// }];
// let cgpa=arr.map((el)=>{
//     return el.marks/10;
// });
// console.log(cgpa);


// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
// let ans=arr.filter((el)=>{
//     return el%2!=0;
// })
// console.log(ans);


// let arr=[2,4,7,6];
// console.log(arr.every((el)=>el%2==0))
// console.log(arr.some((el)=>el%2!=0));


// let arr=[1,2,3,4,3];
// // console.log(arr.reduce((res,el)=>res+=el));
// arr.reduce((res,el)=>{
//     console.log(res);
//     return res+el; 
// })


// let arr=[56,23,79,51,89,135,42,38];
// let ans=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
// })
// console.log(ans);


// function sum(a=10,b){
//     return a+b;
// }
// console.log(sum(5,20));


// let arr=[23,56,78,10,49,16,43,72];
// let ans=Math.min(...arr);
// console.log(ans);
// console.log(..."YOGESH");


// let arr=[56,3,49,13,73,91];
// let newArr=[...arr];
// console.log(newArr);
// let char=[..."YOGESH"];
// console.log(char);
// let odd=[1,3,5,7,9];
// let even=[0,2,4,6,8];
// let num=[...odd,...even];
// console.log(num);


// let data={
//     email: "user@yogesh.com",
//     password: "INDIA"
// };
// console.log(data);
// let dataCopy={...data,id:234466};
// console.log(dataCopy);
// let arr=[1,2,3,4,5];
// let obj1={...arr};  //Index>key
// console.log(obj1);


// function sum(...args){
//     return args.reduce((add,el)=>add+el);
// }
// function min(msg, ...args){
//     console.log(msg)
//     return args.reduce((min,el)=>{
//         if(el<min){
//             return el;
//         }
//         else{
//             return min;
//         }
//     })
// }
// console.log(sum(1,2,3,4));
// console.log(min(10,1,0,2,3,4));     //10 will be treated as msg


// function min(){
//     console.log(arguments);
// }
// console.log(min(1,2,3,4));


// let names=["yogexh","aryxn","axad","abc","xyz"];
// // let winner=names[0];
// // let istRunnerUp=names[1];
// // let iindRunnerUp=names[2];
// let [winner,istRunnerUp,iindRunnerUp,...others]=names;
// console.log(winner);
// console.log(istRunnerUp);
// console.log(iindRunnerUp);
// console.log(others);


let student={
    name:"karan",
    age:12,
    class:9,
    subjects:["hindi","sst","math"],
    username:"karan@123",
    password:"abcd",
    city:"Jaipur"
};
// let user=student.username;
// let pass=student.password;
let {username:user,password:pass,city:place="Mumbai"}=student;
console.log(user);
console.log(pass);
console.log(place);