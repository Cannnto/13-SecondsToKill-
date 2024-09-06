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
    if(event.button == 2 && !pla.amo.c) pla.fAk = 1;
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
    bP();
    ctx.arc(x, y, r, 0, Math.PI*2);
    cP();
}
function eli(x,y,rw,rh,an,c)
{   ctx.fillStyle = c;
    bP();
    ctx.ellipse(x, y, rw, rh, an, 0, Math.PI * 2);
    ctx.fill();
}
function d(e, w, h)
{   return sqr(((e.x+w/2) - (pla.x+pla.w/2))**2 + ((e.y+h/2) - (pla.y+pla.h/2))**2)*bli < dis;}

function drug()
{   let tx = (rng()<0.5?1:-1) *rev;
    let ty = (rng()<0.5?1:-1) *rev;
    teste.x+=tx, teste.y+=ty, tra(tx,ty);
    if(abs(teste.x)>2 || abs(teste.y)>2)
        teste.x-=tx, teste.y-=ty, tra(-tx,-ty);
}
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

function adi(name,arr1)
{   var arr2 = []
    for(var i = 0; i<arr1.length;i++)
    {   if(arr1[i])
        {arr2[i] = arr1[i][name]}
    }
    return arr2
}

function dlg(str, clr) {
    r(0, cnv.height-100, cnv.width, 100, "rgba(255,255,255,0.5)");
    r(10, cnv.height-90, cnv.width-20, 80, "rgba(0,0,0,0.5)");
    ctx.fillStyle = clr;
    var tSZ = 20;
    ctx.font = tSZ + "px Arial"; //fonte a mudar
    ctx.textAlign = "center";
    ctx.fillText(str, cnv.width / 2, cnv.height - 45);
}

function adT(str, clr, tim) {
    var ful = str;
    var ind = ful.indexOf(";")
    var cST = ful.slice(0,ind);
    var rST = ful.slice(ind+1);
    tBX.sTX = cST;
    tBX.aTX = rST;
    tBX.clr = clr;
    tBX.t = tim;
    tBX.cTM = tim;
}

function dS(event) {
    if (event.keyCode == 67) tBX.t = 0;
    document.removeEventListener("keyup", dS);
}

function sav(){ctx.save()};
function res(){ctx.restore()};
function tra(x,y){ctx.translate(x,y)};
function scl(x,y){ctx.scale(x,y)};
function rtt(ang){ctx.rotate(ang)};
function abs(a){return Math.abs(a)};
function bP(){ctx.beginPath()};
function cP()
{   ctx.closePath()
    ctx.fill();
};
function mT(x,y,cor)
{   ctx.fillStyle = cor;
    bP();
    ctx.moveTo(x,y)
};
function lT(x,y){ctx.lineTo(x,y)};
function rng(){return Math.random()};
function sin(a){return Math.sin(a)};
function cos(a){return Math.cos(a)};
function sqr(a){return Math.sqrt(a)};
function sB(n,c)
{   ctx.shadowColor = c;
    ctx.shadowBlur = n;
}

class Atk {
    constructor(nam, tim) {
        this.nam = nam;
        this.tmr = {c: 30*tim, m: 30*tim};
    }
}