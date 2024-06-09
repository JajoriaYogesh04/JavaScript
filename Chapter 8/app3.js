// answer1

// let arr=[1,2,3,4,5,6];
// let sumSquare=arr.reduce((sum,el)=>sum+=(el*el));
// let avg=sumSquare/arr.length;
// console.log(avg);

// let arr=[1,2,3,4,5,6];
// let square=arr.map((el)=>(el*el));
// let sum=square.reduce((sum,el)=>sum+=el);
// let avg=sum/arr.length;
// console.log(avg);


// answer2

// let arr=[1,2,3,4,5,6,7];
// console.log(arr);
// let newArr=arr.map((el)=>(el+5));
// console.log(newArr);


// answer3

// let arr=["name1","name2","name3"];
// let newArr=arr.map((el)=>el.toUpperCase());
// console.log(newArr);


// answer4

// function doubleAndReturnArgs(Arr,...args){
//     let newArr=Arr.concat(args.map((el)=>2*el));
//     console.log(newArr);
// }
// let arr=[1,2,3,4,5];
// doubleAndReturnArgs(arr,1,2,3,4,5);

// const doubleAndReturnArgs=(arr, ...args)=>[arr,...args.map((el)=>el*2)];
// let arr=[1,2,3,4,5];
// console.log(doubleAndReturnArgs(arr,1,2,3,4,5));


// answer5

const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
let object1={
    key1:"value1"
};
let object2={
    key2:"value2"
};
console.log(mergeObjects(object1,object2));
