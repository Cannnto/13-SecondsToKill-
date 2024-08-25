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
    r(e.x + e.w*2/8, e.y+c, e.w*3/8, e.h/2, '#3A4A13');
    r(e.x + e.w*5/8-1, e.y+e.h/8+c, e.w/8+1, e.h*1.5/4, '#3A4A13');
}
//------------------Side-----------------    
    //headSide
    function heS(e)
    {   hed(e);
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*4/8, e.h*0.75/8+1, '#D9D9D9');
        r(e.x + e.w*2/8, e.y - e.h*3.25/8, e.w*3/8, e.h/16+1);
        r(e.x + e.w*2/8, e.y - e.h*2.75/8, e.w/8, e.h/8+1);
        r(e.x + e.w*2.5/4, e.y - e.h*2.35/8, e.w/8, e.h*1.3/8, 'black');
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
    function hs2(e, c, cor, at)
    {   let b = {x:e.x + e.w*2/4, y:e.y + e.h*0.5/4-c, w:-(e.w/4)*2, h:-(e.h/4)*2};
        RTT(b, c*-10+at);
            r(b.x, b.y, -b.w/2, -b.h/2, cor);
        res();
    }
    function le2(e,c,cor){
        let b = {x: e.x + e.w*2/4, y: e.y + e.h*3/4, w:-(e.w*1.25/4)*2, h:-(e.h/4)*2};
        RTT(b, c*5);
            r(b.x, b.y, -b.w/2, -b.h/2, cor);
        res();
    }
    //bodySide
    function bdS(e, coS, coB, z, an)
    {   var a ={x: e.x + e.w*0.30/4, y:e.y, w:e.w*3.4/4, h: e.h};
        shr(a,coS);
        if(z)   r(e.x + e.w*3/4-0.5, e.y-0.5+an, e.w/4+1, e.h/2+1, 'black'), r(e.x + e.w*3/4, e.y+an, e.w/4, e.h/2, '#3A4A13'), eye(e, 7/8, -1.35/8, an,'red');
        if(!z)  r(e.x + e.w*3.25/4, e.y- e.h*0.1/2, 2, e.h*1.2/2, '#D9D9D9');
        r(e.x + e.w*0.75/4-0.5, e.y- e.h*0.1/2-0.5, e.w*2.5/4+1, e.h*1.2/2+1, 'black');
        r(e.x + e.w*0.75/4, e.y- e.h*0.1/2, e.w*2.5/4, e.h*1.2/2, coB);
        pnt(a);
    }
//-----------------Back------------------
    //headBac
    function heB(e,coB)
    {   hed(e);
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*4/8, e.h*2.25/8, '#D9D9D9');
    }
    //bodyBack
    function bdB(e,coS,coB)
    {   shr(e,coS);
        r(e.x + e.w*0.5/4-0.5, e.y - e.h*0.1/2-0.5, e.w*3/4+1, e.h*1.2/2+1, 'black');      
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2, e.w*3/4, e.h*1.2/2, coB);
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
    function ZhF(e, c)
    {   heZ(e,c);
        eye(e, 2.75/8, -1.35/8, c,'red');
        eye(e, 4.25/8, -1.35/8, c,'red');
    }
    function bdF(e)
    {   shr(e,'#6F6F6F');
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2-0.5, e.w/4+1, e.h*1.2/2+1,'black');
        r(e.x + e.w*2.5/4-1, e.y - e.h*0.1/2-0.5, e.w/4+1, e.h*1.2/2+1);
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2, e.w/4, e.h*1.2/2, '#424242');
        r(e.x + e.w*2.5/4, e.y - e.h*0.1/2, e.w/4, e.h*1.2/2);
        r(e.x + e.w/3, e.y - e.h*0.1/2, 2, e.h*1.2/2, '#D9D9D9');
        r(e.x + e.w*2/3-2, e.y - e.h*0.1/2, 2, e.h*1.2/2);
        pnt(e);    
    }
    
    function han(e,c,x,at,cor)
    {  r(e.x + x, e.y + e.h*0.5/4-c+at/4, e.w/4, e.h/4, cor);
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
    function HAN(e, c, cor)
    {   han(e, c, e.w*3/4,0,cor);
        han(e,-c, 0,0,cor);
    };
    function leg(e, cl, cr, cor)
    {   let bl = {x:e.x + e.w*0.5/4, y:e.y + e.h*3/4, w:e.w*1.25/4, h:-(e.h/4)*2}
        let br = {x: e.x + e.w*2.25/4, y: bl.y, w: bl.w, h: bl.h}

        SCL(bl, cl);
        r(bl.x, bl.y, bl.w, -bl.h/2, cor);
        res();
        
        SCL(br, cr);
        r(br.x, br.y, br.w, -br.h/2, cor);
        res();
    };
//----sword draw----
    function swo(e,x,c,at)
    {   var cor = `red`
        let b = {x:e.x + e.w*2/4, y:e.y + e.h*0.5/4, w:-(e.w/4)*2, h:-(e.h/4)*2};
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
            console.log(ang)
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