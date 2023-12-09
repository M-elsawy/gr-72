function count(){
    var pro = prompt("enter y or x split ,")
    var proz = pro.split(",")
    var countX =0
    var countY =0
    proz.forEach((e)=>{
        if(e=="x"){
            countX++
        }else if (e=="y"){
            countY++
        }
    })
    document.write("count-x = " +countX +"<br>" +"count-y = " +countY  )
}
count()