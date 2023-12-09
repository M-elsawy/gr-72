// var arr =["ahmed" , "sara","mohamed"]
// arr.forEach((el)=>{
//     document.write("welcome : " + el +"<br>")
// })

// var arr = [ 10, 15 , 20 ,25 , 11 , 8]
// console.log(arr.length);
// console.log(arr.some((el)=>el==11));
// console.log(arr.every((el)=>el>5));

// var arr = [5,7,6,1,9,4,3]
// console.log(arr.sort());
// var arr = [ 5,6,8,9,1,4,10,3]

// console.log(arr.sort((x,y)=>x-y));

// var arr = ["medo", "tamer", "sara", "ahmed","adhm"]
// console.log(arr.sort());

// var arr = [ 5,6,8,9,1,4,10,3]
// console.log(arr.filter((el)=>el>5));

// var arr = [
//         "ahmed","tamer","sara","medo"
//     ]
//     console.log(arr.filter((el)=>el.includes("e")));
    
//     var arr = ["10","15","20","30"]

//     var arr2  =arr.map(el=>Number(el))
//     console.log(arr2);
//     function nums(){
//     var arr = [10,5,20,30]
//     var res = 0
//     for(var el of arr){
//         res += el
//     }
//     return res
// }
// document.write(nums())
// var arr = [10,5,20,30]
//  var sum = arr.reduce((res,el)=>{return res+el},0)
//  console.log(sum);

// var emp = [
//     {id:1,name:"ahmed",age:25,salary:10000},{id:2,name:"mohamed",age:25,salary:30000},{id:3,name:"zezo",age:25,salary:25000},{id:4,name:"medo",age:25,salary:20000}
// ]
// var sum = emp.reduce((res , el)=>res+el.salary,0)
// console.log(sum);


// setTimeout (()=>{
// console.log("welcome js");
// },2000)

// console.log("welcome -1");
// console.log("welcome -2");
// console.log("welcome -3");
// setTimeout(()=>{
//     console.log("welcome -4");
// },0)
// console.log("welcome -5");
// console.log("welcome -6");


// setInterval(()=>{
//     document.write("<h1>welcome</h1>")
// },2000)


var i = 0
var interval= setInterval(()=>{
    document.getElementById("res").innerHTML="<h1>"+i+"</h1>"
    i++
},2000)
function stop(){
    clearInterval(interval)
}











































