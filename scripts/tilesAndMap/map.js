class lvl 
{   constructor(map,b,r,s,ra,c)
    {   let t = this;
        t.map = map;
        t.c = c;
        if(ra)
        {    switch(pI(rng()*3))
            {   case 0: b = 1;break;
                case 1: r = 1;break;
                case 2: t.map.arr = fill(12);break;
            }
            random(t.map.arr,t);
        }
        cma(t.map.arr);
        t.boxes = [];
        t.btns=[];
        //boxtile
        t.b = b;
        t.r = r;
        t.boxT = []
        t.maAr = [];
        t.mor = [];
        t.spw = [];
        sgr("Spw", t.map.arr, t.spw);
        sgr("Mor", t.map.arr, t.mor);
        sgr('Bxs', t.map.arr, t.boxes);
        sgr("Btn", t.map.arr, t.btns);
        sgr("BDT", t.map.arr, t.boxT);
        sgr("Mth", t.map.arr, t.maAr);
        shf(t.btns);
        t.mor.sort((a,b) => a.x - b.x);
        for(let i=0;i<t.spw.length;i++)
            t.spw[i].spT = s.t*30, t.spw[i].enL = s.l;
        
        t.txt = ".____...__";
    }
    
    upd()
    {   let t = this;
        
        bli = t.b;
        rev = t.r;
        
        t.map.upd();
        t.c(t);
    }
}
class Map
{   constructor(arr)
    {   this.arr = arr;
    }

    upd() // Draw
    {   let t = this;
        for(var lne = 0;lne < t.arr.length; lne++) // Linhas
            for(var col = 0; col < t.arr[lne].length; col++)
            {   (t.arr[lne][col] && d(t.arr[lne][col], 32, 32)) && t.arr[lne][col].drw();
                
                t.arr[lne][col] && t.arr[lne][col].upd(); // Draw each tile 
            }
    }
}
class Tle
{   constructor(x,y)
    {   let t = this;
        t.x = x;
        t.y = y;
        t.w = t.h = 32;
        t.add = 0;
        //t.clr = "black"; // Color
        t.tim = {c:0,m:30*3}
    }

    drw() // Draw
    {   r(this.x,this.y,32,32,this.clr);
    }
    upd(){}
    collide(other)
    {   let t = this;
        if (t.x + 32 >= other.x &&
            t.x <= other.x + other.w &&
            t.y + 32 >= other.y &&
            t.y <= other.y + other.h) {
            return 1;
        }
        return 0;
    }
    uFr()
    {   this.tim.c++;
        if(this.tim.c>this.tim.m)
        {   this.tim.c = 0;
            return 1;
        }
    }

}
class Wal extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.col = 1;
    }
    drw()
    {   let t = this;
        if(nex(t,1,0) && nex(t,-1,0)) t.drw = function(){gr(t),waF(t)};
        else
        {   if(nex(t,0,-1) && nex(t,0,1)) t.drw = function(){waS(t)}; 
            else
            {   if(!nex(t,0,-1) && !nex(t,0,1))t.drw = function(){waS(t),r(t.x,t.y+t.h-1,t.w,1,'#6D798B'),r(t.x,t.y,t.w,1,'#6D798B')};
                nex(t,0,-1) && (t.drw = function(){waS(t),r(t.x,t.y+t.h-1,t.w,1,'#6D798B')});
                nex(t,0,+1) && (t.drw = function(){waS(t),r(t.x,t.y,t.w,1,'#6D798B')});
            }      
        }
    }
}
class flr extends Tle
{   constructor(x,y)
    {   super(x,y);
    }

