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
    {   let t = this;
        t.x = x; 
        t.y = y; 
        t.w = w/2;
        t.h = h/2;

        t.d = new Vec(0,0);
        t.spd = new Vec(0,0);
        t.c = 0;
        t.cn = 1;
        t.rot = 0;
        t.par = [];
        t.fri = 0;
        t.acel = 0;
    }

    drw()
    {   let t = this;

        if(t.d.x){   t.a = t.sid, t.c = 0; if(t.d.x<0) t.c = 1;}
        if(t.d.y>0 && abs(t.d.y)>abs(t.d.x))  t.a = t.fro, t.c=0;
        if(t.d.y<0 && abs(t.d.y)>abs(t.d.x))  t.a = t.bac, t.c=0;

        if(t.spd.x || t.spd.y)
        {   t.cn++;
            if(t.rot)    t.cn-=2;

            if(t.cn>=3 || t.cn<=-3)t.rot = !t.rot;
        }
        else    t.cn>0 ? t.cn-=0.25 : (t.cn<0 ? t.cn+=0.25 : null);
        t.a();
        t.lfB();
    }
    lfB(){}
    a(){this.fro()};

    cld(oth)
    {   let t = this;
        for(let i=0;i<oth.length;i++)
        {   if (t.x + t.w >= oth[i].x &&     
            t.x <= oth[i].x + oth[i].w &&       
            t.y + t.h >= oth[i].y &&       
            t.y <= oth[i].y + oth[i].h)    return true;
        }
    }
    
    u(o)
    {   return (lvls[clv].map.arr[o.l][o.c].col || lvls[clv].map.arr[o.l][o.c].constructor.name == "dor");}
    
    CWL()
    {   let t = this;
        t.mp1 = {c:parseInt((t.x)/32), l:parseInt((t.y)/32)};
        t.mp2 = {c:parseInt((t.x+t.w)/32), l:parseInt((t.y)/32)};
        t.mp3 = {c:parseInt((t.x+t.w)/32), l:parseInt((t.y+t.h)/32)};
        t.mp4 = {c:parseInt((t.x)/32), l:parseInt((t.y+t.h)/32)};
        return (t.u(t.mp1) || t.u(t.mp2) ||t.u(t.mp3) ||t.u(t.mp4));
    }
}
class Pla extends Ent
{   constructor(x,y,w,h)
    {   super(x,y,w,h)
        let t = this;
        t.atC = 0;
        t.fAC = 0;
        t.fsw = 0;

        t.bal = [];
        t.msp = 5;
        t.int = 0;
        t.ice = 0;
        t.tim = {c:1/0, m:1/0};
        t.amo = {c:0, m:60};
        t.dea = 0;
        t.deC = 0;
    }
    sid()
    {   let t = this;
        cha(t);
            //gaS(t,t.cn);
            hs1(t, t.cn,wh);
            le1(t, t.cn,wh);
            mov(t);
                heS(t);
                bdS(t, '#6F6F6F','#424242',0);
            res();
            swo(t, t.x+t.w*2/4, t.cn, t.atC,'red', t.fsw);
            hs2(t, t.cn,wh, t.atC,0);
            le2(t, t.cn,wh,0);
        res();
    }
    bac()
    {   let t = this;
        swo(t, t.x, -t.cn, t.atC,'red', t.fsw);
        
        han(t, -t.cn, 0, t.atC, wh,0);
        han(t, t.cn, t.w*3/4, 0, wh,0);
        //gau(t, -t.cn, t.w*3/4)
        leg(t, (t.cn<0 ? 0.8 : (!t.cn ? 1 : 1.2)), (t.cn>0 ? 0.8 : (!t.cn ? 1 : 1.2)), wh,wh,0);
        
        mov(t);
            heB(t,'#424242');
            bdB(t,'#6F6F6F','#424242', 1);
        res();
    }
    fro()
    {   let t = this;
        mov(t);
            heF(t);
            bdF(t);
        res();
        han(t, t.cn, t.w*3/4, t.atC, wh,0);
        han(t, -t.cn, t.w*0/4, 0, wh,0);
        // HAN(t, t.cn, wh, 0);
        swo(t, t.x+t.w*3/4, t.cn, t.atC,'red', t.fsw);
        //gau(t, t.cn, 0);
        leg(t, (t.cn<0 ? 0.8 : (!t.cn ? 1 : 1.2)), (t.cn>0 ? 0.8 : (!t.cn ? 1 : 1.2)), wh,wh,0);
    }
    ATK()
    {   let t = this;
        var hit = {x:t.x + 40*t.d.x, y:t.y + 60*t.d.y-t.h/2, w:t.h, h:t.w*1.5};
        //r(t.x + 40*t.d.x, t.y + 60*t.d.y-t.h/2, t.h, t.w*1.5,"red");
        sla(hit);
        zzfxP(hitS);

        for(var i=0; i<lvls[clv].boxes.length; i++)
            lvls[clv].boxes[i].box.cld([hit]) && (lvls[clv].boxes[i].box.x = lvls[clv].boxes[i].box.spX, lvls[clv].boxes[i].box.y = lvls[clv].boxes[i].box.spY);

        for(var i = 0; i<ENE.length; i++)
        {   ENE[i].cld([hit]) && (ENE[i].lif.c-=50);
        }
    }
    fir()
    {   let t = this;
        zzfxP(firS)
        t.bal.push(new Ball(t.x+t.w/2, t.y, 16, 16, ang)),t.amo.c++;
    }

