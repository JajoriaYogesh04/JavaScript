function concatination(strings){
    let concatString="";
    for(let i=0; i<strings.length; i++){
        concatString=concatString.concat(strings[i]);
    }
    console.log(concatString);
}
let strings=["My ","Name ","is ","YOGESH JAJORIA"];
concatination(strings);