    upd()
    {   for(var i = 0; i<fric.length; i++)
                this.collide(fric[i]) && (fric[i].fri = 0, fric[i].acel = 5);  
    }
    drw(){gr(this)}
}
class dor extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.clr = "#6b5421";
    }
    drw(){
        super.drw();
        cpd && gr(this);
    }
    upd()
    {   let pbx = {x:pla.x-5,y:pla.y-5,w:pla.w+10,h:pla.h+10};
        //player checker hitbox
        if(this.collide(pbx) && cpd)
        {   clv++;
            pla.x = levels[clv].x;
            pla.y = levels[clv].y;
            pla.tim.c = pla.tim.m;
            ENE = [];
            blo = [];
            par = [];
            pla.bal = [];
            cpd = 0;
            tles2 = [];
            tles = [];
            endTimes = [];
            times = [];
            mps = [];
            enC = 0;
            clv==12 && ENE.push(new Dre(cnv.width/2,cnv.height/2,128,128));
        }
    }
}
class Spw extends Tle
{   constructor(x,y) 
    {   super(x,y);
        let t = this;
        t.enL = 0;
        t.spT = 0;
        t.cuT = 0;
        t.c = 0;
    }

    arT() 
    {   let t = this;
        if(t.cuT == t.spT) 
        {   rng()<0.9?ENE.push(new Min(t.x,t.y,64,64,t)):ENE.push(new Cur(t.x,t.y,64,64,t));
            t.cuT = 0;
            t.c++;
        } 
        t.cuT++;
    }
    drw()
    {   gr(this);
        spw(this);
    }
    upd() 
    {   if (this.enL >= ENE.length) this.arT();
    }
}
class Btn extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.clr = "red";
        this.cld = 0;
    }

    upd()
    {   let t = this;
        if(t.collide(pla))
        {   if(lvls[clv].btns[nxt] == t && !t.cld)
            {   t.clr = "green";
                nxt++;
            }
            else if(!t.cld)
            {   for(var i =0;i<lvls[clv].btns.length;i++)
                    lvls[clv].btns[i].clr = "red";
                nxt = 0;
            }
            t.cld = 1;
            nxt == 4 && (cpd = 1);
        }
        else
            t.cld = 0;
    }
    drw()
    {   gr(this);
        btn(this, this.clr);
    }
}
class Mor extends Tle{
    constructor(x,y,val,i)
    {   super(x,y);
        let t = this;
        t.clr = "red";
        t.cld = 0;
        t.val = val;
        t.i = i;
    }

    drw()
    {   let t = this;
        gr(t);
        btn(t, t.clr);
        mor(t);
    }

    upd()
    {   let t = this;
        if(sqr(((t.x+t.w/2) - (pla.x+pla.w/2))**2 + ((t.y+t.h/2) - (pla.y+pla.h/2))**2)<50)
        {   pla.int = 1;
            key[69] && (t.i++, key[69] = !key[69]);
        }
    }
}
class Bxs extends Tle {
    constructor (x,y)
    {   super(x,y);
        let t = this;
        t.clr = "#FF9633"
        t.box = new Box(t.x,t.y);
    }
}
//box destiny tile
class BDT extends Tle {
    constructor (x,y)
    {   super(x,y);
        this.act = 0;
        this.clr = "purple";
    }
    //box collide
    bCD() 
    {   let t = this;
        var len = lvls[clv].boxes.length;
        for (var i = 0; i < len; i++) {
            if (t.x + 32 >= lvls[clv].boxes[i].box.x &&    
                t.x <= lvls[clv].boxes[i].box.x + lvls[clv].boxes[i].box.w &&      
                t.y + 32 >= lvls[clv].boxes[i].box.y &&      
                t.y <= lvls[clv].boxes[i].box.y + lvls[clv].boxes[i].box.h) {
                return 1;
            }
        }
    }
    upd() 
    {   let t = this;
        t.act = t.bCD();
        t.bCD()?t.clr = "green":t.clr = "red";
    }
    drw()
    {   gr(this);
        bdt(this,this.clr);
    }
}
//placa Sign
class Sgn extends Tle
{   constructor(x,y,txt)
    {   super(x,y);
        this.clr = '#7C653C';
        this.col = 1;
        this.txt = txt
    }
    drw()
    {   gr(this);
        sgn(this);
    }
    upd()
    {   let t = this;
        if(sqr(((t.x+t.w/2) - (pla.x+pla.w/2))**2 + ((t.y+t.h/2) - (pla.y+pla.h/2))**2)<50)
        {   key[69] && adT(t.txt, "black", 100);
            pla.int = 1;
        }
    }
}
class Ice extends Tle{
    constructor(x,y)
    {   super(x,y);
    }

