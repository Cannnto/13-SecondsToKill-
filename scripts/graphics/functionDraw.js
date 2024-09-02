var zC = '#3A4A13';

function mov(e)
{   sav();
    tra(e.x+e.w/2, e.y+e.h/2);
    rtt(e.cnt*Math.PI/180);
    tra(-(e.x+e.w/2), -(e.y+e.h/2));
}
//change direction
function cha(e)
{   sav();
    if(e.c)
    {   tra(e.x+e.w/2, e.y+e.h/2);
        scl(-1,1);
        tra(-(e.x+e.w/2), -(e.y+e.h/2));
    }
}
//rotate 
function RTT(e,c)
{   sav();
        tra(e.x+e.w/2, e.y+e.h/2);
        rtt(c*Math.PI/180);
        tra(-(e.x+e.w/2), -(e.y+e.h/2));
}
//scale
function SCL(e,s)
{   sav();
        tra(e.x+e.w/2, e.y+e.h/2);
        scl(s,s);
        tra(-(e.x+e.w/2), -(e.y+e.h/2));
}


function hed(e){r(e.x + e.w/4, e.y - e.h/2, e.w/2, e.h/2, 'white')};
function pnt(e, color){r(e.x + e.w*0.5/4, e.y+e.h*2.5/4, e.w*3/4, e.h/4, '#055769')};
function shr(e, color){r(e.x + e.w*0.5/4, e.y, e.w*3/4, e.h*1.25/2, color)}
function eye(e, xa, ya, c, color){r(e.x + e.w*xa, e.y - e.h*ya+c, e.w/8, e.h*1.3/8, color)};
function heZ(e,c)
{   r(e.x + e.w/4-0.5, e.y-0.5+c, e.w/2+1, e.h/2+1, 'black');
    r(e.x + e.w*2/8, e.y+c, e.w*3/8, e.h/2, zC);
    r(e.x + e.w*5/8-1, e.y+e.h/8+c, e.w/8+1, e.h*1.5/4, zC);
}
//------------------Side-----------------    
    //headSide
    function heS(e,b)
    {   hed(e);
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*4/8, e.h*0.75/8+1, '#D9D9D9');
        r(e.x + e.w*2/8, e.y - e.h*3.25/8, e.w*3/8, e.h/16+1);
        r(e.x + e.w*2/8, e.y - e.h*2.75/8, e.w/8, e.h/8+1);
        r(e.x + e.w*2.5/4, e.y - e.h*2.35/8, e.w/8, e.h*1.3/8, 'black');

        r(e.x + e.w/4, e.y - e.h/2, e.w/2*b, e.h/10*b, 'red');
        r(e.x + e.w/4, e.y - e.h/2, e.w/13*b, e.h/4*b, 'red');
        r(e.x + e.w/3.3, e.y - e.h/2, e.w/13*b, e.h/6*b, 'red');
        r(e.x + e.w/1.7, e.y - e.h/2, e.w/13*b, e.h/4*b, 'red');
    }
    //HandLeg1Side
    function le1(e, c, cor)
    {   let b = {x:e.x + e.w*0.75/4, y:e.y + e.h*3/4, w:(e.w*1.25/4)*2, h:-(e.h/4)*2}
        RTT(b,c*-5)
            r(b.x, b.y, b.w/2, -b.h/2, cor);
        res();
    }
    function hs1(e,c,cor){r(e.x + e.w*3/4 + c, e.y, e.w/4, e.h/4, cor)};
    function geS(e,c,y,cor){r(e.x + e.w*4.15/4 - e.w/14 +c, e.y + e.h*y/7, e.w/14, e.h/14,cor)};
    function gaS(e,c)
    {   r(e.x + e.w*3/4 + c, e.y, e.w/3.5, e.h/3.5, '#D5A83E');
        r(e.x + e.w*4.15/4 - e.w/7+c, e.y + e.h*1/3.5-e.h/14, e.w/7, e.h/14, '#91672A');
        geS(e,c,0,'#0000FF');
        geS(e,c,0.1,'#FF0000');
        geS(e,c,0.2,'#00FF00');
    };
    //HandLegs2Side
    function hs2(e, c, cor, at, b)
    {   let a = {x:e.x + e.w*2/4, y:e.y + e.h*0.5/4-c, w:-(e.w/4)*2, h:-(e.h/4)*2};
        RTT(a, c*-10+at);
            r(a.x, a.y, -a.w/2, -a.h/2, cor);
            r(a.x-a.w/2/10, a.y, -a.w/2/1.3*b, -a.h/2/4*b, 'red');
            r(a.x-a.w/2/4, a.y, -a.w/2/4*b, -a.h/2*b, 'red');
        res();
    }
    function le2(e,c,cor,b){
        let a = {x: e.x + e.w*2/4, y: e.y + e.h*3/4, w:-(e.w*1.25/4)*2, h:-(e.h/4)*2};
        RTT(a, c*5);
            r(a.x, a.y, -a.w/2, -a.h/2, cor);
            r(a.x-a.w/4, a.y, -a.w/2/2*b, -a.h/2/4*b, 'red');
            r(a.x-a.w/2.70, a.y, -a.w/2/4*b, -a.h/2/1.5*b, 'red');
        res();
    }
    //bodySide
    function bdS(e, coS, coB, z, an)
    {   var a ={x: e.x + e.w*0.30/4, y:e.y, w:e.w*3.4/4, h: e.h};
        shr(a,coS);
        if(z)   r(e.x + e.w*3/4-0.5, e.y-0.5+an, e.w/4+1, e.h/2+1, 'black'), r(e.x + e.w*3/4, e.y+an, e.w/4, e.h/2, zC), eye(e, 7/8, -1.35/8, an,'red');
        if(!z)  r(e.x + e.w*3.25/4, e.y- e.h*0.1/2, 2, e.h*1.2/2, '#D9D9D9');
        r(e.x + e.w*0.75/4-0.5, e.y- e.h*0.1/2-0.5, e.w*2.5/4+1, e.h*1.2/2+1, 'black');
        r(e.x + e.w*0.75/4, e.y- e.h*0.1/2, e.w*2.5/4, e.h*1.2/2, coB);
        pnt(a);
    }
