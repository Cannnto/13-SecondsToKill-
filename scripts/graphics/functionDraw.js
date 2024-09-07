var zC = '#3A4A13';
function i(e){return x=e.x, y=e.y, w=e.w, h=e.h;}
function Ddi(arr)
{   for(let i=0;i<10;i++)
    {   let l = parseInt(rng()*22);
        let c = parseInt(rng()*30);
        if(arr[l][c] == 1) arr[l][c] = 11;
    }
}

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

function hed(e,a){r(e.x + e.w/4, e.y - e.h/2, e.w/2, e.h/2, `rgba(255,255,255,${a||1})`)};
function pnt(e, color){r(e.x + e.w*0.5/4, e.y+e.h*2.5/4, e.w*3/4, e.h/4, '#055769')};
function shr(e, color){r(e.x + e.w*0.5/4, e.y, e.w*3/4, e.h*1.25/2, color)}
function eye(e, xa, ya, c, color){r(e.x + e.w*xa, e.y - e.h*ya+c, e.w/8, e.h*1.3/8, color)};
function heZ(e,c)
{   i(e);
    r(x + w/4-0.5, y-0.5+c, w/2+1, h/2+1, 'black');
    r(x + w*2/8, y+c, w*3/8, h/2, zC);
    r(x + w*5/8-1, y+h/8+c, w/8+1, h*1.5/4, zC);
}
//------------------Side-----------------    
    //headSide
    function heS(e,b)
    {   i(e);
        hed(e);
        r(x + w*2/8, y - h*4/8, w*4/8, h*0.75/8+1, '#D9D9D9');
        r(x + w*2/8, y - h*3.25/8, w*3/8, h/16+1);
        r(x + w*2/8, y - h*2.75/8, w/8, h/8+1);
        r(x + w*2.5/4, y - h*2.35/8, w/8, h*1.3/8, 'black');

        r(x + w/4, y - h/2, w/2*b, h/10*b, 'red');
        r(x + w/4, y - h/2, w/13*b, h/4*b, 'red');
        r(x + w/3.3, y - h/2, w/13*b, h/6*b, 'red');
        r(x + w/1.7, y - h/2, w/13*b, h/4*b, 'red');
    }
    //HandLeg1Side
    function le1(e, c, cor)
    {   i(e);
        let b = {x:x + w*0.75/4, y:y + h*3/4, w:(w*1.25/4)*2, h:-(h/4)*2}
        RTT(b,c*-5)
            r(b.x, b.y, b.w/2, -b.h/2, cor);
        res();
    }
    function hs1(e,c,cor){i(e), r(x + w*3/4 + c, y, w/4, h/4, cor)};
    function geS(e,c,y1,cor){i(e), r(x + w*4.15/4 - w/14 +c, y + h*y1/7, w/14, h/14,cor)};
    function gaS(e,c)
    {   i(e);
        r(x + w*3/4 + c, y, w/3.5, h/3.5, '#46464b');
        r(x + w*4.15/4 - w/7+c, y + h*1/3.5-h/14, w/7, h/14, 'black');
        geS(e,c,0,'#0000FF');
        geS(e,c,0.1,'#FF0000');
        geS(e,c,0.2,'#00FF00');
    };
    //HandLegs2Side
    function hs2(e, c, cor, at, b)
    {   i(e);
        let a = {x:x + w*2/4, y:y + h*0.5/4-c, w:-(w/4)*2, h:-(h/4)*2};
        RTT(a, c*-10+at);
            r(a.x, a.y, -a.w/2, -a.h/2, cor);
            r(a.x-a.w/2/10, a.y, -a.w/2/1.3*b, -a.h/2/4*b, 'red');
            r(a.x-a.w/2/4, a.y, -a.w/2/4*b, -a.h/2*b, 'red');
        res();
    }
    function le2(e,c,cor,b)
    {   i(e);
        let a = {x: x + w*2/4, y: y + h*3/4, w:-(w*1.25/4)*2, h:-(h/4)*2};
        RTT(a, c*5);
            r(a.x, a.y, -a.w/2, -a.h/2, cor);
            r(a.x-a.w/4, a.y, -a.w/2/2*b, -a.h/2/4*b, 'red');
            r(a.x-a.w/2.70, a.y, -a.w/2/4*b, -a.h/2/1.5*b, 'red');
        res();
    }
    //bodySide
    function bdS(e, coS, coB, z, an)
    {   i(e);
        var a ={x: x + w*0.30/4, y:y, w:w*3.4/4, h: h};
        shr(a,coS);
        if(z)   r(x + w*3/4-0.5, y-0.5+an, w/4+1, h/2+1, 'black'), r(x + w*3/4, y+an, w/4, h/2, zC), eye(e, 7/8, -1.35/8, an,'red');
        if(!z)  r(x + w*3.25/4, y- h*0.1/2, 2, h*1.2/2, '#D9D9D9');
        r(x + w*0.75/4-0.5, y- h*0.1/2-0.5, w*2.5/4+1, h*1.2/2+1, 'black');
        r(x + w*0.75/4, y- h*0.1/2, w*2.5/4, h*1.2/2, coB);
        pnt(a);
    }
