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
        this.w = w/2; 
        this.h = h/2; 

        this.d = new Vec(0,0);
        this.spd = new Vec(0,0);
        this.c = 0;
        this.cnt = 1;
        this.rot = 0;
        this.par = [];
    }

    dra()
    {   if(this.d.x){   this.a = this.sid, this.c = 0; if(this.d.x<0) this.c = 1;}
        if(this.d.y>0 && abs(this.d.y)>abs(this.d.x))  this.a = this.fro, this.c=0;
        if(this.d.y<0 && abs(this.d.y)>abs(this.d.x))  this.a = this.bac, this.c=0;

        if(this.spd.x || this.spd.y)
        {   this.cnt++;
            if(this.rot)    this.cnt-=2;

            if(this.cnt>=3 || this.cnt<=-3)this.rot = !this.rot;
        }
        else    this.cnt>0 ? this.cnt-=0.25 : (this.cnt<0 ? this.cnt+=0.25 : null);
        this.a();
    }

    a(){this.fro()};

    cld(oth)
    {   for(let i=0;i<oth.length;i++)
        {   if (this.x + this.w >= oth[i].x &&     
            this.x <= oth[i].x + oth[i].w &&       
            this.y + this.h >= oth[i].y &&       
            this.y <= oth[i].y + oth[i].h)    return true;
        }
    }
    
    u(o)
    {    return !lvls[clv].map.arr[o.l][o.c];}
    
    CWL()
    {   this.mp1 = {c:parseInt((this.x)/32), l:parseInt((this.y)/32)};
        this.mp2 = {c:parseInt((this.x+this.w)/32), l:parseInt((this.y)/32)};
        this.mp3 = {c:parseInt((this.x+this.w)/32), l:parseInt((this.y+this.h)/32)};
        this.mp4 = {c:parseInt((this.x)/32), l:parseInt((this.y+this.h)/32)};
        return (this.u(this.mp1) || this.u(this.mp2) ||this.u(this.mp3) ||this.u(this.mp4));
    }
}
class Pla extends Ent
{   constructor(x,y,w,h)
    {   super(x,y,w,h)
        this.atC = 0;
        this.bal = [];
    }
    sid()
    {   cha(this);
            gaS(this,this.cnt);
            le1(this, this.cnt,'white');
            mov(this);
                heS(this);
                bdS(this, '#6F6F6F','#424242',0);
            res();
            swo(this, this.x+this.w*2/4, this.cnt, this.atC);
            hs2(this, this.cnt,'white', this.atC);
            le2(this, this.cnt,'white');
        res();
    }
    bac()
    {   swo(this, this.x, -this.cnt, this.atC);
        han(this, -this.cnt, 0, this.atC, 'white');
        gau(this, -this.cnt, this.w*3/4)
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), 'white');
        
        mov(this);
            heB(this,'#424242');
            bdB(this,'#6F6F6F','#424242');
        res();
    }
    fro()
    {   mov(this);
            heF(this);
            bdF(this);
        res();
        han(this, this.cnt, this.w*3/4, this.atC, 'white');
        swo(this, this.x+this.w*3/4, this.cnt, this.atC);
        gau(this, this.cnt, 0);
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), 'white');
    }
    ATK()
    {   var hit = {x:this.x + 40*this.d.x, y:this.y + 60*this.d.y-this.h/2, w:this.h, h:this.w*1.5};
        //r(this.x + 40*this.d.x, this.y + 60*this.d.y-this.h/2, this.h, this.w*1.5,"red");
        sla(hit);

        for(var i=0; i<lvls[clv].boxes.length; i++)
            //caso o player bata na caixa, ela retorna pro seu ponto de origem
            if(lvls[clv].boxes[i].cld([hit])) lvls[clv].boxes[i].x = lvls[clv].boxes[i].spX, lvls[clv].boxes[i].y = lvls[clv].boxes[i].spY;

        for(var i = 0; i<ENE.length; i++)
        {   if(ENE[i].cld([hit]))
                ENE[i].lif-=50;
        }
    }
    fir()
    {   this.bal.push(new Ball(this.x, this.y, 16, 16, ang));}

    move(o) 
    {   this.x += this.spd.x*abs(this.spd.x/this.len)*o, this.y += this.spd.y*abs(this.spd.y/this.len)*o;}

    upd()
    {   //atack animation functions
        if(this.atA)
        {   this.atC+=20;
            this.atk = 0;
            if(!this.atC) this.ATK(), this.atA = 0;
        }        
        if(this.atk)
        {   this.atC-=10;
            if(this.atC<-90) this.atA = 1;
        }

        this.len = this.spd.x||this.spd.y ? Math.sqrt(this.spd.x**2+this.spd.y**2) : 1;
        this.move(1);
        if(this.CWL())this.move(-1);
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(this.cld([lvls[clv].boxes[i]])) lvls[clv].boxes[i].psh(this, this.d.x, this.d.y), this.move(-1);
        
        this.spd.x = 0;
        this.spd.y = 0;
    }
}
class Ball extends Ent
{   constructor(x,y,w,h,a)
    {   super(x,y,w,h);
        this.a = a;
    }
    dra()
    {   r(this.x,this.y,this.w,this.h,'red');
        for (let i = 0; i < 5; i++) par.push(new Par(this, 'ora'));
    }
    die()
    {   if(this.CWL())      return true;
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(this.cld([lvls[clv].boxes[i]])) return true;

        for(var i = 0; i<ENE.length; i++)
            if(ENE[i].cld([this]))
            {   ENE[i].lif-=100;
                return true;
            }
    }
    upd()
    {   this.x += cos(this.a)*5;
        this.y += sin(this.a)*5;
    }
}
class Box extends Ent 
{   constructor(x,y) 
    {   super(x,y,64,64);
        //ponto de origem da caixa (spawner)
        this.spX = x;
        this.spY = y;
    }
    psh(obj)
    {   if(abs(obj.spd.x) != abs(obj.spd.y))    this.x += obj.spd.x, this.y += obj.spd.y;
        if(this.CWL())                          this.x -= obj.spd.x, this.y -= obj.spd.y;
    }

