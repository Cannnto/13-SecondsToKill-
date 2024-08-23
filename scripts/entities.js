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

        this.d = {x: 0, y: 0};
        this.spd = {x: 0, y: 0};
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
        return false;
    }
    upd()
    {   this.mpa = {c:parseInt((this.x+this.w/2+((this.spd.x-0.1)/(abs(this.spd.x-0.1)))*16)/32), l:parseInt((this.y+this.h/2+((this.spd.y-0.1)/(abs(this.spd.y-0.1)))*16)/32)};
        if(map.arr[this.mpa.l][this.mpa.c].constructor.name == 'Wal') return true;


    }
}
class Pla extends Ent
{   constructor(x,y,w,h)
    {   super(x,y,w,h)
        this.atC = 0;
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
    atk()
    {   if(this.atC>-90)this.atC-=10;
        for(var i = 0; i<ENE.length; i++)
        {   if(ENE[i].cld([{x:this.x + 40*this.d.x, y:this.y + 60*this.d.y-this.h/2, w:this.h, h:this.w*1.5}]))
               if(ENE[i].die)ENE.splice(ENE.indexOf(ENE[i]),1);
        }
    }
    move(u)
    {   eval(`this.x ${u}= this.spd.x*abs(this.spd.x/this.len, this.y ${u}= this.spd.y*abs(this.spd.y/this.len))`);
    }
    upd()
    {   paU();

        this.len = this.spd.x||this.spd.y ? Math.sqrt(this.spd.x**2+this.spd.y**2) : 1;
        this.move('+');
        
        if(super.upd())this.move('-');
        if(this.cld([box])) box.psh(this, this.d.x, this.d.y), this.move('-');

        //r(this.x + 40*this.d.x, this.y + 60*this.d.y, this.w, this.h,"black");
        this.spd.x = 0;
        this.spd.y = 0;
        

    }
}
class Box extends Ent 
{   constructor(x,y) {
    super(x,y,64,64);
}
    psh(obj){
        // console.log(Math.round(x),Math.round(y));
        // let ang = (Math.atan2((this.y+this.h/2) - box.y, (this.x+this.w/2) - box.x));
        // console.log(Math.round(Math.cos(ang)), Math.round(Math.sin(ang)))
        
        // let blx = (obj.x+32>=this.x) || (obj.x+32<=this.x);
        // let bly = (obj.y+32>=this.y) || (obj.y+32<=this.y);
        
        if (abs(obj.spd.x) != abs(obj.spd.y)) this.x += obj.spd.x, this.y += obj.spd.y;
        if(super.upd())  this.x -= obj.spd.x, this.y -= obj.spd.y;
    }

    dra(){
        r(this.x, this.y, this.w, this.h, 'red');
    }
}

class Min extends Ent
{   constructor(x,y,w,h) {
        super(x,y,w,h);
        this.lif = 100;
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
                bdS(this, '#5C0C0C', '#5C0C0C',1);
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
            ZhF(this);
        res();
        HAN(this, this.cnt, '#3A4A13');
        leg(this, (this.cnt<0 ? 0.8 : (!this.cnt ? 1 : 1.2)), (this.cnt>0 ? 0.8 : (!this.cnt ? 1 : 1.2)), '#3A4A13');
    }
    die()
    {   this.lif-=100;
        if(this.lif<=0) return true;
        return false;
    }
    wlk(x,y) 
    {   this.x += x;
        this.y += y;
    }
    upd()
    {   //vetor da soma entre todos os inimigos
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

            if (this != oth && d <= this.raP && (oth.raP > this.raP || this.raP > oth.raP)) 
                oth.raP = this.raP;
            

            if (this != oth && d <= this.raE) 
            {   let v = new Vec((this.x+this.w/2) - (oth.x+oth.w/2), (this.y+this.h/2) - (oth.y+this.h/2));
                cnt++;
                sV.sum(v);
            }
            
            if (cnt > 0) sV.div(cnt);
            let s1 = Math.sqrt(Math.pow(sV.x, 2) + Math.pow(sV.y, 2));
            if (s1 > 0) sV.div(s1);
            sV.mtp(this.spe*2);
            
            let s2 = Math.sqrt(Math.pow(tV.x, 2) + Math.pow(tV.y, 2));
            if (s2 > 0) tV.div(s2);
            
            tV.mtp(this.spe*0.8);
            this.acV.sum(sV);
            this.acV.sum(tV);
            this.spV.sum(this.acV);
            this.spV.lim(this.spe);

            this.d.x = tV.x;
            this.d.y = tV.y;
            this.spd.x = tV.x;
            this.spd.y = tV.y;
        }

        this.wlk(this.spV.x,this.spV.y);
        if(super.upd()) this.wlk(-this.spV.x, -this.spV.y);   
        if(this.cld([box])) box.psh(this, this.d.x, this.d.y), this.wlk(-this.spV.x, -this.spV.y);

        this.acV.mtp(0);
        this.spV.mtp(0);
    }
}