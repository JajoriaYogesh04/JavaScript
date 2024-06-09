let todo=[];
let choice=prompt("Enter your choice");
while(true){
    if(choice=='quit'){
        console.log("QUIT");
        break;
    }
    if(choice=='show'){
        for(let i=0; i<todo.length; i++){
            console.log(todo[i]);
        }
        // break;
    }
    else if(choice=='add'){
        let addTask=prompt("What do you want to ADD");
        todo.push(addTask);
        console.log("Task added successfully!!");
        for(let i=0; i<todo.length; i++){
            console.log(todo[i]);
        }
        // break;
    }
    else if(choice=='delete'){
        let deleteTask=prompt("What do you want to DELETE");
        let deleteIndex=todo.indexOf(deleteTask);
        console.log("Task deleted successfully!!");
        todo.splice(deleteIndex,1);
        for(let i=0; i<todo.length; i++){
            console.log(todo[i]);
        }
        // break;
    }
    else{
        console.log("Wrong Choice");
        // break;
    }
}




// while(true){
//     if(choice=='quit'){
//         console.log("QUIT");
//         break;
//     }
//     if(choice=='show'){
//         for(let i=0; i<todo.length; i++){
//             console.log(todo[i]);
//         }
//     }
//     if(choice=='add'){
//         let addTask=prompt("What do you want to ADD");
//         todo.push(addTask);
//         console.log("Task Added");
//     }
    // else if(choice==delete){
    //     let deleteTask=prompt("What do you want to DELETE");
    //     for()
    // }
    
// }