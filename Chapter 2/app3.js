// let color="red";
// let color="green"
let color="yellow";

// let color="pink"
// if(color==="red"){
//     console.log("Stop");
// }
// else if(color==="yellow"){
//     console.log("Slow Down");
// }
// else if(color==="green"){
//     console.log("Go");
// }
// else{
//     console.log("System Error");
// }

switch(color){
    case "yellow":
        console.log("slow down");
        break;
    case "red":
        console.log("stop");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("system error");
}