function paU()
{   for (let i = par.length - 1; i >= 0; i--)
    {   par[i].upd();
        par[i].dra();
        if (par[i].a<0) 
            par.splice(i, 1);
    }
}


class Particle {
    constructor(x,y,w,h) {
      this.x = x+rng()*w;
      this.y = y+rng()*h;
      this.vx = -1+rng()*2;
      this.vy = -5+rng()*4;
      this.a = 1;
      this.r = 3;
      this.w = w;
      this.h = h;

      // this.life=0;
      // this.max = 60;
    }

    upd() {
      this.x += this.vx;
      this.y += this.vy;
      this.a -= 0.03;
      if(this.r>1) this.r -= 0.05+rng()*0.05;
    }
  
    dra(){
      // SCL(this,0.5)
      // ctx.fillStyle = "rgba("+(260-(this.life*2))+","+((this.life*2)+50)+","+(this.life*2)+","+(((this.max-this.life)/this.max)*0.4)+")";
      //blue
      //bal(this.x,this.y,this.r,`rgba(${10}, ${50+Math.random()*100}, ${200+Math.random()*30}, ${this.a})`)
      //red
      bal(this.x,this.y,this.r,`rgba(${200+rng()*30}, ${50+rng()*100}, ${10}, ${this.a})`)
      //green
      //bal(this.x,this.y,this.r,`rgba(${50+rng()*100}, ${200+rng()*30}, ${10}, ${this.a})`)
      //rainbow
      //bal(this.x,this.y,this.r,`rgba(${rng()*255}, ${rng()*255}, ${rng()*255}, ${this.a})`)
      // res();
    };
  }