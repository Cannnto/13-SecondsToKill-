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
    ctx.arc(x, y, r, 0, pi()*2);
    cP();
}
function eli(x,y,rw,rh,an,c)
{   ctx.fillStyle = c;
    bP();
    ctx.ellipse(x, y, rw, rh, an, 0, pi() * 2);
    ctx.fill();
}
function d(e, w, h)
{   return sqr(((e.x+w/2) - (pla.x+pla.w/2))**2 + ((e.y+h/2) - (pla.y+pla.h/2))**2)*bli < dis;}

function drug()
{   let tx = rng()*(rng()<0.5?1:-1) *rev;
    let ty = rng()*(rng()<0.5?1:-1) *rev;
    t.x+=tx, t.y+=ty, tra(tx,ty);

    if(!tx) tra(-t.x, -t.y),t.mtp(0);    
    if(abs(t.x)>2 || abs(t.y)>2)    t.x-=tx, t.y-=ty, tra(-tx,-ty);
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
function pi(){return Math.PI};
function sB(n,c)
{   ctx.shadowColor = c;
    ctx.shadowBlur = n;
}

class Atk {
    constructor(nam, tim, act, atm) {
        this.nam = nam;
        this.tmr = {c: 30*tim, m: 30*tim};
        this.act = act;
        this.atm = {c: 30*atm, m: 30*atm};
    }
}

//frzen 
function frozen()
{   for(let i =0; i<fr.c.length; i++)
    {   let x = fr.c[i].x, y = fr.c[i].y, tlI = new Ice(x*32,y*32), tlF = new flr(x*32,y*32);
        
        let a = lvls[clv].map.arr[y][x].add;
        if(fr.a[i].fre != lvls[clv].map.arr[y][x].fre && a) a+=1;
        
        fr.a[i].fre ? lvls[clv].map.arr[y][x] = tlI : lvls[clv].map.arr[y][x] = tlF, lvls[clv].map.arr[y][x].add++;
            
        if(a==2) {
            r(x*32,y*32,32,32,'red')
            fr.p[x*32+y]=undefined, fr.c.splice(i, 1), fr.a.splice(i, 1);
            i--;
            continue;   
        }
        
        fr.c[i].cnt++;
        if(fr.c[i].cnt>150)
        {   !fr.a[i].fre ? lvls[clv].map.arr[y][x] = tlI : lvls[clv].map.arr[y][x] = tlF;
            fr.p[x*32+y]=undefined, fr.c.splice(i, 1), fr.a.splice(i, 1);
            i--;
        };
        // console.log(fr)
    }
}
function setFro(mp,tla)
{   for(let l=-1;l<2;l++)
    {   for(let c=-1;c<2;c++)
        {   //if(!lvls[clv].map.arr[mp.l+l]) break;
            let cmp = lvls[clv].map.arr[mp.l+l][mp.c+c];
            if(fr.p[(mp.c+c)*32+(mp.l+l)]!=tla.fre && cmp.f)
            {   let p = porra(mp,c,l);
                if(p)
                    fr.c.splice(p,1), fr.a.splice(p,1);

                fr.c.push({x:mp.c+c, y:mp.l+l, cnt:0});      
                fr.a.push(tla);
                fr.p[(mp.c+c)*32+(mp.l+l)]=tla.fre;
            }
        }
    }
    // console.log(fr)
}
function porra(mp,c,l)
{   for(let i=0;i<fr.c.length;i++){
        // console.log(fr.c[i].x== mp.c+c && fr.c[i].y == mp.l+l)
        if(fr.c[i].x == mp.c+c && fr.c[i].y == mp.l+l)
            return i;
    }
}