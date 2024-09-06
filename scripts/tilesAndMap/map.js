class lvl 
{   constructor(map,b,r,s)
    {   this.map = map;
        cma(this.map.arr);
        this.boxes = [];
        this.btns=[];
        //boxtile
        this.b = b;
        this.r = r;
        this.boxT = []
        this.maAr = [];
        this.mor = [];
        this.spw = [];
        sgr("Spw", this.map.arr, this.spw);
        sgr("Mor", this.map.arr, this.mor);
        sgr('Bxs', this.map.arr, this.boxes);
        sgr("Btn", this.map.arr, this.btns);
        sgr("BDT", this.map.arr, this.boxT);
        sgr("Mth", this.map.arr, this.maAr);
        shf(this.btns);
        this.mor.sort((a,b) => a.x - b.x);
        for(let i=0;i<this.spw.length;i++)
            this.spw[i].spT = s.t*30, this.spw[i].enL = s.l;
        
        this.txt = ".____...__";
        //box target. target number.        current number 
        // for(var lne = 0;lne < this.map.arr.length; lne++) 
        //     for(var col = 0; col < this.map.arr[lne].length; col++)
        //         if(this.map.arr[lne][col].constructor.name == "Bxs") this.boxes.push(this.map.arr[lne][col].box);
    }

    drw()
    {   this.map.drw();

        bli = this.b;
        rev = this.r;
        //boxcurrentmatch sla n pensei no nome
        //do jeito que tá, o método de passar tá hardcoded, tem que mudar isso ainda
        var bCM = 0;
        for(let i=0; i<this.boxT.length;i++) 
            if (this.boxT[i].act) bCM++;
    
        // //se não tiver caixas ele não passa imediatamente        
        // //bCM == this.boxT.length && bCM != 0?cpd = true:cpd = true;

        // if (this.maAr.length)
        // {   for (let i = 1; i < this.maAr.length; i++) 
        //         this.maAr[i].opr(this.maAr[i-1], this.maAr[i+1]);
            
        //     for (let i=0; i<this.maAr.length; i++) 
        //     {   !this.maAr[i].fix ? this.maAr[i].txC = "crimson" : this.maAr[i].txC = "black";
        //         cpd = 0;
        //         if (this.maAr[this.maAr.length-2].str == 13)
        //         {   this.maAr[i].txC = "green";
        //             cpd = 1;
        //         };
        //     }
        // }
        var tr = 0
        //Checar os switchs para ver se pode passar de level
        for(var i = 0; i<this.mor.length; i++)
        {   if(this.mor[i].val[this.mor[i].i%this.mor[i].val.length] == this.txt[i])  tr++;
            
            if(tr == this.mor.length)
            {   for(var j = 0; j<this.mor.length; j++)
                    this.mor[j].clr = "green";
                    cpd = 1;
            }
            else{
                for(var j = 0; j<this.mor.length; j++)
                    this.mor[j].clr = "red";
            }
        }
    }
}
class Map
{   constructor(arr)
    {   this.arr = arr;
    }

    drw() // Draw
    {   for(var lne = 0;lne < this.arr.length; lne++) // Linhas
            for(var col = 0; col < this.arr[lne].length; col++)
            {   if(this.arr[lne][col] && d(this.arr[lne][col], 32, 32)) this.arr[lne][col].drw();
                
                if(this.arr[lne][col]) this.arr[lne][col].upd(); // Draw each tile 
            }
    }
}
class Tle
{   constructor(x,y)
    {   this.x = x;
        this.y = y;
        this.w = this.h = 32;
        //this.clr = "black"; // Color
    }

