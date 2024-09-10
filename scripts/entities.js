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
        this.fri = 0;
        this.acel = 0;
    }

    drw()
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
        this.lfB();
    }
    lfB(){}
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
    {   return (lvls[clv].map.arr[o.l][o.c].col || lvls[clv].map.arr[o.l][o.c].constructor.name == "dor");}
    
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
        this.fAC = 0;
        this.fsw = 0;

        this.bal = [];
        this.msp = 5;
        this.int = 0;
        this.ice = 0;
        this.tim = {c:390, m:390};
        this.amo = {c:0, m:60};
        this.dea = 0;
        this.deC = 0;
    }
    sid()
    {   cha(this);
            //gaS(this,this.cnt);
            hs1(this, this.cnt,wh);
            le1(this, this.cnt,wh);
            mov(this);
                heS(this);
                bdS(this, '#6F6F6F','#424242',0);
            res();
            swo(this, this.x+this.w*2/4, this.cnt, this.atC,'red', this.fsw);
            hs2(this, this.cnt,wh, this.atC,0);
            le2(this, this.cnt,wh,0);
        res();
    }
    bac()
    {   swo(this, this.x, -this.cnt, this.atC,'red', this.fsw);
        
        han(this, -this.cnt, 0, this.atC, wh,0);
        han(this, this.cnt, this.w*3/4, 0, wh,0);
        //gau(this, -this.cnt, this.w*3/4)
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), wh,wh,0);
        
        mov(this);
            heB(this,'#424242');
            bdB(this,'#6F6F6F','#424242', 1);
        res();
    }
    fro()
    {   mov(this);
            heF(this);
            bdF(this);
        res();
        han(this, this.cnt, this.w*3/4, this.atC, wh,0);
        han(this, -this.cnt, this.w*0/4, 0, wh,0);
        // HAN(this, this.cnt, wh, 0);
        swo(this, this.x+this.w*3/4, this.cnt, this.atC,'red', this.fsw);
        //gau(this, this.cnt, 0);
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), wh,wh,0);
    }
    ATK()
    {   var hit = {x:this.x + 40*this.d.x, y:this.y + 60*this.d.y-this.h/2, w:this.h, h:this.w*1.5};
        //r(this.x + 40*this.d.x, this.y + 60*this.d.y-this.h/2, this.h, this.w*1.5,"red");
        sla(hit);

        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(lvls[clv].boxes[i].box.cld([hit])) lvls[clv].boxes[i].box.x = lvls[clv].boxes[i].box.spX, lvls[clv].boxes[i].box.y = lvls[clv].boxes[i].box.spY;

        for(var i = 0; i<ENE.length; i++)
        {   if(ENE[i].cld([hit]))
                ENE[i].lif.c-=50;
        }
    }
    fir()
    {   this.bal.push(new Ball(this.x+this.w/2, this.y, 16, 16, ang)),this.amo.c++;
    }

    move(o) 
    {   this.x += this.spd.x*abs(this.spd.x/this.len)*o, this.y += this.spd.y*abs(this.spd.y/this.len)*o;}

    upd()
    {   if(this.amo.c) this.amo.c++;
        if(this.amo.c == this.amo.m) this.amo.c = 0;
        //atack animation functions
        if(this.atA)
        {   this.atC+=20;
            this.atk = 0;
            if(!this.atC) this.ATK(), this.atA = 0;
        }        
        if(this.atk)
        {   this.atC-=10;
            if(this.atC<-90) this.atA = 1;
        }
        if(this.fAk && !this.amo.c)
        {   this.fAC++;
            this.fsw = 1;
            if(this.fAC > 30) this.fsw = 0, this.fAC = 0,this.fAk = 0, this.fir();
        }
        //dead checker, ta comentado rogerão mete bala meu velho!
        //se quiser tirar as particulas pra teste ou whatever ta la no functionDrwa swo, 
         if(this.dea) 
         {  key = [];
            this.ataA = 1
            this.atk = 0;
            this.atC = 0;
            this.spd.x = 0;
            this.spd.y = 0; 
            this.deC++;
             if(this.deC > 90)
             {   //this.fro = function(){}, this.bac = function(){}, this.sid = function(){};
                 //swo(this, this.x+this.w/2+rng()*1, -this.cnt, this.atC,'red', this.fsw);
             }
             if(this.deC > 120) {
                clearInterval(tim);
                tim = setInterval(dead,1000/30);
             }
        }


        if(this.int) int(this);
        this.int = 0; 
        
        this.len = this.spd.x||this.spd.y ? sqr(this.spd.x**2+this.spd.y**2) : 1;
        this.move(1);
        if(this.CWL())this.move(-1), this.spd.mtp(0);
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(this.cld([lvls[clv].boxes[i].box])) lvls[clv].boxes[i].box.psh(this, this.d.x, this.d.y), this.move(-1);
        
        this.spd.x *= this.fri;
        this.spd.y *= this.fri;
        if(abs(this.spd.x)<0.05) this.spd.x = 0;
        if(abs(this.spd.y)<0.05) this.spd.y = 0;

        
        let mp = {c:parseInt((this.x+this.w/2)/32), l:parseInt((this.y+this.h/2)/32)}
        if(this.ice) setFro(mp, new Ice());
        
        //temporário
        if(key[84])
        {   this.ice = !this.ice;
            key[84] = !key[84];
        }

        if(this.tim.c <= 0) this.dea=1; 
        if(this.tim.c > this.tim.m) this.tim.c = this.tim.m;
        this.tim.c > 0 ? this.tim.c-- : null; 
    }
}
class Ball extends Ent
{   constructor(x,y,w,h,a)
    {   super(x,y,w,h);
        this.a = a;
    }
    drw()
    {   r(this.x,this.y,this.w,this.h,'red');
        for (let i = 0; i < 5; i++) par.push(new Par(this, 'ora'));
    }
    die()
    {   if(this.CWL())      return 1;
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(this.cld([lvls[clv].boxes[i].box])) return 1;

        for(var i = 0; i<ENE.length; i++)
            if(ENE[i].cld([this]))
            {   ENE[i].lif.c-=100;
                return 1;
            }
    }
    upd()
    {   this.x += cos(this.a)*10;
        this.y += sin(this.a)*10;

        let mp = {c:parseInt((this.x+this.w/2)/32), l:parseInt((this.y+this.h/2)/32)}
        // console.log(lvls[clv].map.arr[mp.l][mp.c].fre)
        if(lvls[clv].map.arr[mp.l][mp.c].fre)   setFro(mp, new flr());

    }
}
class DBal extends Ball 
{   constructor(x,y,w,h,a)
    {   super(x,y,w,h,a);
        this.x += this.w/2;
    }
    die()
    {   if(this.CWL())      return 1;
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(this.cld([lvls[clv].boxes[i].box])) return 1;

        if (pla.cld([this])) {
            pla.tim.c -= 30;
            return 1
        }    
    }
    upd()
    {   super.drw();
        this.x += cos(this.a)*15;
        this.y += sin(this.a)*15;
        let mp = {c:parseInt((this.x+this.w/2)/32), l:parseInt((this.y+this.h/2)/32)}
        if(!lvls[clv].map.arr[mp.l][mp.c].uFr)lvls[clv].map.arr[mp.l][mp.c].uFr = 1;
    }
}
class Met{
    constructor(dtx,dty,w,h,a) {
        this.dtx = dtx;
        this.dty = dty;
        this.w = w;
        this.h = h;
        this.a = a;
        this.x = cos(a)*(-400)+dtx;
        this.y = sin(a)*(-400)+dty-h;
    }
    upd()
    {   r(this.x,this.y,this.w,this.h,"rgb(161, 81, 35)");
        for (let i = 0; i < 5; i++) par.push(new Par(this, 'ora'));
        this.x += cos(this.a)*10;
        this.y += sin(this.a)*10;
        bal(this.dtx, this.dty, 50, "rgba(255,0,0,"+(((100*this.y)/this.dty)/5)/100+")");
    }
}