    upd()
    {   for(var i = 0; i<fric.length; i++)
            this.collide(fric[i]) && (fric[i].fri = 0.99, fric[i].acel = 0.1);    
    }
    drw()
    {   r(this.x,this.y,32,32,"lightblue");
    }
}
class Mth extends Tle{
    constructor(x,y,typ,fix,num)
    {   super(x,y);
        let t = this;
        // this.txC = "red";
        t.typ = typ; //Dgt, Add, Sub, Mul, Div, Res, Ans
        t.fix = fix;
        t.fix ? t.txC = "black" : t.txC = "crimson";
        t.val = 0;
        switch (t.typ)
        {   case "Dgt":
                !t.fix ? t.val = M.floor(rng()*21) : t.val = num%21;
                t.dgt = t.val;
            break;
            case "Add":t.dgt = "+";break;
            case "Sub":t.dgt = "-";break;
            case "Mul":t.dgt = "*";break;
            case "Div":t.dgt = "/";break;
            case "Res":t.dgt = "=";break;
            case "Ans":t.dgt = 13;break;       
        }
        t.str = t.val;
    }

    opr(pre,nxt){
        let t = this;
        switch (t.typ)
        {   case "Add":nxt.str = pre.str + nxt.val;break;
            case "Sub":nxt.str = pre.str - nxt.val;break;
            case "Mul":nxt.str = pre.str * nxt.val;break;
            case "Div":nxt.str = pre.str / nxt.val;break;
            case "Res":
                t.str = pre.str;
                nxt.str = pre.str;
            break;
            case "Ans":t.str = t.dgt = t.val = 13;break;          
        }
        return;
    }

    chg(num) {
        return(num);
    }

    drw()
    {   let t = this;
        mat(t);
        txt(t.x+t.w/2, t.y+t.h/2, t.dgt, t.w/1.5, t.txC);
    }
    upd()
    {   let t = this;
        if((sqr(((t.x+t.w/2) - (pla.x+pla.w/2))**2 + ((t.y+t.h/2) - (pla.y+pla.h/2))**2)<50) && !t.fix){
            pla.int = 1;
            if(key[69])
            {   t.val++;
                t.val %= 21;
                t.dgt = t.val;
                t.str = t.val;
                key[69] = 0;
            }
        }
    }
}
//graphics
class Gbx extends Tle
{   constructor(x,y)
    {   super(x,y);
        let t = this;
        t.col = 1;
        t.bx1 = {x:t.x, y:t.y, w:t.w, h:t.h};
        t.bx2 = {x:t.x, y:t.y-t.h/1.4, w:t.w, h:t.h};
    }
    drw()
    {   box(this.bx1);
        box(this.bx2);
    }
}
class Gbo extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.col = 1;
    }
    drw(){box(this)};
}
class Gdi extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.r = (90*pI(rng()*4));
    }
    drw()
    {   gr(this);
        
        sB(3,'black');
        dir(this,this.r);
        sB(0);
    };
}
class Cnt extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.c = 'white';
        this.cnt = 0;
        this.col = 1;
    }
    drw()
    {   let t = this;
        waS(t);
        if(enC<=13) t.cnt=enC;
        if(t.cnt == 13)t.c = 'green';
        cnt(t,t.cnt,t.c);
    }
}
class F13 extends Tle
{   constructor(x,y)
    {   super(x,y);
    }
    drw()
    {   this.clr = c13;
        super.drw();
    }
}