//-----------------Back------------------
    //headBac
    function heB(e,b)
    {   i(e);
        hed(e);
        r(x + w*2/8, y - h*4/8, w*4/8, h*2.25/8, '#D9D9D9');
        r(x + w*4/8-1, y - h*4/8-1, (w*2/8+2)*b, (h*4/8+2)*b, zC);
        r(x + w*2/8, y - h*4/8, w*1/16*b, h*2/8*b, 'red');
        r(x + w*2/8, y - h*4/8, w*2/16*b, h*1/12*b, 'red');
    }
    //bodyBack
    function bdB(e,coS,coB,b)
    {   i(e);
        shr(e,coS);

        r(x + w*0.5/4-0.5, y - h*0.1/2-0.5, w*3/4/2+1, h*1.2/2+1, 'black');      
        r(x + w*0.5/4, y - h*0.1/2, w*3/4/2, h*1.2/2, coB);

        r(x + w*0.5/4-0.5, y - h*0.1/2-0.5, (w*3/4+1)*b, (h*1.2/2+1)*b, 'black');      
        r(x + w*0.5/4, y - h*0.1/2, w*3/4*b, h*1.2/2*b, coB);
        pnt(e);
    }
//--------------Front-------------------
    //head
    function heF(e,a)
    {   i(e);
        hed(e,a);
        eye(e, 2.75/8, 2.35/8, 0,`rgba(0,0,0,${a||1})`);
        eye(e, 4.25/8, 2.35/8, 0,`rgba(0,0,0,${a||1})`);
        r(x + w*2/8, y - h*4/8, w*4/8, h*0.75/8, `rgba(217,217,217,${a||1})`);
        r(x + w*5/8, y - h*3.25/8, w/8, h/16);
        r(x + w*2/8, y - h*3.25/8, w/8, h/16);
    }
    function cHe(e)
    {   i(e);
        r(x + w/4-1, y - h/2-1, w/4+2, h/2+2, zC);
        r(x + w*2.4/8, y - h*2.9/8, w/6, h*1.5/8,'red');
        r(x + w*3/4-w/16, y - h/2, w/16, h/4, 'red');
        r(x + w*3/4-w/8, y - h/2, w/8, h/16, 'red');
    }
    function ZhF(e, c)
    {   heZ(e,c);
        eye(e, 2.75/8, -1.35/8, c,'red');
        eye(e, 4.25/8, -1.35/8, c,'red');
    }
    function bdF(e)
    {   i(e);
        shr(e,'#6F6F6F');
        let a = {w:w/4, h:h*1.2/2, y:h*0.1/2};
        r(x + w*0.5/4, y - a.y-0.5, a.w+1, a.h+1,'black');
        r(x + w*0.5/4, y - a.y, a.w, a.h, '#424242');
        r(x + w/3, y - a.y, 2, a.h, '#D9D9D9');
        siJ(e,'#424242');
        pnt(e);    
    }
    //side jacket
    function siJ(e,c1)
    {   i(e);
        let a = {w:w/4, h:h*1.2/2, y:h*0.1/2};
        r(x + w*2.5/4-1, y - a.y-0.5, a.w+1, a.h+1,'black');
        r(x + w*2.5/4, y - a.y, a.w, a.h, c1);
        r(x + w*2/3-2, y - a.y, 2, a.h, '#D9D9D9');
    }
    function han(e,c,x1,at,cor,b)
    {   i(e);
        r(x1 + x, y + h*0.5/4-c+at/4, w/4, h/4, cor);
        r(x1 + x, y + h*0.5/4-c+at/4, w/16*b, h/8*b, 'red');
        r(x1 + x+w*3/16, y + h*0.5/4-c+at/4, w/16*b, h/4.5*b, 'red');
    }
    function gem(e,c,x1,co){ i(e), r(x1+x, y + h*0.4/3.5-c, w/14, h/14,co)};
    function gau(e,c,x1)
    {   //gold
        i(e);
        r(x+x1, y + h*0.35/3.5+c, w/3.5, h/3.5, '#46464b');
        gem(e,-c,x1+w/64 ,'#0000FF');
        gem(e,-c,x1+w/3.5/2-w/14/2,'#FF0000');
        gem(e,-c,x1+w/3.5/2+w/18,'#0000FF');
        if(!(e.a == e.bac)) r(x+w/7+x1, y + h*1.1/3.5+c, w/7, h/14, 'black'), gem(e,-c,x1+w/3.5/2+w/18,'#00FF00');;
        //prata
        // '#C0C0C0';
        // '#636363';
        //aço
        //'#46464b';
        //'#DBDBEB';
        //carmezin
        // '#dc143c';
        // '#481718';        
    }
