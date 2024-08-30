class lvl 
{   constructor(map)
    {   this.map = map;
        cma(this.map.arr);
        this.boxes = [];
        this.btns=[];
        //boxtile
        this.boxT = []
        sgr('Bxs', this.map.arr, this.boxes);
        sgr("Btn",this.map.arr, this.btns);
        sgr("BDT", this.map.arr, this.boxT);
        shf(this.btns);
        //box target. target number.        current number 
        // for(var lne = 0;lne < this.map.arr.length; lne++) 
        //     for(var col = 0; col < this.map.arr[lne].length; col++)
        //         if(this.map.arr[lne][col].constructor.name == "Bxs") this.boxes.push(this.map.arr[lne][col].box);
    }

    drw()
    {   this.map.drw();
        for(let i=0; i<this.boxes.length;i++)
            if(d(this.boxes[i].box, 32, 32))this.boxes[i].box.drw();
        
        //boxcurrentmatch sla n pensei no nome
        //do jeito que tá, o método de passar tá hardcoded, tem que mudar isso ainda
        var bCM = 0;
        for(let i=0; i<this.boxT.length;i++) {
            if (this.boxT[i].act) {
                bCM++;
            }
        }
        //se não tiver caixas ele não passa imediatamente        
        bCM == this.boxT.length && bCM != 0?cpd = true:cpd = false;
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
    collide()
    {   if (this.x + 32 >= pla.x &&    
            this.x <= pla.x + pla.w &&      
            this.y + 32 >= pla.y &&      
            this.y <= pla.y + pla.h) {      
            return true;
        }
        return false;
    }
}
class Wal extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.clr = "#d97018";
    }
}
class flr extends Tle
{   constructor(x,y)
    {   super(x,y);
    }

    drw()
        {ground(this);}
    upd()
        {if(this.collide())  pla.fri = 0.2;}
}
class dor extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.clr = "#6b5421";
    }

    upd()
    {   if(this.collide() && cpd)
        {   clv++;
            pla.x = levels[clv].spwPoint.x;
            pla.y = levels[clv].spwPoint.y;
            ENE = [];
            blo = [];
            par = [];
            pla.bal = [];
            cpd = false; 
        }
    }
}
class Spw extends Tle
{   constructor(x,y,t) 
    {   super(x,y);
        this.enA = 0;
        this.spT = 30*3;
        this.cuT = 0;
        this.clr = 'red';
    }

    arT() 
    {   if(this.cuT == this.spT) 
        {   ENE.push(new Min(this.x,this.y,64,64,this));
            this.enA++;
            this.cuT = 0;
        } 
        this.cuT++;
    }

    upd() 
    {   if (this.enA < 30) this.arT();
    }
}

class Btn extends Tle
{   constructor(x,y)
    {   super(x,y);
        this.clr = "red";
        this.cld = false;
    }

    upd()
    {   if(this.collide())
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
        //super.drw();
        btn(this, this.clr);
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