var q1 = prompt("5 + 5")
if(q1 =="10"){
    console.log("$100");
    var q2 =prompt("10 + 10 ")
    if(q2 == "20"){
        console.log("$200");
        var q3 = prompt("20 + 20 ")
        if(q3 == "40"){
            console.log("$500");
        }else{
            console.log("$200");
        }
    }else{
        console.log("$100");
    }
}else{
    console.log("$0");
}