var std ={
    name:"mohamed",
    age:25,
    address:{
        city:"cairo",
        street:"ms/22"
    },
    print:function(city){
        return "name : "+this.name +"<br>" +"age : "+this.age +"<br>" +
        "city : "+city+"<hr>"
    }
}
document.write(std.print("cairo"))
var std2={
    name:"ahmed",
    age:30
}
document.write(std.print.call(std2,"alex"))
var std3 ={
    name : "sara",
    age:28
}
document.write(std.print.apply(std3,["zag"]))