    drw() // Draw
    {   ctx.fillStyle = this.clr;
        ctx.fillRect(this.x,this.y,32,32);
    }
    upd(){}
    collide(other)
    {   if (this.x + 32 >= other.x &&
            this.x <= other.x + other.w &&
            this.y + 32 >= other.y &&
            this.y <= other.y + other.h) {
            return true;
        }
        return false;
    }
}
class Wal extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.col = true;
    }
    drw()
    {   if(nex(this,1,0) && nex(this,-1,0)) this.drw = function(){ground(this),waF(this)};
        else
        {   if(nex(this,0,-1) && nex(this,0,1)) this.drw = function(){waS(this)}; 
            else
            {   if(!nex(this,0,-1) && !nex(this,0,1))this.drw = function(){waS(this),r(this.x,this.y+this.h-1,this.w,1,'#6D798B'),r(this.x,this.y,this.w,1,'#6D798B')};
                if(nex(this,0,-1))  this.drw = function(){waS(this),r(this.x,this.y+this.h-1,this.w,1,'#6D798B')};
                if(nex(this,0,+1))  this.drw = function(){waS(this),r(this.x,this.y,this.w,1,'#6D798B')};
            }      
        }
    }
}
class flr extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.uFr = true
        this.i = 0
    }

    upd()
    {   if(this.uFr)
        {   for(var i = 0; i<frictional.length; i++)
                if(this.collide(frictional[i]))  frictional[i].fri = 0, frictional[i].acel = 5;  
            this.drw = function(){ground(this)}
        }
        else
        {   for(var i = 0; i<frictional.length; i++)
                if(this.collide(frictional[i]))  frictional[i].fri = 0.99, frictional[i].acel = 0.1;  
            this.clr = "lightblue"
            this.drw = function(){ctx.fillStyle = this.clr,ctx.fillRect(this.x,this.y,32,32);}
            this.i++
        }
        if(this.i > 240 && !this.uFr)
        {   this.uFr = true
            this.i = 0
        }
    }
}
class dor extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.clr = "#6b5421";
    }

    upd()
    {   let pbx = {x:pla.x-5,y:pla.y-5,w:pla.w+10,h:pla.h+10};
        //player checker hitbox
        if(this.collide(pbx) && cpd)
        {   clv++;
            pla.x = levels[clv].spwPoint.x;
            pla.y = levels[clv].spwPoint.y;
            ENE = [];
            blo = [];
            par = [];
            pla.bal = [];
        }
    }
}
class Spw extends Tle
{   constructor(x,y) 
    {   super(x,y);
        this.enL = 0;
        this.spT = 0;
        this.cuT = 0;
        this.c = 0;
    }

    arT() 
    {   if(this.cuT == this.spT) 
        {   ENE.push(new Min(this.x,this.y,64,64,this));
            this.cuT = 0;
            this.c++;
        } 
        this.cuT++;
    }
    drw()
    {   ground(this);
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
        this.cld = false;
    }

    upd()
    {   if(this.collide(pla))
        {   if(lvls[clv].btns[nxt] == this && !this.cld)
            {   this.clr = "green";
                nxt++;
            }
            else if(!this.cld)
            {   for(var i =0;i<lvls[clv].btns.length;i++)
                    lvls[clv].btns[i].clr = "red";
                nxt = 0;
            }
            this.cld = true;
            if(nxt == 4)    
                cpd = true;
        }
        else
            this.cld = false;
    }
    drw()
    {   ground(this);
        btn(this, this.clr);
    }
}
class Mor extends Tle{
    constructor(x,y,val,i)
    {   super(x,y);
        this.clr = "red";
        this.cld = 0;
        this.val = val;
        this.i = i;
    }

    drw()
    {   ground(this);
        btn(this, this.clr);
        mor(this);
    }

    upd()
    {   if(sqr(((this.x+this.w/2) - (pla.x+pla.w/2))**2 + ((this.y+this.h/2) - (pla.y+pla.h/2))**2)<50)
        {   pla.int = 1;
            if(key[69])
               this.i++, key[69] = !key[69];
        }
    }
}
class Bxs extends Tle {
    constructor (x,y)
    {   super(x,y);
        this.clr = "#FF9633"
        this.box = new Box(this.x,this.y);
    }
}
//box destiny tile
class BDT extends Tle {
    constructor (x,y)
    {   super(x,y);
        this.act = false;
        this.clr = "purple";
    }
    //box collide
    bCD() {
        var len = lvls[clv].boxes.length;
        for (var i = 0; i < len; i++) {
            if (this.x + 32 >= lvls[clv].boxes[i].box.x &&    
                this.x <= lvls[clv].boxes[i].box.x + lvls[clv].boxes[i].box.w &&      
                this.y + 32 >= lvls[clv].boxes[i].box.y &&      
                this.y <= lvls[clv].boxes[i].box.y + lvls[clv].boxes[i].box.h) {
                return true;
            }
        }
        return false;
    }
    upd() {
        this.act = this.bCD();
        this.bCD()?this.clr = "green":this.clr = "purple";
    }
}
//placa Sign
class Sgn extends Tle
{   constructor(x,y,txt)
    {   super(x,y);
        this.clr = '#7C653C';
        this.col = true;
        this.txt = txt
    }
    drw()
    {   ground(this);
        sgn(this);
    }
    upd()
    {   if(sqr(((this.x+this.w/2) - (pla.x+pla.w/2))**2 + ((this.y+this.h/2) - (pla.y+pla.h/2))**2)<50)
        {   if(key[69]) adT(this.txt, "black", 100);
            pla.int = 1;
        }
    }
}
class Ice extends Tle{
    constructor(x,y)
    {   super(x,y);
        this.clr = "lightblue";
        this.uFr = 0;
        this.i = 0;
    }

