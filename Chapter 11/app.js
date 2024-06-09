// function hello(){
//     console.log("Inside Hello");
//     console.log("Hello");
// }
// function demo(){
//     console.log("Calling hello");
//     hello();
// }
// console.log("Calling Demo");
// demo();
// console.log("Executed");


// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();


// setTimeout(()=>{
//     console.log("Yogesh");
// },2000);
// console.log("Hello");


h1=document.querySelector('h1');

// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="green";
// },2000);
// setTimeout(()=>{
//     h1.style.color="blue";
// },3000);

// function colorChange(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//     },delay);
// }
// colorChange("red",1000);
// colorChange("green",2000);
// colorChange("blue",3000);

// function colorChange(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange){
//             nextColorChange();
//         }
//     },delay);
// }
// colorChange("red",1000,()=>{
//     colorChange("green",1000,()=>{
//         colorChange("blue",1000);
//     });
// });

function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("Color Changed");
        }, delay);
    });
}
colorChange("red",1000)
.then(()=>{
    console.log("Red Heading");
    return colorChange("green",1000);
})
.then(()=>{
    console.log("Green Heading");
    return colorChange("blue",1000);
})
.then(()=>{
    console.log("Blue Heading");
})



// function savetoDb(data,success,failue){
//     let inernetSpeed=(Math.floor(Math.random()*10))+1;
//     if(inernetSpeed>4){
//         success();    
//     }
//     else{
//         failue();
//     }
// }
// savetoDb("YOGESH JAJORIA",()=>{
//     console.log("Success: Your data was saved");
//     savetoDb("Hello",()=>{
//         console.log("Success2: data2 was saved");
//         savetoDb("IIT Jodhpur",()=>{
//             console.log("Success3: data3 was saved");
            
//         },()=>{
//             console.log("Failure3: Weak Connection");
//         })
//     },()=>{
//         console.log("Failure2: Weak Connection");
//     })
// },()=>{
//     console.log("Failure: Weak Connection");
// });

// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=(Math.floor(Math.random()*10))+1;
//         if(internetSpeed>4){
//             resolve("Data Successfully");    
//         }
//         else{
//             reject("Weak Connection");
//         }    
//     })
// }

// let request=savetoDb("Yogesh Jajoria");
// request.then(()=>{
//     console.log("Promise Resolved");
//     // console.log(request);
// })
// .catch(()=>{
//     console.log("Promise Rejected");
//     // console.log(request);
// })

// savetoDb("Yogesh Jajoria").then(()=>{
//     console.log("Data 1 saved");
//     savetoDb("IIT Jodhpur").then(()=>{
//         console.log("Data 2 saved");
//     });
// })
// .catch(()=>{
//     console.log("Failed");
// });

// savetoDb("Yogesh Jajoria")
//     .then((result)=>{
//         console.log("Data 1 saved");
//         console.log("result of promise- ",result);
//         return savetoDb("IIT Jodhpur");
//     })
//     .then((result)=>{
//         console.log("Data 2 saved");
//         console.log("result of promise- ",result);
//         return savetoDb("India");
//     })
//     .then((result)=>{
//         console.log("Data 3 Saved");
//         console.log("result of promise- ",result);
//     })
//     .catch((error)=>{
//         console.log("Failed");
//         console.log("error of promise- ",error);
//     });