    move(o) 
    {   let t = this;
        t.x += t.spd.x*abs(t.spd.x/t.len)*o, t.y += t.spd.y*abs(t.spd.y/t.len)*o;}

    upd()
    {   let t = this;
        t.amo.c && t.amo.c++;
        if(t.amo.c == t.amo.m) t.amo.c = 0;
        //atack animation functions
        if(t.atA)
        {   t.atC+=20;
            t.atk = 0;
            t.atC>0 && (t.atC=0, t.ATK(), t.atA = 0);
        }        
        if(t.atk)
        {   t.atC-=15;
            if(t.atC<-90) t.atA = 1;
        }
        if(t.fAk && !t.amo.c)
        {   t.fAC++;
            t.fsw = 1;
            if(t.fAC > 30) t.fsw = 0, t.fAC = 0,t.fAk = 0, t.fir();
        }
        //dead checker, ta comentado rogerão mete bala meu velho!
        //se quiser tirar as particulas pra teste ou whatever ta la no functionDrwa swo, 
         if(t.dea) 
         {  key = [];
            t.spd.mtp(0);
            ang = pi()/2;
            t.deC++;
             if(t.deC > 120) {
                clearInterval(tim);
                tim = setInterval(dead,1000/30);
             }
        }

        t.int && int(t);
        t.int = 0; 
        
        t.len = t.spd.x||t.spd.y ? sqr(t.spd.x**2+t.spd.y**2) : 1;
        t.move(1);
        t.CWL() && (t.move(-1), t.spd.mtp(0));
        for(var i=0; i<lvls[clv].boxes.length; i++)
            t.cld([lvls[clv].boxes[i].box]) && (lvls[clv].boxes[i].box.psh(t, t.d.x, t.d.y), t.move(-1));
        
        t.spd.x *= t.fri;
        t.spd.y *= t.fri;
        if(abs(t.spd.x)<0.05) t.spd.x = 0;
        if(abs(t.spd.y)<0.05) t.spd.y = 0;

        // t.cn==3 && zzfx(...[2,.2,70,.05,.1,.15,4,.8,,.1,,,,.1,.5,0,.3,.5]);
        
        let mp = {c:parseInt((t.x+t.w/2)/32), l:parseInt((t.y+t.h/2)/32)}
        if(t.ice)
            for(let l=-1;l<2;l++)
                for(let c=-1;c<2;c++)
                    change({l:l+mp.l,c:c+mp.c}, new Ice((c+mp.c)*32,(l+mp.l)*32),300);
                
        t.tim.c <= 0 && (t.dea=1); 
        t.tim.c > t.tim.m && (t.tim.c = t.tim.m);
        t.tim.c > 0 && t.tim.c--;
    }
}
class Ball extends Ent
{   constructor(x,y,w,h,a)
    {   super(x,y,w,h);
        this.a = a;
    }
    drw()
    {   let t = this;
        r(t.x,t.y,t.w,t.h,'red');
        for (let i = 0; i < 5; i++) par.push(new Par(t, 'ora'));
    }
    die()
    {   let t = this;
        if(t.CWL())  return 1;
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(t.cld([lvls[clv].boxes[i].box])) return 1;

        for(var i = 0; i<ENE.length; i++)
            if(ENE[i].cld([t]))
            {   ENE[i].lif.c-=100;
                return 1;
            }
    }
    upd()
    {   let t = this;
        t.x += cos(t.a)*10;
        t.y += sin(t.a)*10;

        let mp = {c:parseInt((t.x+t.w/2)/32), l:parseInt((t.y+t.h/2)/32)}
        lvls[clv].map.arr[mp.l][mp.c].constructor.name == "Ice" && change(mp, new flr(mp.c*32,mp.l*32),30);
    }
}
class DBal extends Ball 
{   constructor(x,y,w,h,a)
    {   super(x,y,w,h,a);
        this.x += this.w/2;
    }
    die()
    {   let t = this;
        if(t.CWL())      return 1;
        for(var i=0; i<lvls[clv].boxes.length; i++)
            if(t.cld([lvls[clv].boxes[i].box])) return 1;

        if (pla.cld([t])) {
            pla.tim.c -= 30;
            return 1
        }    
    }
    upd()
    {   let t = this;
        super.drw();
        t.x += cos(t.a)*15;
        t.y += sin(t.a)*15;
        let mp = {c:parseInt((t.x+t.w/2)/32), l:parseInt((t.y+t.h/2)/32)}
        !lvls[clv].map.arr[mp.l][mp.c].uFr && (lvls[clv].map.arr[mp.l][mp.c].uFr = 1);
    }
}
class Met{
    constructor(dtx,dty,w,h,a) {
        let t = this;
        t.dtx = dtx;
        t.dty = dty;
        t.w = w;
        t.h = h;
        t.a = a;
        t.x = cos(a)*(-400)+dtx;
        t.y = sin(a)*(-400)+dty-h;
    }
    upd()
    {   let t = this;
        r(t.x,t.y,t.w,t.h,"rgb(161, 81, 35)");
        for (let i = 0; i < 5; i++) par.push(new Par(t, 'ora'));
        t.x += cos(t.a)*10;
        t.y += sin(t.a)*10;
        bal(t.dtx, t.dty, 50, "rgba(255,0,0,"+(((100*t.y)/t.dty)/5)/100+")");
    }
}