//-----------------Back------------------
    //headBac
    function heB(e,b)
    {   hed(e);
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*4/8, e.h*2.25/8, '#D9D9D9');
        r(e.x + e.w*4/8-1, e.y - e.h*4/8-1, (e.w*2/8+2)*b, (e.h*4/8+2)*b, zC);
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*1/16*b, e.h*2/8*b, 'red');
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*2/16*b, e.h*1/12*b, 'red');
    }
    //bodyBack
    function bdB(e,coS,coB,b)
    {   shr(e,coS);

        r(e.x + e.w*0.5/4-0.5, e.y - e.h*0.1/2-0.5, e.w*3/4/2+1, e.h*1.2/2+1, 'black');      
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2, e.w*3/4/2, e.h*1.2/2, coB);

        r(e.x + e.w*0.5/4-0.5, e.y - e.h*0.1/2-0.5, (e.w*3/4+1)*b, (e.h*1.2/2+1)*b, 'black');      
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2, e.w*3/4*b, e.h*1.2/2*b, coB);
        pnt(e);
    }
//--------------Front-------------------
    //head
    function heF(e)
    {   hed(e);
        eye(e, 2.75/8, 2.35/8, 0,'black');
        eye(e, 4.25/8, 2.35/8, 0,'black');
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*4/8, e.h*0.75/8, '#D9D9D9');
        r(e.x + e.w*5/8, e.y - e.h*3.25/8, e.w/8, e.h/16);
        r(e.x + e.w*2/8, e.y - e.h*3.25/8, e.w/8, e.h/16);
    }
    function cHe(e)
    {   r(e.x + e.w/4-1, e.y - e.h/2-1, e.w/4+2, e.h/2+2, zC);
        r(e.x + e.w*2.4/8, e.y - e.h*2.9/8, e.w/6, e.h*1.5/8,'red');
        r(e.x + e.w*3/4-e.w/16, e.y - e.h/2, e.w/16, e.h/4, 'red');
        r(e.x + e.w*3/4-e.w/8, e.y - e.h/2, e.w/8, e.h/16, 'red');
    }
    function ZhF(e, c)
    {   heZ(e,c);
        eye(e, 2.75/8, -1.35/8, c,'red');
        eye(e, 4.25/8, -1.35/8, c,'red');
    }
    function bdF(e)
    {   shr(e,'#6F6F6F');
        let a = {w:e.w/4, h:e.h*1.2/2, y:e.h*0.1/2};
        r(e.x + e.w*0.5/4, e.y - a.y-0.5, a.w+1, a.h+1,'black');
        r(e.x + e.w*0.5/4, e.y - a.y, a.w, a.h, '#424242');
        r(e.x + e.w/3, e.y - a.y, 2, a.h, '#D9D9D9');
        siJ(e,'#424242');
        pnt(e);    
    }
    //side jacket
    function siJ(e,c1)
    {   let a = {w:e.w/4, h:e.h*1.2/2, y:e.h*0.1/2};
        r(e.x + e.w*2.5/4-1, e.y - a.y-0.5, a.w+1, a.h+1,'black');
        r(e.x + e.w*2.5/4, e.y - a.y, a.w, a.h, c1);
        r(e.x + e.w*2/3-2, e.y - a.y, 2, a.h, '#D9D9D9');
    }
    
    function han(e,c,x,at,cor,b)
    {   r(e.x + x, e.y + e.h*0.5/4-c+at/4, e.w/4, e.h/4, cor);
        r(e.x + x, e.y + e.h*0.5/4-c+at/4, e.w/16*b, e.h/8*b, 'red');
        r(e.x + x+e.w*3/16, e.y + e.h*0.5/4-c+at/4, e.w/16*b, e.h/4.5*b, 'red');
    }
    function gem(e,c,x,co){r(e.x+x, e.y + e.h*0.35/3.5-c, e.w/14, e.h/14,co)};
    function gau(e,c,x)
    {   //gold
        r(e.x+x, e.y + e.h*0.35/3.5+c, e.w/3.5, e.h/3.5, '#D5A83E');
        gem(e,-c,0.5+x,'#0000FF');
        gem(e,-c,3.5+x,'#FF0000');
        gem(e,-c,6.5+x,'#0000FF');
        if(!(e.a == e.bac)) r(e.x+e.w/7+x, e.y + e.h*1.1/3.5+c, e.w/7, e.h/14, '#91672A'), gem(e,-c,6.5+x,'#00FF00');;
        //prata
        //r(e.x+x, e.y + e.h*0.35/3.5+c, e.w/3.5, e.h/3.5, '#C0C0C0');
        //r(e.x+e.w/7+x, e.y + e.h*1.1/3.5+c, e.w/7, e.h/14, '#636363');
        //aço
        //r(e.x+x, e.y + e.h*0.35/3.5+c, e.w/3.5, e.h/3.5, '#46464b');
        //r(e.x+e.w/7+x, e.y + e.h*1.1/3.5+c, e.w/7, e.h/14, '#DBDBEB');
        //carmezin
        // r(e.x+x, e.y + e.h*0.35/3.5+c, e.w/3.5, e.h/3.5, '#dc143c');
        // r(e.x+e.w/7+x, e.y + e.h*1.1/3.5+c, e.w/7, e.h/14, '#481718');        
    }