    dra(){r(this.x, this.y, this.w, this.h, 'red')}
}
class Min extends Ent
{   constructor(x,y,w,h) {
        super(x,y,w,h);
        this.lif = 100;
        this.anC = 0;
        this.gra = 0;

        this.spe = 1;
        this.spV = new Vec(0,0);
        this.acV = new Vec(0,0);
        this.r = 50;
        //enemy radius
        this.raE = 50;
        //player radius
        this.raP = 150;
        //player max radius
        this.rPM = 300;
        this.wH = 1;
        this.wHa = 1;
    }
    sid()
    {   cha(this);
            le1(this, this.cnt, '#3A4A13');
            mov(this);
                bdS(this, '#5C0C0C', '#5C0C0C',1, this.anC);
            res();
            hs2(this, this.cnt, '#3A4A13', 0);
            le2(this, this.cnt, '#3A4A13')
        res();
    }
    bac()
    {   HAN(this, this.cnt, '#3A4A13');
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), '#3A4A13');
        
        mov(this);
            bdB(this, '#5C0C0C', '#5C0C0C');
        res();
    }
    fro()
    {   mov(this);
            bdB(this, '#5C0C0C', '#5C0C0C');
            ZhF(this, this.anC);
        res();
        HAN(this, this.cnt, '#3A4A13');
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), '#3A4A13');
    }
    die()
    {  return this.dea;
    }
    wlk(x,y) 
    {   this.x += x;
        this.y += y;
    }
    upd()
    {   //animate functions
        if(this.y-0.5+this.h/2+1+this.anC > this.y+this.h) this.dea = 1;
        if(this.lif<=0)
        {   this.gra += 0.25;
            this.anC += this.gra;
            for (let i = 0; i < 5; i++) par.push(new Par(this, 'red'));
            blo.push(new Blo(this));
        }
        //vetor da soma entre todos os inimigos
        let sV = new Vec(0,0);
        //vetor entre o inimigo e o player
        let tV = new Vec(0,0);
        //cnt inimigos
        let cnt = 0;

        for (let oth of ENE) 
        {   //distancia entre os inimigos
            let d = Math.sqrt(Math.pow((this.x+this.w/2) - (oth.x+oth.w/2), 2) + Math.pow((this.y+this.h/2) - (oth.y+oth.h/2), 2));
            //distancia entre o inimigo e o player
            let dp = Math.sqrt(Math.pow((this.x+this.w/2) - (pla.x+pla.w/2), 2) + Math.pow((this.y+this.h/2) - (pla.y+pla.h/2), 2));
            
            //persegue o player caso o player esteja dentro do seu raio de detecção
            if (dp <= this.raP) {
                tV = new Vec((pla.x+pla.w/2) - (this.x+this.w/2), (pla.y+pla.h/2) - (this.y+this.h/2));
                this.raP = this.rPM;
            } else {
                //diminui o raio de detecção após o player sair
                if (this.raP > 150) this.raP -= 0.2;
            }

            if (this != oth && d <= this.raP && (oth.raP > this.raP || this.raP > oth.raP)) oth.raP = this.raP;
            

            if (this != oth && d <= this.raE) 
            {   let v = new Vec((this.x+this.w/2) - (oth.x+oth.w/2), (this.y+this.h/2) - (oth.y+this.h/2));
                cnt++;
                sV.sum(v);
            }
            
            if (cnt) sV.div(cnt);
            let s1 = Math.sqrt(Math.pow(sV.x, 2) + Math.pow(sV.y, 2));
            if (s1) sV.div(s1);
            sV.mtp(this.spe*2);
            
            let s2 = Math.sqrt(Math.pow(tV.x, 2) + Math.pow(tV.y, 2));
            if (s2) tV.div(s2);
            
            tV.mtp(this.spe*0.8);
            this.acV.sum(sV);
            this.acV.sum(tV);
            this.spV.sum(this.acV);
            this.spV.lim(this.spe);

            if(this.anC) this.spV.mtp(0), tV.mtp(0);
            this.d = tV;
            this.spd = tV;
        }

        this.wlk(this.spV.x,this.spV.y);
        if(this.CWL()) this.wlk(-this.spV.x, -this.spV.y);   
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(this.cld([lvls[clv].boxes[i]])) lvls[clv].boxes[i].psh(this, this.d.x, this.d.y), this.wlk(-this.spV.x, -this.spV.y);
        

        this.acV.mtp(0);
        this.spV.mtp(0);
    }
}