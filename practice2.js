var decival=document.getElementById('decimal');
var octval=document.getElementById('octal');

decival.addEventListener('input',function(){
   let bin=parseInt(this.value);
   let ans=bin.toString(8);
   octval.value=ans;
});

octval.addEventListener('input',function(){
   let x=this.value;
   let ans=parseInt(x,8);
   decival.value=ans;
});