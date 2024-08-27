class lvl 
{   constructor(map,boxes)
    {
        this.map = map
        cma(this.map.arr)
        this.boxes = boxes;
    }

    drw()
    {
        this.map.drw()
    }
}

class Map
{   constructor(arr)
    {   this.arr = arr;
    }

    drw() // Draw
    {   for(var lne = 0;lne < this.arr.length; lne++) // Linhas
            for(var col = 0; col < this.arr[lne].length; col++)
                if(this.arr[lne][col] != 0) this.arr[lne][col].upd(); // Draw each tile 
    }
}
class Tle
{   constructor(x,y,clr)
    {   this.x = x;
        this.y = y;
        this.clr = "black"; // Color
    }

    drw() // Draw
    {   ctx.fillStyle = this.clr;
        ctx.fillRect(this.x,this.y,32,32);
    }

    collide()
    {   if (this.x + 32 >= pla.x &&    
            this.x <= pla.x + pla.w &&      
            this.y + 32 >= pla.y &&      
            this.y <= pla.y + pla.h) {      
            return true;
        }
        return false;
    }

    upd(){
    }
}
class Wal extends Tle
{   constructor(x,y,clr)
    {   super(x,y);
        this.clr = "#d97018";
    }

    upd()
    {   this.drw();
    }
}
class flr extends Tle
{   constructor(x,y)
    {   super(x,y);
    }

    upd()
    {   if(this.collide())  pla.fri = 0.2;
        ground(this);
    }
}
class dor extends Tle
{   constructor(x,y,clr)
    {   super(x,y,clr);
        this.clr = "#6b5421";
    }

    upd()
    {   this.drw();
        if(this.collide())
        {   clv++;    
            pla.x = levels[clv].spwPoint.x
            pla.y = levels[clv].spwPoint.y
            ENE = [];
            blo = [];
            par = [];
            pla.bal = [];
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
    {   super.drw();
        if (this.enA < 30) this.arT();
    }
}

//Box spawner

class Bxs extends Tle {
    constructor (x,y)
    {   super(x,y);
        this.clr = "#FF9633"
        this.box = new Box(this.x,this.y);
        lvls[clv].boxes.push(this.box);
    }
    upd()
    {   super.drw();
    }
}