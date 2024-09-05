function upT(e)
{   for (let i = 0; i < e.length; i++)
    {   e[i].upd();
        if (e[i].die()) e.splice(i, 1);
    }
}

class Par 
{   constructor(e, c) 
    { this.x = e.x+rng()*e.w;
      this.y = e.y+rng()*e.h;
      this.vx = -1+rng()*2;
      this.vy = -5+rng()*4;
      this.a = 1;
      this.r = 3;
      this.w = e.w;
      this.h = e.h;
      this.cor = c;
      this.e = e;
      // this.life=0;
      // this.max = 60;
    }

    die(){return this.a<0}
    upd() {
      this.x += this.vx;
      this.y += this.vy*(1-rev*2);
      this.a -= 0.03;
      if(this.r>1) this.r -= 0.05+rng()*0.05;
    }
  
    drw()
    { switch (this.cor)
      { case 'red': this.drw = function(){bal(this.x, this.y, this.r, `rgba(${100+rng()*155}, 10, ${10}, ${this.a})`)}
        break;
        case 'ora': this.drw = function(){bal(this.x, this.y, this.r, `rgba(${200+rng()*30}, ${50+rng()*100}, ${10}, ${this.a})`)}
        break;
        case 'pur': this.y=this.e.y+this.e.h;
          this.drw = function(){bal(this.x, this.y, this.r, `rgba(${60+rng()*200}, ${rng()*115}, 255, ${this.a})`)}
        break;
        case 'bla': this.y=this.e.y+this.e.h;
          this.drw = function(){bal(this.x, this.y, this.r, `rgba(${rng()*10}, ${rng()*10}, ${rng()*10}, ${this.a})`)}
        break;
        case 'blu': this.y=this.e.y+this.e.h;
          this.drw = function(){bal(this.x, this.y, this.r, `rgba(${10}, ${50+Math.random()*100}, ${200+Math.random()*30}, ${this.a})`)}
        break;
        case 'gre': this.y=this.e.y+this.e.h;
          this.drw = function(){bal(this.x, this.y, this.r, `rgba(${0+Math.random()*50}, ${100+Math.random()*255}, ${0+Math.random()*50}, ${this.a})`)}
        break;
      } 
      // SCL(this,0.5)
      // ctx.fillStyle = "rgba("+(260-(this.life*2))+","+((this.life*2)+50)+","+(this.life*2)+","+(((this.max-this.life)/this.max)*0.4)+")";
      //blue
      //bal(this.x,this.y,this.r,`rgba(${10}, ${50+Math.random()*100}, ${200+Math.random()*30}, ${this.a})`)
      //red
      //bal(this.x,this.y,this.r,`rgba(${200+rng()*30}, ${50+rng()*100}, ${10}, ${this.a})`)
      //green
      //bal(this.x,this.y,this.r,`rgba(${50+rng()*100}, ${200+rng()*30}, ${10}, ${this.a})`)
      //rainbow
      //bal(this.x,this.y,this.r,`rgba(${rng()*255}, ${rng()*255}, ${rng()*255}, ${this.a})`)
      // res();
    };
  }
class Blo
{ constructor(e)
  { this.x = e.x+rng()*e.w;
    this.y = e.y+rng()*e.h;
    this.r = rng()*7.5;
    this.c = `rgb(${100+rng()*155}, 10, ${10})`;
  }
  drw()
  { bal(this.x, this.y, this.r, this.c);
  }
}