class Box extends Ent 
{   constructor(x,y) 
    {   super(x,y,64,64);
        this.spX = x;
        this.spY = y;
    }
    psh(obj)
    {   let t = this;
        t.spd.x = obj.spd.x, t.spd.y = obj.spd.y;
    }

    drw()
    {   box(this);
    }

    upd()
    {   let t = this;
        t.x += t.spd.x
        t.y += t.spd.y

        t.CWL() && (t.x -= t.spd.x,t.y -= t.spd.y,t.spd.x = 0,t.spd.y = 0);
        
        t.spd.x *= t.fri;
        t.spd.y *= t.fri;
        abs(t.spd.x)<0.05 && (t.spd.x = 0);
        abs(t.spd.y)<0.05 && (t.spd.y = 0);
    }

}
class Ene extends Ent
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        let t = this;
        t.anC = 0;
        t.gra = 0;

        t.spe = 1;
        t.spV = new Vec(0,0);
        t.acV = new Vec(0,0);
        t.sVM = 2;
        t.tVM = 1.25;
        t.r = 50;
        //enemy radius
        t.raE = 50;
        //player radius
        t.raP = 400;
        //player max radius
        t.rPM = 600;
        t.wH = 1;
        t.wHa = 1;
    }
    die()
    {  return this.dea;
    }
    wlk(x,y) 
    {   this.x += x;
        this.y += y;
    }
    upd()
    {   let t = this;
        //animate functions
        //vetor da soma entre todos os inimigos
        let sV = new Vec(0,0);
        //vetor entre o inimigo e o player
        let tV = new Vec(0,0);
        //cn inimigos
        let cn = 0;

        for (let oth of ENE) 
        {   //distancia entre os inimigos
            let d = sqr(((t.x+t.w/2) - (oth.x+oth.w/2))**2 + ((t.y+t.h/2) - (oth.y+oth.h/2))**2);
            //distancia entre o inimigo e o player
            let dp = sqr(((t.x+t.w/2) - (pla.x+pla.w/2))**2 + ((t.y+t.h/2) - (pla.y+pla.h/2))**2);
            //persegue o player caso o player esteja dentro do seu raio de detecção
            if (dp <= t.raP) {
                tV = new Vec((pla.x+pla.w/2) - (t.x+t.w/2), (pla.y+pla.h/2) - (t.y+t.h/2));
                t.raP = t.rPM;
            } else {
                //diminui o raio de detecção após o player sair
                if (t.raP > 150) t.raP -= 0.2;
            }

            if (t != oth && d <= t.raP && (oth.raP > t.raP || t.raP > oth.raP)) oth.raP = t.raP;
            

            if (t != oth && d <= t.raE) 
            {   let v = new Vec((t.x+t.w/2) - (oth.x+oth.w/2), (t.y+t.h/2) - (oth.y+t.h/2));
                cn++;
                sV.sum(v);
            }
            
            cn && sV.div(cn);
            let s1 = sqr((sV.x)**2 + (sV.y)**2);
            s1 && sV.div(s1);
            sV.mtp(t.spe*t.sVM);
            
            let s2 = sqr((tV.x)**2 + (tV.y)**2);
            s2 && tV.div(s2);
            
            tV.mtp(t.spe*t.tVM);
            t.acV.sum(sV);
            t.acV.sum(tV);
            t.spV.sum(t.acV);
            t.spV.lim(t.spe);
            
            dp<28 && (pla.tim.c-=t.dmg, (t.wlk(-t.spV.x, -t.spV.y)));

            t.anC && (t.spV.mtp(0), tV.mtp(0));
            t.d = tV;
            t.spd = tV;
        }

        t.wlk(t.spV.x,t.spV.y);
        t.CWL() && (t.wlk(-t.spV.x, -t.spV.y));   
        for(var i=0; i<lvls[clv].boxes.length; i++)
            t.cld([lvls[clv].boxes[i].box]) && (lvls[clv].boxes[i].box.psh(t, t.d.x, t.d.y), t.wlk(-t.spV.x, -t.spV.y));
        t.acV.mtp(0);

        
        t.spV.x *= t.fri;
        t.spV.y *= t.fri;
        t.spV.x<0.1 && (t.spV.x = 0);
        t.spV.y<0.1 && (t.spV.y = 0);
    }
}
class Min extends Ene
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        let t = this;
        t.lif = {m:100,c:100};
        t.rec = 60;
        t.dmg = .5;
    }
    sid()
    {   let t = this;
        cha(t);
            le1(t, t.cn, zC);
            mov(t);
                bdS(t, '#5C0C0C', '#5C0C0C',1, t.anC);
            res();
            hs2(t, t.cn, zC, 0,0);
            le2(t, t.cn, zC,0);
        res();
    }
    bac()
    {   let t = this;
        HAN(t, t.cn, zC,0);
        leg(t, (t.cn<0 ? 0.8 : (!t.cn ? 1 : 1.2)), (t.cn>0 ? 0.8 : (!t.cn ? 1 : 1.2)), zC,zC,0);
        
        mov(this);
            bdB(this, '#5C0C0C', '#5C0C0C',1);
        res();
    }
    fro()
    {   let t = this;
        mov(t);
            bdB(t, '#5C0C0C', '#5C0C0C',1);
            ZhF(t, t.anC);
        res();
        HAN(t, t.cn, zC,0);
        leg(t, (t.cn<0 ? 0.8 : (!t.cn ? 1 : 1.2)), (t.cn>0 ? 0.8 : (!t.cn ? 1 : 1.2)), zC,zC,0);
    }
    lfB()
    {   let t = this;
        if(t.y-0.5+t.h/2+1+t.anC > t.y+t.h) t.dea = 1, pla.tim.c+=t.rec, enC++;
        if(t.lif.c<=0)
        {   t.gra += 0.25;
            t.anC += t.gra;
            for (let i = 0; i < 5; i++) par.push(new Par(t, 'red'));
            blo.push(new Blo(t));
            zzfx(...[,,31,.04,.1,.71,4,.1,5,6,,,,1.1,,1,,.35,.25,.19]);
        }
        else
        {   lB(t, wh,t.h/4,3,3,0);
            lB(t, 'red',t.h/4,3,3,1);
        } 
    }
}
//currepted
class Cur extends Ene
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        let t = this;
        t.lif = {m:200,c:200};
        t.spd.x = 0;
        t.rec = pla.tim.m;
        t.dmg = 1;
    }
    sid()
    {   let t = this;
        cha(t);
            le1(t, t.cn, zC);
            hs1(t, t.cn, zC);
            mov(t);
                heS(t,1);
                bdS(t, '#5C0C0C', '#B40F0F',0, t.anC);
            res();
            //swo(t, t.x+t.w*2/4, t.cn, 0,'#4E4E50');
            hs2(t, t.cn, wh, 0,1);
            le2(t, t.cn, wh,1);
        res();
    }
    bac()
    {   let t = this;
        //swo(t, t.x, -t.cn, 0,'#4E4E50');
        han(t, t.cn, t.w*3/4,0,zC,0);
        han(t,-t.cn, 0,0,wh,1);
        leg(t, (t.cn<0 ? 0.8 : (!t.cn ? 1 : 1.2)), (t.cn>0 ? 0.8 : (!t.cn ? 1 : 1.2)), wh,zC,0);

        mov(t);
            heB(t,1);
            bdB(t, '#5C0C0C', '#B40F0F',0);
        res();
    }
    fro()
    {   let t = this;
        mov(t);
            bdB(t, '#5C0C0C', '#5C0C0C',1);
            heF(t, t.anC);
            cHe(t, t.anC);
            siJ(t, '#B40F0F')
        res();
        // HAN(this, this.cn, zC);
        han(t, t.cn, t.w*3/4,0,wh,1);
        han(t,-t.cn, 0,0,zC,0);
        //swo(t, t.x+t.w*3/4, t.cn, 0, '#4E4E50');    
        leg(t, (t.cn<0 ? 0.8 : (!t.cn ? 1 : 1.2)), (t.cn>0 ? 0.8 : (!t.cn ? 1 : 1.2)), zC,wh,1);
    }
    lfB()
    {   let t = this;
        if(t.y-0.5+t.h/2+1+t.anC > t.y+t.h) t.dea = 1, pla.tim.c+=t.rec;
        if(t.lif.c<=0)
        {   t.gra += 0.25;
            t.anC += t.gra;
            for (let i = 0; i < 5; i++) par.push(new Par(t, 'red'));
            blo.push(new Blo(t));
            zzfx(...[,,31,.04,.1,.71,4,.1,5,6,,,,1.1,,1,,.35,.25,.19]);
        }
        else
        {   lB(t, wh,t.h/1.3,5,3,0);
            lB(t, 'red',t.h/1.3,5,3,1);
        } 
    }
}
class Dre extends Ene
{   constructor(x,y,w,h)
    {   super(x,y,w,h);
        let t = this;
        t.lif = {m:5000,c:5000};
        t.spd.x = 1;
        t.sVM *= -1;
        t.tVM *= -1;
        //teleport tile
        t.tpt = []
        //teleport clock
        t.tpc = {c:0, m:30*5};
        t.tpc.c = t.tpc.m;
        //attack stuff
        t.ats = [new Atk("Frb", 2, false, 0.5),
                    new Atk("Ice", 6, false),
                    new Atk("Mtr", 5, false, 0.5),
        ]; //Fireball, Wall, Ice, Meteor, Aura.
        //fireball array
        t.bal = [];
        //meteor tile
        t.mtT = [];
        //meteor array
        t.mtr = [];

    }
    sid()
    {   let t = this;
        cha(t);
            gaS(t,t.cn);
            tra(0,t.cn/8)    
                Dbd(t, 1);
                spk(t,0);
                spk(t,t.w/3);
                spk(t,t.w/1.6);
            tra(0,-t.cn/8)    
            stf(t, t.cn/5);
            hs2(t, t.cn/5,blk, 0,0);
        res();
        for (let i = 0; i < 10; i++) par.push(new Par(t, 'bla'));
    }
    fro()
    {   let t = this;
        tra(0,t.cn/8);
            DFb(t, t.cn);
            DFh(t, t.cn);
        tra(0,-t.cn/8);
        HAN(t, t.cn, blk,0);
        stf(t, t.cn);
        gau(t, t.cn, 0);
        for (let i = 0; i < 10; i++) par.push(new Par(t, 'bla'));
    }
    bac()
    {   let t = this;
        stf(t, -t.cn,1);
        HAN(t, t.cn, blk,0);
        gau(t, -t.cn, t.w*3/4);
        tra(0,t.cn/8)    
            Dbd(t, 0, 1);
            spk(t,0);
            spk(t,t.w/3);
            spk(t,t.w/1.6);
        tra(0,-t.cn/8)   
        for (let i = 0; i < 10; i++) par.push(new Par(t, 'bla'));
    }
    lfB()
    {   let t = this;
        if(t.y-0.5+t.h/2+1+t.anC > t.y+t.h) t.dea = 1;
        if(t.lif.c<=0)
        {   t.gra += 0.25;
            t.anC += t.gra;
            for (let i = 0; i < 5; i++) par.push(new Par(t, 'red'));
            blo.push(new Blo(t));
        }
        else {
            lB(t, wh,t.h/1.5,5,4,0);
            lB(t, 'purple',t.h/1.5,5,4,1);
        } 
    }
    tlp() {
        let t = this;
        t.tpt = [];
        sgr("flr", lvls[clv].map.arr, t.tpt);
        var chs = t.tpt[parseInt(Math.random()*(t.tpt.length))];
        t.x = chs.x-t.w/2;
        t.y = chs.y-t.h/2;
        let dp = sqr(((t.x+t.w/2) - (pla.x+pla.w/2))**2 + ((t.y+t.h/2) - (pla.y+pla.h/2))**2);
        (t.CWL() || chs.x == undefined || chs.y == undefined || (dp < 250 || dp > 700)) && t.tlp();
    }
    raG() {
        let t = this;
        let slA = Math.floor(Math.random()*(t.ats.length));
        switch (t.ats[slA].nam) {
            case "Frb":
                t.ats[0].act = true;
                t.ats[0].tmr.c = t.ats[0].tmr.m;
                t.ats[0].atm.c = t.ats[0].atm.m;
                adT("Die!;", "purple", 100);
                break;
            case "Ice":
                t.ats[1].act = true;
                t.ats[1].tmr.c = t.ats[1].tmr.m;
                adT("Freeze, insect!;", "purple", 100);
                break;        
            case "Mtr":
                t.ats[2].act = true;
                t.ats[2].tmr.c = t.ats[2].tmr.m;
                t.ats[2].atm.c = t.ats[2].atm.m;
                sgr("flr", lvls[clv].map.arr, t.mtT);
                adT("Behold the heaven's wrath!;", "purple", 100);
                break;  
        }
    }
    //set fireball
    sFb() {
        let t = this;
        t.ats[0].tmr.c--;
        t.ats[0].atm.c--;
        var ang = Math.atan2(pla.y - (t.y), pla.x - (t.x+t.w/2))
        !t.ats[0].atm.c && (t.bal.push(new DBal(t.x, t.y, 40, 40, ang)), t.ats[0].atm.c = t.ats[0].atm.m);
        !t.ats[0].tmr.c && (t.ats[0].act = false);
    }
    //set ice
    sIc() {
        let t = this;
        t.ats[1].tmr.c--;
        !t.ats[1].tmr.c && (t.ats[1].act = false, pla.ice = 0);
    }
    //set meteor
    sMt() {
        let t = this;
        t.ats[2].tmr.c--;
        t.ats[2].atm.c--;
        var chs = t.mtT[parseInt(Math.random()*(t.mtT.length))];
        !t.ats[2].atm.c && (t.mtr.push(new Met(chs.x, chs.y, 40, 40, 135*Math.PI/180)), t.ats[2].atm.c = t.ats[2].atm.m);
        !t.ats[2].tmr.c && (t.ats[2].act = false, t.mtT = []);
    }
    upd() {
        let t = this;
        t.tpc.c > 0 ? t.tpc.c-- : (t.tpc.c = t.tpc.m, t.raG(), t.tlp());
        super.upd();
        t.ats[0].act && (t.sFb());
        t.ats[1].act && (pla.ice = 1, t.sIc());
        t.ats[2].act && (t.sMt());
        for (let i = 0; i < t.mtr.length; i++) {
            t.mtr[i].upd();
            if (t.mtr[i].y+t.mtr[i].h/2 >= t.mtr[i].dty || t.mtr.x <= t.mtr[i].dtx) t.mtr.splice(i,1), i--;
        }
        upT(t.bal)
    }
}