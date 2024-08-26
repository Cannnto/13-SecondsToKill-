document.addEventListener("keydown", kD);
document.addEventListener("keyup", kU);
document.addEventListener("mousemove",mM);
document.addEventListener("mousedown",mD);
document.addEventListener("mouseup",mU);
document.addEventListener('contextmenu', a=> {a.preventDefault()})
var key = [];
var mou ={
    x:0,
    y:0
}
var ang = 0
function mD(event)
{
}

function mU(event)
{   if(event.button == 0)pla.atk = 1;
    if(event.button == 2)pla.fir();
}

function mM(event)
{   mou.x = event.x- cnv.getBoundingClientRect().left;
    mou.y = event.y- cnv.getBoundingClientRect().top;
}

function kD(event)
{   key[event.keyCode] = true;
    //console.log(event.keyCode)
}
function kU(event)
{   key[event.keyCode] = false;
}
function r(x,y,w,h,c)
{   ctx.fillStyle = c;
    ctx.fillRect(x,y,w,h);
}
function bal(x,y,r,cor)
{   ctx.fillStyle = cor
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
}



function sav(){ctx.save()};
function res(){ctx.restore()};
function tra(x,y){ctx.translate(x,y)};
function scl(x,y){ctx.scale(x,y)};
function rtt(ang){ctx.rotate(ang)};
function abs(a){return Math.abs(a)};
function bP(){ctx.beginPath()};
function cP(){ctx.closePath()};
function mT(x,y){ctx.moveTo(x,y)};
function lT(x,y){ctx.lineTo(x,y)};
function rng(){return Math.random()};
function sin(a){return Math.sin(a)}
function cos(a){return Math.cos(a)}
