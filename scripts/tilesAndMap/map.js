class Map
{   constructor(arr)
    {   this.arr = arr;
    }

    drw() // Draw
    {   for(var lne = 0;lne < this.arr.length; lne++) // Linhas
            for(var col = 0; col < this.arr[lne].length; col++) if(this.arr[lne][col] != 0) this.arr[lne][col].upd(); // Draw each tile 
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
        this.clr = "#3d3d3b";
    }

    upd()
    {   if(this.collide())  pla.fri = 0.2;
        this.drw();
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

            map.arr = empty();
            cma(map.arr);
            pla.x = map.arr[22][26].x;
            pla.y = map.arr[22][26].y;
            
            ENE = [];
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
        {   ENE.push(new Min(this.x - 16,this.y - 16,64,64,this));
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