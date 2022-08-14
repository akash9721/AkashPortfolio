function enterage()
{
    var x=prompt("enter your age in which year you born ?");
    //let y=document.getElementById("op").innerHTML=x;
   // console.log(y);
    var noofday=(2021-x)*365;
    var h2=document.createElement("h2");
    var text=document.createTextNode("you are "+noofday+" day!");
    h2.setAttribute("id","hh1");
    h2.appendChild(text);
    document.getElementById("op").appendChild(h2);
}
function rem()
{
    document.getElementById('op').remove();
}






//document.write(day+"-"+month+"-"+year);
function dob()
{

    var dateobj=new Date();
    var cday=dateobj.getUTCDate();
    var cmonth=dateobj.getUTCMonth()+1;
    var cyear=dateobj.getUTCFullYear();


    var oday=document.getElementById("day").value;
    var omonth=document.getElementById("month").value;
    // var yval=y.options[y.selectedIndex].value;
    var oyear=document.getElementById("year").value;
    var h2=document.createElement("h2");

    let pyear,pmonth,pday;
    if(cyear>oyear && cmonth>omonth && cday>oday)
    {
        pyear=cyear-oyear;
        pmonth=cmonth-omonth;
        pday=cday-oday;
    }
    if(cyear>oyear && cmonth<omonth && cday>oday )
    {
         pyear=cyear-1-oyear;
         pmonth=cmonth+12-omonth;
         pday=cday-oday;
    }
    if(cyear>oyear && cmonth<omonth && cday<oday)
    {
            pyear=cyear-1-oyear;
            pmonth=cmonth+12-1-omonth;
            pday=cday+31-oday;
    }
    if(cyear>oyear && cmonth>omonth && cday<oday)
    {
         pyear=cyear-oyear;
         pmonth=cmonth-1-omonth;
         pday=cday+31-oday;
    }
   // var tex=document.createTextNode("DOB is "+oday+"-"+omonth+"-"+oyear); 
    var dobis=document.getElementById("op1").innerHTML=("Birth date: "+oday+"-"+omonth+"-"+oyear);
    var curdis=document.getElementById("op2").innerHTML=("Today's date: "+cday+"-"+cmonth+"-"+cyear);
    var tex=document.createTextNode("your curr age is "+pyear+" year "+pmonth+" month "+pday+" day");
    var d=pyear*365+pmonth*31+pday;
    var nooddays=document.getElementById("op4").innerHTML="You are "+d+" days old";
    var week=parseInt (d/7);
    var dd=d%7;
    var wd=document.getElementById("op5").innerHTML="Which is "+week+" weeks and "+dd+" days";
    h2.setAttribute("id","hed1");
    h2.appendChild(tex);
    document.getElementById("op3").appendChild(h2);

}

function game(yourchoce)
{
 console.log(yourchoce);
   var humaechoice,computerchoice;
   humaechoice=yourchoce.id;

   computerchoice=nochoice(randomno());
   console.log('computer choice:', computerchoice);

   result=winner(humaechoice,computerchoice);
   console.log(result);

   message=finalmessage(result);
   console.log(message);

   frontend(humaechoice,computerchoice,message);
}

function randomno()
{
    return Math.floor(Math.random()*3);
}
function nochoice(number)
{
     return ['rock','paper','scissors'][number];
}

function winner(yourchoce,computerchoice)
{
    var valstore={
        'rock':{'rock':0.5,'paper':0,'scissors':1},
         'paper':{'paper':0.5,'scissors':0,'rock':1},
         'scissors':{'scissors':0.5,'paper':1,'rock':0}
    };
    var yourscore=valstore[yourchoce][computerchoice];
    var computerscore=valstore[computerchoice][yourchoce];
    return [yourscore,computerscore];

}
function finalmessage([yourscore,computerscore])
{
    if(yourscore==1)
    {
        return {'message':'  you won !', 'color':'green'};
    }
    else if(yourscore==0.5)
    {
        return {'message':'  you tied !','color':'yellow'};
    }
    else
    {
        return {'message':'  you lose !','color':'red'};
    }
}

function frontend(humaneimgchoice,computerimgchoice,finalmessage)
{
    var imgdatabase={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humandiv=document.createElement('div');
    var compdiv=document.createElement('div');
    var messagediv=document.createElement('div');

    humandiv.innerHTML="<img src='"+imgdatabase[humaneimgchoice]+"'style='box_shadow: 0px 10px 50px rgba(37,50,233,1);'>"
    messagediv.innerHTML="<h1 style=' color: "+finalmessage['color']+";'>"+finalmessage['message']+"</h1>"
    compdiv.innerHTML="<img src='"+imgdatabase[computerimgchoice]+"'style='box_shadow: 0px 10px 50px rgba(243,38,24,1);'>"

    document.getElementById('gameid').appendChild(humandiv);
    document.getElementById('gameid2').appendChild(messagediv);
    document.getElementById('gameid3').appendChild(compdiv);
}





var allbutton=document.getElementsByTagName('button');
console.log(allbutton);

var copyallbutton=[];
for(let i=0;i<allbutton.length ;i++)
{
    copyallbutton.push(allbutton[i].classList[1]);
}
console.log(copyallbutton);


function buttoncolorchange(colorchange)
{
   // console.log(colorchange);
     if(colorchange=='red')
     buttonred();
     else if(colorchange=='green')
     buttongreen();
     else if(colorchange=='reset')
     buttonreset();
     else if(colorchange=='random')
     buttonrandom();
}

function buttonred()
 {
    for(let i=0;i<allbutton.length;i++)
    {
       allbutton[i].classList.remove(allbutton[i].classList[1]);
       allbutton[i].classList.add('btn-danger');
    }
 }
 function buttongreen()
 {
    for(let i=0;i<allbutton.length;i++)
    {
       allbutton[i].classList.remove(allbutton[i].classList[1]);
       allbutton[i].classList.add('btn-success');
    }
 }
 function buttonreset()
 {
    for(let i=0;i<allbutton.length;i++)
    {
       allbutton[i].classList.remove(allbutton[i].classList[1]);
       allbutton[i].classList.add(copyallbutton[i]);
    }
 }
 function buttonrandom()
 {
     let choice=['btn-success','btn-primary','btn-info','btn-secondary','btn-warning'];
     for(let i=0;i<allbutton.length;i++)
     {
         let rand=Math.floor(Math.random()*5);
         allbutton[i].classList.remove(allbutton[i].classList[1]);
         allbutton[i].classList.add(choice[rand]);
     }
 }






//challange generate %






function find()
{
    var yname=document.getElementById("name1").value;
    var pname=document.getElementById("name2").value;
    var randomno=Math.floor(Math.random()*71)+30;
    let h1=document.createElement("h1");
    let ele=document.createTextNode(yname+' and '+pname+" bond is "+randomno+"%");
    h1.appendChild(ele);
    document.getElementById("chk").appendChild(h1);
    //var result=document.getElementById("chk").innerHTML=yname+' and '+pname+" bond is "+randomno+"%";
    console.log(result);


}

 





