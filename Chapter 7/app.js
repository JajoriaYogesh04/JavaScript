// const student={
//     name:"Yogesh",
//     age: 20,
//     math: 97,
//     phy: 89,
//     chem: 98,
//     getAvg(){
//         let avg=(this.math+ this.phy+this.chem)/3;
//         console.log(avg);
//     }
// }
// student.getAvg();


// console.log("Hello");
// console.log("Hello");
// try{
//     console.log(a);
// }catch(er){
//     console.log("ERROR");
//     console.log(er);
// }   
// console.log("Hello2");
// console.log("Hello2");


// const sum=(a,b)=>{
//     console.log(a+b);
// }
// const cube=n=>{
//     console.log(n*n*n);
// }


// const mul=(a,b)=> a*b;

// console.log("Hii there!");
// console.log("Thank You");
// console.log("Thank You");
// setTimeout(()=>{
//     console.log("YOGESH JAJORIA");
// },4000);
// console.log("Thank You");
// console.log("Thank You");
// console.log("Thank You");

// console.log("Hello");
// let id=setInterval(()=>{
//     console.log("YOGESH JAJORIA");
// },2000);
// console.log(id);

const student={
    name:"Yogesh",
    mark:95,
    prop:this, //global scope
    getName: function(){
        console.log(this);
        return this.name;   //calling function
    },
    getMarks: ()=>{
        console.log(this);  //parent scope->window
        return this.mark;
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log(this);  //this->parent->function->this->student
        },2000);
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this);  //this->callingfunction->window
        },2000)
    }
}
const a=5;  //global scope