class Box extends Ent 
{   constructor(x,y) 
    {   super(x,y,64,64);
        this.spX = x;
        this.spY = y;
    }
    psh(obj)
    {   this.spd.x = obj.spd.x, this.spd.y = obj.spd.y;
    }

    drw()
    {   box(this);
    }

    upd()
    {   this.x += this.spd.x
        this.y += this.spd.y

        if(this.CWL())
        {   this.x -= this.spd.x;
            this.y -= this.spd.y;
            this.spd.x = 0;
            this.spd.y = 0;
        }

        this.spd.x *= this.fri;
        this.spd.y *= this.fri;
        if(abs(this.spd.x)<0.05) this.spd.x = 0;
        if(abs(this.spd.y)<0.05) this.spd.y = 0;
    }

}
class Ene extends Ent
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        this.anC = 0;
        this.gra = 0;

        this.spe = 1;
        this.spV = new Vec(0,0);
        this.acV = new Vec(0,0);
        this.sVM = 2;
        this.tVM = 1.25;
        this.r = 50;
        //enemy radius
        this.raE = 50;
        //player radius
        this.raP = 300;
        //player max radius
        this.rPM = 500;
        this.wH = 1;
        this.wHa = 1;
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
        //vetor da soma entre todos os inimigos
        let sV = new Vec(0,0);
        //vetor entre o inimigo e o player
        let tV = new Vec(0,0);
        //cnt inimigos
        let cnt = 0;

        for (let oth of ENE) 
        {   //distancia entre os inimigos
            let d = sqr(((this.x+this.w/2) - (oth.x+oth.w/2))**2 + ((this.y+this.h/2) - (oth.y+oth.h/2))**2);
            //distancia entre o inimigo e o player
            let dp = sqr(((this.x+this.w/2) - (pla.x+pla.w/2))**2 + ((this.y+this.h/2) - (pla.y+pla.h/2))**2);
            
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
            let s1 = sqr((sV.x)**2 + (sV.y)**2);
            if (s1) sV.div(s1);
            sV.mtp(this.spe*this.sVM);
            
            let s2 = sqr((tV.x)**2 + (tV.y)**2);
            if (s2) tV.div(s2);
            
            tV.mtp(this.spe*this.tVM);
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
            if(this.cld([lvls[clv].boxes[i].box])) lvls[clv].boxes[i].box.psh(this, this.d.x, this.d.y), this.wlk(-this.spV.x, -this.spV.y);
        this.acV.mtp(0);

        this.spV.x *= this.fri;
        this.spV.y *= this.fri;
        if(this.spV.x<0.1) this.spV.x = 0;
        if(this.spV.y<0.1) this.spV.y = 0;
    }
}
class Min extends Ene
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        this.lif = {m:100,c:100};
        this.rec = 60;
    }
    sid()
    {   cha(this);
            le1(this, this.cnt, zC);
            mov(this);
                bdS(this, '#5C0C0C', '#5C0C0C',1, this.anC);
            res();
            hs2(this, this.cnt, zC, 0,0);
            le2(this, this.cnt, zC,0);
        res();
    }
    bac()
    {   HAN(this, this.cnt, zC,0);
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), zC,zC,0);
        
        mov(this);
            bdB(this, '#5C0C0C', '#5C0C0C',1);
        res();
    }
    fro()
    {   mov(this);
            bdB(this, '#5C0C0C', '#5C0C0C',1);
            ZhF(this, this.anC);
        res();
        HAN(this, this.cnt, zC,0);
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), zC,zC,0);
    }
    lfB()
    {   if(this.y-0.5+this.h/2+1+this.anC > this.y+this.h) this.dea = 1, pla.tim.c+=this.rec, enC++;
        if(this.lif.c<=0)
        {   this.gra += 0.25;
            this.anC += this.gra;
            for (let i = 0; i < 5; i++) par.push(new Par(this, 'red'));
            blo.push(new Blo(this));
        }
        else
        {   lB(this, wh,this.h/4,3,3,0);
            lB(this, 'red',this.h/4,3,3,1);
        } 
    }
}
//currepted
class Cur extends Ene
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        this.lif = {m:200,c:200};
        this.spd.x = 0;
        this.rec = 90;
    }
    sid()
    {   cha(this);
            le1(this, this.cnt, zC);
            hs1(this, this.cnt, zC);
            mov(this);
                heS(this,1);
                bdS(this, '#5C0C0C', '#B40F0F',0, this.anC);
            res();
            //swo(this, this.x+this.w*2/4, this.cnt, 0,'#4E4E50');
            hs2(this, this.cnt, wh, 0,1);
            le2(this, this.cnt, wh,1);
        res();
    }
    bac()
    {   //swo(this, this.x, -this.cnt, 0,'#4E4E50');
        han(this, this.cnt, this.w*3/4,0,zC,0);
        han(this,-this.cnt, 0,0,wh,1);
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), wh,zC,0);

        mov(this);
            heB(this,1);
            bdB(this, '#5C0C0C', '#B40F0F',0);
        res();
    }
    fro()
    {   mov(this);
            bdB(this, '#5C0C0C', '#5C0C0C',1);
            heF(this, this.anC);
            cHe(this, this.anC);
            siJ(this, '#B40F0F')
        res();
        // HAN(this, this.cnt, zC);
        han(this, this.cnt, this.w*3/4,0,wh,1);
        han(this,-this.cnt, 0,0,zC,0);
        //swo(this, this.x+this.w*3/4, this.cnt, 0, '#4E4E50');    
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), zC,wh,1);
    }
    lfB()
    {   if(this.y-0.5+this.h/2+1+this.anC > this.y+this.h) this.dea = 1, pla.tim.c+=this.rec;
        if(this.lif.c<=0)
        {   this.gra += 0.25;
            this.anC += this.gra;
            for (let i = 0; i < 5; i++) par.push(new Par(this, 'red'));
            blo.push(new Blo(this));
        }
        else
        {   lB(this, wh,this.h/1.3,5,3,0);
            lB(this, 'red',this.h/1.3,5,3,1);
        } 
    }
}
class Dre extends Ene
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        this.lif = {m:5000,c:5000};
        this.spd.x = 1;
        //flee
        this.fle = true;
        //teleport tile
        this.tpt = []
        //teleport clock
        this.tpc = {c:0, m:30*2};
        this.tpc.c = this.tpc.m;
        //attack stuff
        this.ats = [new Atk("Frb", 2, false, 0.5),
                    new Atk("Ice", 10, false),
                    new Atk("Mtr", 5, false, 0.5),
                    new Atk("Aur", 7, false)
        ]; //Fireball, Wall, Ice, Meteor, Aura.
        //fireball array
        this.bal = [];
        //aura radius
        this.auR = 100;
        //meteor tile
        this.mtT = [];
        //meteor array
        this.mtr = [];

    }
    sid()
    {   sB(15*!this.fle,'red');
        cha(this);
            gaS(this,this.cnt);
            tra(0,this.cnt/8)    
                Dbd(this, 1);
                spk(this,0);
                spk(this,this.w/3);
                spk(this,this.w/1.6);
            tra(0,-this.cnt/8)    
            stf(this, this.cnt/5);
            hs2(this, this.cnt/5,blk, 0,0);
        res();
        sB(0);
        for (let i = 0; i < 10; i++) par.push(new Par(this, 'bla'));
    }
    fro()
    {   sB(15*!this.fle,'red');
        tra(0,this.cnt/8);
            DFb(this, this.cnt);
            DFh(this, this.cnt);
        tra(0,-this.cnt/8);
        HAN(this, this.cnt, blk,0);
        stf(this, this.cnt);
        gau(this, this.cnt, 0);
        sB(0);
        for (let i = 0; i < 10; i++) par.push(new Par(this, 'bla'));
    }
    bac()
    {   sB(15*!this.fle,'red');
        stf(this, -this.cnt,1);
        HAN(this, this.cnt, blk,0);
        gau(this, -this.cnt, this.w*3/4);
        tra(0,this.cnt/8)    
            Dbd(this, 0, 1);
            spk(this,0);
            spk(this,this.w/3);
            spk(this,this.w/1.6);
        tra(0,-this.cnt/8)   
        sB(0); 
        for (let i = 0; i < 10; i++) par.push(new Par(this, 'bla'));
    }
    lfB()
    {   if(this.y-0.5+this.h/2+1+this.anC > this.y+this.h) this.dea = 1;
        if(this.lif.c<=0)
        {   this.gra += 0.25;
            this.anC += this.gra;
            for (let i = 0; i < 5; i++) par.push(new Par(this, 'red'));
            blo.push(new Blo(this));
        }
        else {
            lB(this, wh,this.h/1.5,5,4,0);
            lB(this, 'purple',this.h/1.5,5,4,1);
        } 
    }
    tlp() {
        this.tpt = [];
        sgr("flr", lvls[clv].map.arr, this.tpt);
        var chs = this.tpt[parseInt(Math.random()*(this.tpt.length))];
        this.x = chs.x-this.w/2;
        this.y = chs.y-this.h/2;
        let dp = sqr(((this.x+this.w/2) - (pla.x+pla.w/2))**2 + ((this.y+this.h/2) - (pla.y+pla.h/2))**2)
        !this.ats[3].act ? ((this.CWL() || chs.x == undefined || chs.y == undefined || (dp < 250 || dp > 800)) ? this.tlp() : null) : ((this.CWL() || chs.x == undefined || chs.y == undefined || dp > 100) ? this.tlp() : null)
    }
    raG() {
        let slA = Math.floor(Math.random()*(this.ats.length));
        switch (this.ats[slA].nam) {
            case "Frb":
                this.ats[0].act = true;
                this.ats[0].tmr.c = this.ats[0].tmr.m;
                this.ats[0].atm.c = this.ats[0].atm.m;
                adT("Die!;", "purple", 100);
                break;
            case "Ice":
                this.ats[1].act = true;
                this.ats[1].tmr.c = this.ats[1].tmr.m;
                adT("Freeze, insect!;", "purple", 100);
                break;        
            case "Mtr":
                this.ats[2].act = true;
                this.ats[2].tmr.c = this.ats[2].tmr.m;
                this.ats[2].atm.c = this.ats[2].atm.m;
                sgr("flr", lvls[clv].map.arr, this.mtT);
                adT("Behold the heaven's wrath!;", "purple", 100);
                break;
            case "Aur":
                this.ats[3].act = true;
                this.ats[3].tmr.c = this.ats[3].tmr.m;
                adT("Burn, insect!;", "purple", 100);
                break;    
        }
    }
    //set fireball
    sFb() {
        this.ats[0].tmr.c--;
        this.ats[0].atm.c--;
        var ang = Math.atan2(pla.y - (this.y), pla.x - (this.x+this.w/2))
        if (this.ats[0].atm.c == 0) (this.bal.push(new DBal(this.x, this.y, 40, 40, ang)), this.ats[0].atm.c = this.ats[0].atm.m);
        if (this.ats[0].tmr.c == 0) (this.ats[0].act = false);
    }
    //set ice
    sIc() {
        this.ats[1].tmr.c--;
        if (this.ats[1].tmr.c == 0) (this.ats[1].act = false, pla.ice = 0);
    }
    //set meteor
    sMt() {
        this.ats[2].tmr.c--;
        this.ats[2].atm.c--;
        var chs = this.mtT[parseInt(Math.random()*(this.mtT.length))];
        if (this.ats[2].atm.c == 0) this.mtr.push(new Met(chs.x, chs.y, 40, 40, 135*Math.PI/180)), this.ats[2].atm.c = this.ats[2].atm.m;
        if (this.ats[2].tmr.c == 0) (this.ats[2].act = false, this.mtT = []);
    }
    //set aura
    sAu() {
        let dp = sqr(((this.x+this.w/2) - (pla.x+pla.w/2))**2 + ((this.y+this.h/2) - (pla.y+pla.h/2))**2);
        if (dp<this.auR) pla.tim.c--;
        this.ats[3].tmr.c--;
        if (this.ats[3].tmr.c == 0) (this.ats[3].act = false, this.fle = true);
    }
    upd() {
        this.tpc.c > 0 ? this.tpc.c-- : (this.tpc.c = this.tpc.m, this.raG(), this.tlp());
        //fleeing detector
        this.fle ? ((this.sVM > 0 ? this.sVM *= -1 : null), (this.tVM > 0 ? this.tVM *= -1 : null)) : ((this.sVM < 0 ? this.sVM *= -1 : null), (this.tVM < 0 ? this.tVM *= -1 : null));   
        super.upd();
        if (this.ats[0].act) (this.sFb());
        if (this.ats[1].act) (pla.ice = 1, this.sIc());
        if (this.ats[2].act) (this.sMt());
        if (this.ats[3].act) (this.fle = false, this.sAu());
        for (let i = 0; i < this.mtr.length; i++) {
            this.mtr[i].upd();
            if (this.mtr[i].y+this.mtr[i].h/2 >= this.mtr[i].dty || this.mtr.x <= this.mtr[i].dtx) this.mtr.splice(i,1), i--;
        }
        upT(this.bal)
    }
}