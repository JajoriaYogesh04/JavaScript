// async function greet(){
//     throw("ERROR");
//     return "Hello!";
// };
// greet().then((result)=>{
//     console.log("Promise Resolved");
//     console.log("Result: ",result);
// })
// .catch((error)=>{
//     console.log("Promise Rejected");
//     console.log("Error: ",error);
// })

// let demo=async()=>{
//     return 5;
// }


// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
//     })
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }


// let h1=document.querySelector('h1');
// function colorChange(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*5)+1;
//             if(num>3){
//                 reject("Promise Rejected");
//             }
//             h1.style.color=color;
//             console.log("Color changed to: ",color)
//             resolve("Color Changed");
//         }, delay);
//     });
// }
// async function demo(){
//     try{
//         await colorChange("red",1000);
//         await colorChange("green",1000);
//         await colorChange("orange",1000);
//         await colorChange("blue",1000);
//     }
//     catch(err){
//         console.log("Error: ",err);
//     }
//     let a=5;
//     console.log(a);
//     console.log("New number: ",a+3);
// }



// let jsonRsp='{"fact":"A cat\u2019s back is extremely flexible because it has up to 53 loosely fitting vertebrae. Humans only have 34.","length":106}';
// // console.log(jsonRsp);
// let validRsp=JSON.parse(jsonRsp);
// console.log(validRsp);

// let student={
//     name: "YOGESH",
//     mark: 99,
// };
// console.log(JSON.stringify(student));


// let url="https://catfact.ninja/fact"
// console.log(fetch(url));
// fetch(url)
// .then((response)=>{
//     console.log("RESPONSE: ",response);
//     // console.log(response.json());
//     // response.json().then((data)=>{
//     //     console.log(data);
//     // })
//     return response.json();
// })
// .then((data)=>{
//     console.log("Data 1: ",data.fact);
//     return fetch(url);
// })
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log("Data 2: ",data.fact);
// })
// .catch((err)=>{
//     console.log("ERROR: ",err);
// })


let url="https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res= await fetch(url);
        let data= await res.json();
        console.log(data.fact);

        let res2= await fetch(url);
        let data2= await res2.json();
        console.log(data.fact);
    }
    catch(e){
        console.log("Error: ",e);
    }
    console.log("Bye");
}

