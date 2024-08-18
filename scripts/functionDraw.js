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
function eye(e, xa, ya, color){r(e.x + e.w*xa, e.y - e.h*ya, e.w/8, e.h*1.3/8, color)};
function heZ(e)
{   r(e.x + e.w/4-1, e.y-1, e.w/2+2, e.h/2+2, 'black');
    r(e.x + e.w*2/8, e.y, e.w*3/8, e.h/2, '#3A4A13');
    r(e.x + e.w*5/8-1, e.y+e.h/8, e.w/8+1, e.h*1.5/4, '#3A4A13');
}
//------------------Side-----------------    
    //headSide
    function heS(e)
    {   hed(e);
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*4/8, e.h*0.75/8+1, '#D9D9D9');
        r(e.x + e.w*2/8, e.y - e.h*3.25/8, e.w*3/8, e.h/16+1);
        r(e.x + e.w*2/8, e.y - e.h*2.75/8, e.w/8, e.h/8+1);
        r(e.x + e.w*2.5/4, e.y - e.h*2.35/8, e.w/8, e.h*1.3/8, 'black');

        //golaZ
        r(e.x + e.w*3.25/4, e.y - e.h*0.1/2, 2, e.h*0.1/2, '#D9D9D9');
        r(e.x + e.w*0.75/4-1, e.y - e.h*0.1/2-1, e.w*2.5/4+2, e.h*0.1/2+2, 'black');
        r(e.x + e.w*0.75/4, e.y - e.h*0.1/2, e.w*2.5/4, e.h*0.1/2+2, '#424242');
    }
    //HandLeg1Side
    function le1(e, c, cor)
    {   let b = {x:e.x + e.w*0.75/4, y:e.y + e.h*3/4, w:(e.w*1.25/4)*2, h:-(e.h/4)*2}
        RTT(b,c*-5)
            r(b.x, b.y, b.w/2, -b.h/2, cor);
        res();
    }
    function ha1(e,c,cor){r(e.x + e.w*3/4 + c, e.y, e.w/4, e.h/4, cor);}
    //HandLegs2Side
    function ha2(e, c, cor)
    {   let b = {x:e.x + e.w*2/4, y:e.y + e.h*0.5/4, w:-(e.w/4)*2, h:-(e.h/4)*2};
        RTT(b, c*-10);
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
    function bdS(e, coS, coB, z)
    {   var a ={x: e.x + e.w*0.30/4, y:e.y, w:e.w*3.4/4, h: e.h};
        shr(a,coS);
        if(z && e.wH)   r(e.x + e.w*3/4-1, e.y-1, e.w/4+2, e.h/2+2, 'black'),r(e.x + e.w*3/4, e.y, e.w/4, e.h/2, '#3A4A13'), eye(e, 7/8, -1.35/8, 'red');
        if(!z)          r(e.x + e.w*3.25/4, e.y- e.h*0.1/2, 2, e.h*1.2/2, '#D9D9D9');
        r(e.x + e.w*0.75/4-1, e.y- e.h*0.1/2-1, e.w*2.5/4+2, e.h*1.2/2+2, 'black');
        r(e.x + e.w*0.75/4, e.y- e.h*0.1/2, e.w*2.5/4, e.h*1.2/2, coB);
        pnt(a);
    }
//-----------------Back------------------
    //headBac
    function heB(e,coB)
    {   hed(e);
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*4/8, e.h*2.25/8, '#D9D9D9');
        //golaZ
        r(e.x + e.w*0.5/4-1, e.y - e.h*0.1/2-1, e.w*3/4+2, e.h*0.1/2+2, 'black');      
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2, e.w*3/4, e.h*0.1/2+2, coB);
    }
    //bodyBack
    function bdB(e,coS,coB)
    {   shr(e,coS);
        r(e.x + e.w*0.5/4-1, e.y - e.h*0.1/2-1, e.w*3/4+2, e.h*1.2/2+2, 'black');      
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2, e.w*3/4, e.h*1.2/2, coB);
        pnt(e);
    }
//--------------Front-------------------
    //head
    function heF(e)
    {   hed(e);
        eye(e, 2.75/8, 2.35/8, 'black');
        eye(e, 4.25/8, 2.35/8, 'black');
        r(e.x + e.w*2/8, e.y - e.h*4/8, e.w*4/8, e.h*0.75/8, '#D9D9D9');
        r(e.x + e.w*5/8, e.y - e.h*3.25/8, e.w/8, e.h/16);
        r(e.x + e.w*2/8, e.y - e.h*3.25/8, e.w/8, e.h/16);

        //golaZ
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2-1, e.w/4+1, e.h*0.1/2+2,'black');
        r(e.x + e.w*2.5/4-1, e.y - e.h*0.1/2-1, e.w/4, e.h*0.1/2+2);
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2, e.w/4, e.h*0.1/2+2, '#424242');
        r(e.x + e.w*2.5/4, e.y - e.h*0.1/2, e.w/4, e.h*0.1/2+2);
        r(e.x + e.w/3, e.y - e.h*0.1/2, 2, e.h*0.1/2+2, '#D9D9D9');
        r(e.x + e.w*2/3-2, e.y - e.h*0.1/2, 2, e.h*0.1/2+2);
    }
    function ZhF(e)
    {   heZ(e);
        eye(e, 2.75/8, -1.35/8, 'red');
        eye(e, 4.25/8, -1.35/8, 'red');
    }
    function bdF(e)
    {   shr(e,'#6F6F6F');
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2-1, e.w/4+1, e.h*1.2/2+2,'black');
        r(e.x + e.w*2.5/4-1, e.y - e.h*0.1/2-1, e.w/4, e.h*1.2/2+2);
        r(e.x + e.w*0.5/4, e.y - e.h*0.1/2, e.w/4, e.h*1.2/2, '#424242');
        r(e.x + e.w*2.5/4, e.y - e.h*0.1/2, e.w/4, e.h*1.2/2);
        r(e.x + e.w/3, e.y - e.h*0.1/2, 2, e.h*1.2/2, '#D9D9D9');
        r(e.x + e.w*2/3-2, e.y - e.h*0.1/2, 2, e.h*1.2/2);
        pnt(e);    
}
//-------------
    function Lhd(e, c, cor)
    {   let b = {xl:e.x, xr:e.x + e.w*3/4, y:e.y + e.h*0.5/4, w:e.w/4, h:e.h/4}

        r(b.xr, b.y-c, b.w, b.h, cor);
        r(b.xl, b.y+c, b.w, b.h, cor);
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