function all_num(){
    var names = prompt("enter num split ,")
    names=names.split(",")
    var op = prompt("(+ - *)")
    var res =0
    if(op == "+"){
        for(var el of names){
            res += Number(el)
        }
    }else if(op == "-"){
        res =names[0]
        for( var i = 1 ;i<names.length ; i++){
            res -= Number(names[i])
        }
    }
    return res
}
document.write(all_num())




























