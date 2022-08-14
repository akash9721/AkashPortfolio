var decimalno=document.getElementById('decimal');
var binaryno=document.getElementById('binary');

decimalno.addEventListener('input',function(){
    let storeval=parseInt(this.value);
    let val=(storeval.toString(2));
    binaryno.value=val;

});

binaryno.addEventListener('input',function(){
    let x=(this.value);
    let ans=parseInt(x,2);
    decimalno.value=ans;

});