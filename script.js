
 const canvas = document.getElementById("BallGame");
 const ctx = canvas.getContext("2d");
 let rangeW = canvas.width;
 let rangeH = canvas.height;
 let ballSize;
 let positionX = 0;


function DrawBall()
{
    ctx.clearRect(0,0,rangeW, rangeH);
    ballSize = document.getElementById('rozm').value;
    ballColor = document.getElementById('color').value;
    ballGr = document.getElementById('gr').value;
    lengthX = rangeW-ballSize-ballGr;
    if( ballSize!=0){
        timer=setInterval(function (){
                        jumpBall();
                    },1);
            }
    else{
        alert("Podaj Rozmiar Piłki!");
    }
}


function jumpBall()
{

        positionX = positionX+1;

        ctx.clearRect(0,0,rangeW, rangeH);
        ctx.beginPath();
        ctx.lineWidth=ballGr;
        ctx.arc(positionX, rangeH/2, ballSize, 0, 2 * Math.PI);
        ctx.fillStyle = ballColor;
        ctx.fill();
        ctx.strokeStyle="black";
        ctx.stroke();

}