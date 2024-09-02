const arr=["Rock","Paper","Scissor"];

let score = 0,i=0;
function getrandom(min,max)
{
    const minceiled = Math.ceil(min);
    const maxfloored = Math.floor(max);
    return Math.floor(Math.random() * (maxfloored - minceiled) + minceiled);
}
function rockpaperscissor()
{
    i = i+1;
    var x = document.getElementsByTagName('input');
    var uip;
    for(let i=0;i<x.length;i++)
    {
        if(x[i].checked)
        {
            uip =  x[i].value;
        }
    }

    const cip = arr[getrandom(0,3)];

    document.getElementById('upick').innerHTML = "You Chose "+uip;
    document.getElementById('cpick').innerHTML = "The Computer chose "+cip;
    let wstr,scorestrf,scorestr;
    if(i<=5){
        if(uip=="Rock")
        {
            if(cip=="Rock")
            {
                wstr = "Draw";
            }
            else if(cip=="Paper")
            {
                wstr = "Computer Wins!!!";
            }
            else if(cip=="Scissor")
            {
                wstr = "You Win!!!";
                score = score+1;
            }
        }
        else if(uip=="Paper")
        {
            if(cip=="Rock")
            {
                wstr = "You Win!!!";
                score = score+1;
            }
            else if(cip=="Paper")
            {
                wstr = "Draw";
            }
            else if(cip=="Scissor")
            {
                wstr = "Computer Wins!!!";
            }
        }
        else if(uip=="Scissor")
        {
            if(cip=="Rock")
            {
                wstr = "Computer Wins!!!";
            }
            else if(cip=="Paper")
            {
                wstr = "You Win!!!";
                score = score+1;
            }
            else if(cip=="Scissor")
            {
                wstr = "Draw";
            }
        }
        scorestr = "Your score is: " + score;
        document.getElementById('winnerstring').innerHTML = wstr;
        document.getElementById('scorestring').innerHTML = scorestr;
    }
    if(i==5)
    {
        scorestrf = "Your Final Score = "+score+"/5";
        document.getElementById('finstring').innerHTML = scorestrf;
        document.getElementById('fintwo').innerHTML = "***Refresh page to play again***";
        document.getElementById('submit').disabled = true;
        return;
    }
    
}

