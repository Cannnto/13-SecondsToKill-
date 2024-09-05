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
    // r(x,y+h-1,w,1,'#6D798B');
    // r(x,y,w,1,'#6D798B');
    // r(x,y,w,h,'rgba(255,0,0,0.1)');

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