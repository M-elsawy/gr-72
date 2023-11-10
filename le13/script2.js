
var tr  = `
<div class="tr">true</div>
`
var fa = `
<div class="fa">false</div>
`
var con = confirm()
console.log(con);

if(con ==true){
    document.write(tr)
}else{
    document.write(fa)
}