//-------------
    function HAN(e, c, cor,b)
    {   han(e,-c, 0,0,cor,0);
        
        han(e, c, e.w*3/4,0,cor,b);
    };
    function leg(e, cl, cr, c1,c2,b)
    {   i(e);
        let bl = {x: x + w*0.5/4, y:y + h*3/4, w:w*1.25/4, h:-(h/4)*2}
        let br = {x: x + w*2.25/4, y: bl.y, w: bl.w, h: bl.h};
    
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
    function swo(e,x1,c,at,cor,f)
    {   i(e);
        let b = {x:x + w*2/4, y:y + h*0.5/4, w:-(w/4)*2, h:-(h/4)*2};
        var s = 0;
        if(e.a!=e.sid)  s=at/4;
        if(e.a==e.sid)  RTT(b, c*-10+at); 
            r(x1 - 2.5, y+h/16-c +s, w/4+5, h/16, 'black');
            r(x1 + w/10, y+h*0.5/4-c +s, w/16, h/4, '#552A18');
            r(x1 + w/16, y+h*1.5/4-c +s, w/8, h/8, '#6F6F6F');
                mT(x1 + w/24, y-h*4/8+0.5-c+s,cor);
                lT(x1 + w/8, y-h*6/8+0.5-c+s);
                lT(x1 + w/4.8, y-h*4/8+0.5-c+s);
            cP();
            r(x1+w/24, y-h/2-c+s, w/6, h*9/16, cor);

        var a = (c*-0*Math.PI/180)
        if(e.a==e.sid)   res(), a = ((c*-10+at)*Math.PI/180);
        
        let bl1 = {x:(x1+w/24),y:(y-h/2 - c+s)+20*sin(a),w:w/6,h:h*9/16};
        let bl2 = {x:(x1+w/24)-h*5.1/8,y:(y-h/2 - c)+5*sin(a),w:bl1.h, h:bl1.w}; 
        if(e.c) bl1.x-=w/4, bl2.x+=bl2.w;
        let bl = bl1;
        if(a*180/Math.PI<-45)   bl = bl2;

        // r(bl1.x,bl1.y,bl1.w,bl1.h, 'purple')
        // r(bl2.x,bl2.y,bl2.w,bl2.h,'purple')
        if(f) for (let i = 0; i < 5; i++) par.push(new Par(bl, 'ora'));
    }
    function sla(e)
    {   i(e);
        ctx.fillStyle = 'red';
        RTT(e, ang*180/Math.PI);
            bP();
                mT(x, y);
                lT(x + w/2, y + h/6);
                lT(x + w, y + h/2);
                lT(x + w/2, y + h/1.2);
                lT(x, y + h);
                lT(x+ w/3, y + h/1.3);
                lT(x+ w/2, y + h/2);
                lT(x+ w/3, y + h/4);
            cP();
        res();
        ctx.fill();
    }
//box
    function box(e)
    {   i(e);
        let a = {x:x+w/2-w/16, y:y+w/3-6, w: w/8, h: h};
        let b = {x:x+w/2-w/16, y:y-7.5, w: w/16, h: h/1.2};
        let li = '#E29628', mli = '#B5701D';
        r(x, y, w, h, '#995F12');
        RTT(a,-60);
            r(a.x,a.y,a.w,a.h, mli);
        res();
        RTT(b,82);
            r(b.x,b.y,b.w,b.h, mli);
        res();
        // r(x,y,w,h/4, '#806D4D');
        r(x+1,y+1,w/8-2,h-2, li);
        r(x+1,y+1,w-2,h/12-2, li);
        r(x+1,y+h/4+1,w-2,h/8-2, li);
        r(x+1+w*0.875,y+1,w/8-2,h-2, li);
        r(x+1,y+h*0.875+1,w-2,h/8-2, li);
    }
    function btn(e, cor)
    {   i(e);
        eli(x+w/2, y+h/2, w/3, h/8, 0, cor);
        eli(x+w/2, y+h/1.2, w/2.5, h/5, 0, 'gray');
        eli(x+w/2, y+h/1.2, w/3, h/8, 0, cor);
        r(x+w/6, y+h/2, w/1.5, h/3, cor);
    }
    function spw(e)
    {   //r(e.x,e.y,e.w,e.h,'red');
        i(e);
        r(x+w/8,y+h/8,w*0.75,h*0.75,'#C6C6C8');
        r(x+w/8,y+h/8,w*0.75/8,h*0.75,'red');
        r(x+w/8,y+h/8,w*0.75/4,h*0.75/2.5,'red');
        r(x+w*0.05,y+h/1.5,w*0.9,h/4,'#D9D9D9');
    }
    function sgn(e)
    {   i(e);
        r(x,y,w,h/1.75,'#7C653C');
        r(x+w/2.2,y,w/8,h,'#7C653C');
        r(x+w*0.1,y+h/1.75*0.5/4,w*0.8,h/3/4,'#574220');
        r(x+w*0.1,y+h/1.75*1.75/4,w*0.8,h/3/4,'#574220');
        r(x+w*0.1,y+h/1.75*3/4,w*0.8,h/3/4,'#574220');
    }
    function int(e)
    {   i(e);
        ctx.font = `${w/2}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText('[E]', x+w/2, y-h);
    }
    function lB(e,c,p,w1,d,l)
    {   i(e)
        let ww = (e.lif.c/e.lif.m)*l || 1;
        sB(3,'black');
        mT(x,y-p-d, c);              //b
        lT(x+w*ww,y-p-d);        //b
        lT(x-w1+(w+w1*2)*ww,y-p);//a
        lT(x+w*ww,y-p+d);         //after
        lT(x,y-p+d);              //after
        lT(x-w1,y-p);         //a
        cP();
        sB(0,'black');
    }

    function mor(e)
    {   i(e);
        r(x+w/2-w/1.5/2,y-h/3,w/1.5,h/2,'black');
        ctx.font = `${w}px arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'white';
        ctx.fillText(e.val[e.i%e.val.length], x+w/2, y-h/3);
    }
    function mat(e)
    {   i(e);
        r(x+1,y+1,w-2,h-2,'#30353D');
    }

