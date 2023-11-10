// function allNames (){
//     var names = prompt("enter name split ,")
//     var nameList = names.split(",")
//     var res = "<ul>"
//     for(var el of nameList){
//         res +=`<li>${el}</li>`
//     }
//     res += "</ul>"
//     return res
// }
// document.write(allNames())


// function allNames (){
//     var names = prompt("enter name split ,") ///

//     var nameList = names.split(",")
//     if(nameList.length>1){
//         var res = "<ul>"
//         for(var el of nameList){
//             res+= `<li>${el}</li>`
//         }
//     }else{
//         return " "
//     }
//     res += "</ul>"
//     return res
// }
// document.write(allNames())



function allNames (){
    var names = prompt("enter name split ,")

    if(names){
        var nameList =names.split(",")
        var res = "<ul>"
        for(var el of nameList){
            res += `<li>${el}</li>`
        }
    }else{
       return " " 
    }
    res += "</ul>"
    return res

}
document.write(allNames())

























