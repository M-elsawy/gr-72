function repeat (num ,str){
num =prompt("enter num")
str = prompt("enter str")
var newStr = ""
for(var i = 0 ; i<num ; i++){
newStr += str +"<br>"
}
return newStr
}
document.write(repeat())