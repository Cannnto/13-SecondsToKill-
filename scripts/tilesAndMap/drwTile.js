function waF(e)
{   i(e);
    r(x,y+h-1,w,1,'black');
    r(x,y,w,1);
    wLi(x, y);
    r(x,y+h*1/3,h,1);
    wLi(x+w*1/8, y+h*1/3);
    r(x,y+h*2/3,h,1);
    wLi(x+w*1/32, y+h*2/3);
    // r(x,y,w,h,'rgba(255,0,0,0.1)');
}
function wLi(x,y)
{   r(x,y,1,10.6);
    r(x+32*1/4,y,1,10.6);
    r(x+32*2/4,y,1,10.6);
    r(x+32*3/4,y,1,10.6);
}
function waS(e)
{   i(e);
    r(x,y,32,32,'#20252E');
    r(x,y,1,32,'#6D798B');
    r(x+31,y,1,32);
}
function nex(e,dx,dy)
{   i(e);
    // console.log(lvls[clv].map.arr[(y)/32+1][(x)/32+1*dx])
    if(!lvls[clv].map.arr[(y)/32+dy] || !lvls[clv].map.arr[(y)/32+dy][(x)/32+1*dx]) return;
    return lvls[clv].map.arr[(y)/32+dy][(x)/32+1*dx].constructor.name =='Wal';
}
function dir(e,rt)
{   i(e);
    RTT(e,rt);
        r(x+w*0.4/3,y+h*1.6/3,w/5,h/5,'#4C4C4C');
        r(x+w*1.7/3,y+h*2/3,w/3,h/4,'#4C4C4C');
        r(x+w*0.2/3,y+h*0.2/3,w/3,h/3,'#333333');
        r(x+w*2/3,y+h*0.5/3,w/4,h/5,'#333333');
    res();
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

function bdt(e,c)
{   i(e);
    X(c);
    RTT(e,90)
        X(c);
    res();
}
function X(c)
{   mT(x,y+h/1.25,c);
    lT(x+w/1.25,y);
    lT(x+w,y);
    lT(x+w,y+h*0.25);
    lT(x+w*0.25,y+h);
    lT(x,y+h);
    cP();
}
function cnt(e,c,cor)
{   i(e);
    r(x+1,y+1,w-2,h-2,'#20252E');
    sB(5,'black')
    txt(x+w/2,y+h/2,c,w/1.25,cor);
    sB(0)
}

function mor(e)
{   i(e);
    r(x+w/2-w/1.5/2,y-h/3,w/1.5,h/2,blk);
    txt(x+w/2, y-h/3, e.val[e.i%e.val.length], w, wh);
}
function mat(e)
{   i(e);
    r(x+1,y+1,w-2,h-2,'#30353D');
}