//-------------
    function HAN(e, c, cor,b)
    {   han(e,-c, 0,0,cor,0);
        
        han(e, c, e.w*3/4,0,cor,b);
    };
    function leg(e, cl, cr, c1,c2,b)
    {   let bl = {x:e.x + e.w*0.5/4, y:e.y + e.h*3/4, w:e.w*1.25/4, h:-(e.h/4)*2}
        let br = {x: e.x + e.w*2.25/4, y: bl.y, w: bl.w, h: bl.h};
    
        SCL(bl, cl);
        r(bl.x, bl.y, bl.w, -bl.h/2, c1);
        res();
        
        SCL(br, cr);
        r(br.x, br.y, br.w, -br.h/2, c2);
        r(br.x, br.y, br.w/6*b, -br.h/3*b, 'red');
        r(br.x, br.y, br.w/1.5*b, -br.h/12*b, 'red');
        r(br.x, br.y, br.w/3*b, -br.h/6*b, 'red');
        res();
    };
//----sword draw----
    function swo(e,x,c,at,cor)
    {   let b = {x:e.x + e.w*2/4, y:e.y + e.h*0.5/4, w:-(e.w/4)*2, h:-(e.h/4)*2};
        var s = 0;
        if(e.a!=e.sid)  s=at/4;
        if(e.a==e.sid)  RTT(b, c*-10+at); 
            r(x - 2.5, e.y+e.h/16-c +s, e.w/4+5, e.h/16, 'black');
            r(x + e.w/10, e.y+e.h*0.5/4-c +s, e.w/16, e.h/4, '#552A18');
            r(x + e.w/16, e.y+e.h*1.5/4-c +s, e.w/8, e.h/8, '#6F6F6F');
            ctx.fillStyle = cor;
            bP();
                mT(x + e.w/24, e.y-e.h*4/8+0.5-c+s);
                lT(x + e.w/8, e.y-e.h*6/8+0.5-c+s);
                lT(x + e.w/4.8, e.y-e.h*4/8+0.5-c+s);
            cP();
            ctx.fill();
            r(x+e.w/24, e.y-e.h/2-c+s, e.w/6, e.h*9/16, cor);

        var a = (c*-0*Math.PI/180)
        if(e.a==e.sid)   res(), a = ((c*-10+at)*Math.PI/180);
        
        let bl1 = {x:(x+e.w/24),y:(e.y-e.h/2 - c)+20*sin(a),w:e.w/6,h:e.h*9/16};
        let bl2 = {x:(x+e.w/24)-e.h*5.1/8,y:(e.y-e.h/2 - c)+5*sin(a),w:bl1.h, h:bl1.w}; 
        if(e.c) bl1.x-=15, bl2.x+=bl2.w+5;
        let bl = bl1;
        if(a*180/Math.PI<-45)   bl = bl2;

        // r(bl1.x,bl1.y,bl1.w,bl1.h, 'purple')
        // r(bl2.x,bl2.y,bl2.w,bl2.h,'purple')
        //for (let i = 0; i < 5; i++) par.push(new Par(bl, 'ora'));
    }
    function sla(e)
    {   ctx.fillStyle = 'red';
        RTT(e, ang*180/Math.PI);
            bP();
                mT(e.x, e.y);
                lT(e.x + e.w/2, e.y + e.h/6);
                lT(e.x + e.w, e.y + e.h/2);
                lT(e.x + e.w/2, e.y + e.h/1.2);
                lT(e.x, e.y + e.h);
                lT(e.x+ e.w/3, e.y + e.h/1.3);
                lT(e.x+ e.w/2, e.y + e.h/2);
                lT(e.x+ e.w/3, e.y + e.h/4);
            cP();
        res();
        ctx.fill();
    }
