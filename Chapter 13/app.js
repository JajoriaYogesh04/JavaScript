// let btn=document.querySelector('button');
// let p=document.querySelector("#fact");
// btn.addEventListener("click",async ()=>{
//     let fact=await getFacts();
//     console.log(fact);
//     p.innerHTML=fact;
// });

// let url="https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }
//     catch(e){
//         console.log("Error: ",e);
//         return "NO fact found";
//     }
// }


// let url="https://icanhazdadjoke.com/";
// async function getJoke(){
//     try{
//         let config={headers:{Accept:"application/json"}};
//         let res=await axios.get(url,config);
//         console.log(res.data.joke);
//     }
//     catch(err){
//         console.log("Error: ",err);
//     }
// }


let url="http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");

btn.addEventListener('click',async ()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let clgArr=await getClg(country);
    show(clgArr);
    // console.log(clgArr);
})

function show(clgArr){
    let ul=document.querySelector('#list');
    list.innerText="";
    for(clg of clgArr){
        console.log(clg.name);

        let li=document.createElement('li');
        li.innerHTML=clg.name;
        list.appendChild(li);
    }
}

// let country="nepal";

async function getClg(country){
    try{
        let res=await axios.get(url+country);
        // console.log(res.data);
        return res.data;
    }
    catch(err){
        console.log("Error: ",err);
        return [];
    }
}