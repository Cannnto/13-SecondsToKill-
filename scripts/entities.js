class Vec 
{   constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    sum(v) {
        this.x += v.x;
        this.y += v.y;
    }

    div(v) {
        this.x /= v;
        this.y /= v;
    }

    mtp (v) {
        this.x *= v;
        this.y *= v;
    }

    lim(v) {
        this.x = Math.min(Math.max(this.x, -v), v);
        this.y = Math.min(Math.max(this.y, -v), v);
    }
}
class Ent
{   constructor(x, y, w, h)
    {   this.x = x; 
        this.y = y; 
        this.w = w; 
        this.h = h; 

        this.d = {x: 0, y: 0};
        this.spd = 5;
        this.c = 0;
        this.cnt = 1;
        this.rot = 0;
    }

    dra()
    {   if(this.d.x){   this.a = this.sid, this.z = this.Hsi, this.c = 0; if(this.d.x<0) this.c = 1;}
        if(this.d.y>0 && abs(this.d.y)>abs(this.d.x))  this.a = this.fro, this.z = this.Hfr;
        if(this.d.y<0 && abs(this.d.y)>abs(this.d.x))  this.a = this.bac, this.z = this.Hba;
        
        if(this.d.x || this.d.y)
        {   this.cnt++;
            if(this.cnt>=3 || this.cnt<=-3) this.rot = !this.rot;
            if(this.rot)    this.cnt-=2;
        }
        else    this.cnt>0 ? this.cnt-=0.25 : (this.cnt<0 ? this.cnt+=0.25 : null);
        
        SCL(this,0.5);    
        //r(this.x, this.y, this.w, this.h, 'purple');
        this.a();
        res();
    }
    zin()
    {   SCL(this,0.5)
        this.z(); 
        res();  
    }
    a(){this.fro()};
    z(){this.Hfr()};

    collide(oth)
    {   for(let i=0;i<oth.length;i++)
        {   if (this.x + this.w >= oth[i].x &&     
            this.x <= oth[i].x + oth[i].w &&       
            this.y + this.h >= oth[i].y &&       
            this.y <= oth[i].y + oth[i].h)    return true;

        }
        return false;
    };
    upd()
    {   this.len = this.d.x && this.d.y ? Math.sqrt(this.d.x**2+this.d.y**2) : 1;
        this.x += this.d.x/this.len * this.spd, this.y += this.d.y/this.len * this.spd;
    }
}
class Pla extends Ent
{   constructor(x,y,w,h)
    {   super(x,y,w,h)
    }
    sid()
    {   cha(this);
            ha1(this, this.cnt,'white');
            le1(this, this.cnt,'white');
            mov(this);
                bdS(this, '#6F6F6F','#424242',0);
            res();
            ha2(this, this.cnt,'white');
            le2(this, this.cnt,'white');
        res();
    }
    bac()
    {   Lhd(this, this.cnt, 'white');
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), 'white');
        
        mov(this);
            bdB(this,'#6F6F6F','#424242');
        res();
    }
    fro()
    {   mov(this);
            bdF(this);
            //ZhF(this)
        res();

        Lhd(this, this.cnt, 'white');
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), 'white');
    }
        Hfr()
        {   mov(this);
            heF(this);
            res();
        }
        Hsi()
        {   cha(this);
                mov(this);
                heS(this);
                res();
            res();
        }
        Hba()
        {   mov(this);
            heB(this,'#424242');
            res();
        }
    upd()
    {   super.upd();

        let mpa = {l:parseInt((this.x+this.w/2+this.d.x*16)/32), c:parseInt((this.y+this.h/2+this.d.y*16)/32)};
        if(map.arr[mpa.c][mpa.l].constructor.name == 'Wal')
            this.x -= this.d.x/this.len * this.spd, this.y -= this.d.y/this.len * this.spd;
    }
}
class Min extends Ent
{   constructor(x,y,w,h,s) {
        super(x,y,w,h);
        this.spd = 1;
        this.s = s;
        this.spV = new Vec(0,0);
        this.acV = new Vec(0,0);
        this.r = 50;
        this.wH = 1;
        this.wHa = 1;
    }
    sid()
    {   cha(this);
            if(this.wHa)ha1(this, this.cnt, '#3A4A13');
            le1(this, this.cnt, '#3A4A13');
            mov(this);
                //heS(this);
                bdS(this, '#5C0C0C', '#5C0C0C',1);
            res();
            if(this.wHa)ha2(this, this.cnt, '#3A4A13');
            le2(this, this.cnt, '#3A4A13')
        res();
    }
    bac()
    {   if(this.wHa)Lhd(this, this.cnt, '#3A4A13');
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), '#3A4A13');
        
        mov(this);
            bdB(this, '#5C0C0C', '#5C0C0C');
        res();
    }
    fro()
    {   mov(this);
            bdB(this, '#5C0C0C', '#5C0C0C');
            if(this.wH)ZhF(this);
        res();
        if(this.wHa)Lhd(this, this.cnt, '#3A4A13');
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), '#3A4A13');
    }
    
    wlk(x,y) 
    {   this.x += x;
        this.y += y;
    }
    upd()
    {   let sV = new Vec(0,0);
        //cnt inimigos
        let cnt = 0;

        for (let oth of ENE) 
        {   //distancia entre os inimigos
            let d = Math.sqrt(Math.pow((this.x+this.w/2) - (oth.x+oth.w/2), 2) + Math.pow((this.y+this.h/2) - (oth.y+oth.h/2), 2));

            if (this != oth && d <= this.r) 
            {   let v = new Vec((this.x+this.w/2) - (oth.x+oth.w/2), (this.y+this.h/2) - (oth.y+this.h/2));
                cnt++;
                sV.sum(v);
            }
            
            if (cnt > 0) sV.div(cnt);
            let s1 = Math.sqrt(Math.pow(sV.x, 2) + Math.pow(sV.y, 2));
            if (s1 > 0) sV.div(s1);
            sV.mtp(this.spd*2);
            
            //vetor entre o inimigo e o pla
            let tV = new Vec((pla.x+pla.w/2) - (this.x+this.w/2), (pla.y+pla.h/2) - (this.y+this.h/2));

            let s2 = Math.sqrt(Math.pow(tV.x, 2) + Math.pow(tV.y, 2));
            if (s2 > 0) tV.div(s2);
            
            tV.mtp(this.spd*0.8);
            this.acV.sum(sV);
            this.acV.sum(tV);
            this.spV.sum(this.acV);
            this.spV.lim(this.spd);

            this.d.x = tV.x;
            this.d.y = tV.y;
        }

        this.wlk(this.spV.x,this.spV.y);
        let mpa = {l:parseInt((this.x+this.w/2)/32), c:parseInt((this.y+this.h/2)/32)};
        if(map.arr[mpa.c][mpa.l].constructor.name == 'Wal')   this.wlk(-this.spV.x, -this.spV.y);     
        this.acV.mtp(0);
        this.spV.mtp(0);
    }
}