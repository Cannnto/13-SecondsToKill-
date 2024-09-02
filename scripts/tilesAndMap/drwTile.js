function waF(e)
{   r(e.x,e.y,e.w,1,'black');
    wLi(e.x, e.y);
    r(e.x,e.y+e.w*1/3,e.h,1);
    wLi(e.x+e.w*1/8, e.y+e.h*1/3);
    r(e.x,e.y+e.w*2/3,e.h,1);
    wLi(e.x+e.w*1/32, e.y+e.h*2/3);
}
function wLi(x,y)
{   r(x,y,1,10.6);
    r(x+32*1/4,y,1,10.6);
    r(x+32*2/4,y,1,10.6);
    r(x+32*3/4,y,1,10.6);
}
function waS(e)
{   r(e.x,e.y,32,32,'#151F33');
    r(e.x,e.y,1,32,'#5E77A8')
    r(e.x+31,e.y,1,32,'#5E77A8')
}
function nex(e,d)
{   if(!lvls[clv].map.arr[(e.y)/32][(e.x)/32+1*d]) return;
    return lvls[clv].map.arr[(e.y)/32][(e.x)/32+1*d].constructor.name =='Wal';
}
function dir(e,rt)
{   RTT(e,rt);
        r(e.x+e.w*0.4/3,e.y+e.h*1.6/3,e.w/5,e.h/5,'#4C4C4C');
        r(e.x+e.w*1.7/3,e.y+e.h*2/3,e.w/3,e.h/4,'#4C4C4C');
        r(e.x+e.w*0.2/3,e.y+e.h*0.2/3,e.w/3,e.h/3,'#333333');
        r(e.x+e.w*2/3,e.y+e.h*0.5/3,e.w/4,e.h/5,'#333333');
    res();

}