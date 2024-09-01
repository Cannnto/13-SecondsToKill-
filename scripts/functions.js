document.addEventListener("keydown", kD);
document.addEventListener("keyup", kU);
document.addEventListener("mousemove",mM);
document.addEventListener("mouseup",mU);
document.addEventListener('contextmenu', a=> {a.preventDefault()})
var key = [];
var mou ={
    x:undefined,
    y:undefined
}
var ang = 0

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
function eli(x,y,rw,rh,an,c)
{   ctx.fillStyle = c;
    bP();
    ctx.ellipse(x, y, rw, rh, an, 0, Math.PI * 2);
    ctx.fill();
}
function d(e, w, h)
{   return sqr(((e.x+w/2) - (pla.x+pla.w/2))**2 + ((e.y+h/2) - (pla.y+pla.h/2))**2)*bli < dis;}

function RNG()
{   return  rng()*(rng()<0.5?1:-1) *rev}
function sgr(name,arr,rcv)
{   for(var i = 0;i<arr.length;i++)
        for(var j = 0; j<arr[i].length;j++)
            if(arr[i][j].constructor.name == name)
                rcv.push(arr[i][j]);
}
function shf(arr) 
{   let I = arr.length;
    // While there remain elements to shuffle...
    while (I)
    {   let rnI = Math.floor(Math.random() * I);
        I--;

        [arr[I], arr[rnI]] = [arr[rnI], arr[I]];
    }
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
function sin(a){return Math.sin(a)};
function cos(a){return Math.cos(a)};
function sqr(a){return Math.sqrt(a)};