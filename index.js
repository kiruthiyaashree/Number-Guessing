function addNumbers()
{
    
}
var guessform=document.getElementById('form1');
var random=parseInt(Math.floor(Math.random()*100));
let count=0;
function confirmMessage(e)
{
    e.preventDefault();
    var valueNum=parseInt(document.getElementById('guess').value);
    if(count > 11)
    {
        alert("chances are done. answer ",random);
    }
    else{
    if(!isNaN(valueNum))
    {
        if(valueNum==random)
        {
            document.getElementById('result').innerHTML="success";
            document.getElementById('result').style.backgroundColor="green";
            document.getElementById('result').style.color="white";
            document.getElementById('guess').disabled=true;


        }
        else if(valueNum < random)
        {
            document.getElementById('result').innerHTML="too low";
            document.getElementById('result').style.backgroundColor="red";
            document.getElementById('result').style.color="white";


        }
        else{
            document.getElementById('result').innerHTML="too high";
            document.getElementById('result').style.backgroundColor="red";
            document.getElementById('result').style.color="white";


        }
    }
    else{
        window.alert("enter valid number");
    }
}
    document.getElementById('write').innerHTML+=valueNum+" ";
}

guessform.addEventListener('submit', confirmMessage);