//box
    function box(e)
    {   let a = {x:e.x+e.w/2-e.w/16, y:e.y+e.w/3-6, w: e.w/8, h: e.h};
        let b = {x:e.x+e.w/2-e.w/16, y:e.y-7.5, w: e.w/16, h: e.h/1.2};
        let li = '#E29628', mli = '#B5701D';
        r(e.x, e.y, e.w, e.h, '#995F12');
        RTT(a,-60);
            r(a.x,a.y,a.w,a.h, mli);
        res();
        RTT(b,82);
            r(b.x,b.y,b.w,b.h, mli);
        res();
        // r(e.x,e.y,e.w,e.h/4, '#806D4D');
        r(e.x+1,e.y+1,e.w/8-2,e.h-2, li);
        r(e.x+1,e.y+1,e.w-2,e.h/12-2, li);
        r(e.x+1,e.y+e.h/4+1,e.w-2,e.h/8-2, li);
        r(e.x+1+e.w*0.875,e.y+1,e.w/8-2,e.h-2, li);
        r(e.x+1,e.y+e.h*0.875+1,e.w-2,e.h/8-2, li);
    }
    function btn(e, cor)
    {   eli(e.x+e.w/2, e.y+e.h/8, e.w/3, e.h/8, 0, cor);
        eli(e.x+e.w/2, e.y+e.h/1.2, e.w/2.5, e.h/5, 0, 'gray');
        eli(e.x+e.w/2, e.y+e.h/1.2, e.w/3, e.h/8, 0, cor);
        r(e.x+e.w/6, e.y+e.h/8, e.w/1.5, e.h/1.5, cor);
    }
    function spw(e)
    {   //r(e.x,e.y,e.w,e.h,'red');
        r(e.x+e.w/8,e.y+e.h/8,e.w*0.75,e.h*0.75,'#C6C6C8');
        r(e.x+e.w/8,e.y+e.h/8,e.w*0.75/8,e.h*0.75,'red');
        r(e.x+e.w/8,e.y+e.h/8,e.w*0.75/4,e.h*0.75/2.5,'red');
        r(e.x+e.w*0.05,e.y+e.h/1.5,e.w*0.9,e.h/4,'#D9D9D9');
    }
    function sgn(e)
    {   r(e.x,e.y,e.w,e.h/1.75,'#7C653C');
        r(e.x+e.w/2.2,e.y,e.w/8,e.h,'#7C653C');
        r(e.x+e.w*0.1,e.y+e.h/1.75*0.5/4,e.w*0.8,e.h/3/4,'#574220');
        r(e.x+e.w*0.1,e.y+e.h/1.75*1.75/4,e.w*0.8,e.h/3/4,'#574220');
        r(e.x+e.w*0.1,e.y+e.h/1.75*3/4,e.w*0.8,e.h/3/4,'#574220');
    }
    function int(e)
    {   ctx.font = `${e.w/2}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('[E]', e.x+e.w/2, e.y-e.h/4);
    }