    upd()
    {   if(!this.uFr)
        {   for(var i = 0; i<frictional.length; i++)
                if(this.collide(frictional[i]))  frictional[i].fri = 0.99, frictional[i].acel = 0.1;    

            this.clr = "lightblue"
            this.drw = function(){ctx.fillStyle = this.clr,ctx.fillRect(this.x,this.y,32,32);}
        }else{
            for(var i = 0; i<frictional.length; i++)
                if(this.collide(frictional[i]))  frictional[i].fri = 0, frictional[i].acel = 5;   
            
            this.drw = function(){ground(this)};
            this.i++;
        }
        if(this.i > 30*8 && this.uFr)
        {   this.uFr = 0;
            this.i = 0;
        }
    }
}
class Mth extends Tle{
    constructor(x,y,typ,fix,num)
    {   super(x,y);
        // this.txC = "red";
        this.typ = typ; //Dgt, Add, Sub, Mul, Div, Res, Ans
        this.fix = fix;
        this.fix ? this.txC = "black" : this.txC = "crimson";
        this.val = 0;
        switch (this.typ)
        {   case "Dgt":
                !this.fix ? this.val = Math.floor(Math.random()*21) : this.val = num%21;
                this.dgt = this.val;
            break;
            case "Add":this.dgt = "+";break;
            case "Sub":this.dgt = "-";break;
            case "Mul":this.dgt = "*";break;
            case "Div":this.dgt = "/";break;
            case "Res":this.dgt = "=";break;
            case "Ans":this.dgt = 13;break;       
        }
        this.str = this.val;
    }

    opr(pre,nxt){
        switch (this.typ)
        {   case "Add":nxt.str = pre.str + nxt.val;break;
            case "Sub":nxt.str = pre.str - nxt.val;break;
            case "Mul":nxt.str = pre.str * nxt.val;break;
            case "Div":nxt.str = pre.str / nxt.val;break;
            case "Res":
                this.str = pre.str;
                nxt.str = pre.str;
            break;
            case "Ans":this.str = this.dgt = this.val = 13;break;          
        }
        return;
    }

    chg(num) {
        return(num);
    }

    drw()
    {   mat(this);
        ctx.fillStyle = this.txC;
        ctx.font = `${this.w/1.5}px Arial`; //fonte a mudar
        ctx.textAlign = "center";
        ctx.fillText(this.dgt, this.x+this.w/2, this.y+this.h/2);
    }
    upd(){
        if((sqr(((this.x+this.w/2) - (pla.x+pla.w/2))**2 + ((this.y+this.h/2) - (pla.y+pla.h/2))**2)<50) && !this.fix){
            pla.int = 1;
            if(key[69])
            {   this.val++;
                this.val %= 20;
                this.dgt = this.val;
                this.str = this.val;
                key[69] = false;
            }
        }
    }
}




//graphics
class Gbx extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.col = true;
        this.bx1 = {x:this.x, y:this.y, w:this.w, h:this.h};
        this.bx2 = {x:this.x, y:this.y-this.h/1.4, w:this.w, h:this.h};
    }
    drw()
    {   box(this.bx1);
        box(this.bx2);
    }
}
class Gbo extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.col = true;
    }
    drw(){box(this)};
}
class Gdi extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.r = (90*parseInt(rng()*4));
    }
    drw()
    {   ground(this);
        
        sB(3,'black');
        dir(this,this.r);
        sB(0);
    };
}