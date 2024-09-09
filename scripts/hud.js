class Hud
{   constructor()
    {}
    drw()
    {   
        sB(5,'black');
            //r(32,8,200,80,'rgb(50,50,50,0.5)');
            mT(104,48, 'white');
            lT(104+55,48);
            lT(104+65,48);
            lT(104+55,64);
            lT(104,64);
        cP();
            let c = pla.amo.c/pla.amo.m;
            if(!c) c = 1;
            mT(104,48, 'orange');
            lT(104+55*c,48);
            lT(104+65*c,48);
            lT(104+55*c,64);
            lT(104,64);
        cP();
        
            mT(40+64,32, 'white');
            lT(150+64,32);
            lT(160+64,40);
            lT(150+64,48);
            lT(40+64,48);
        cP();

            mT(104,32, 'red');
            lT(104+110*pla.tim.c/pla.tim.m,32);
            lT(104+120*pla.tim.c/pla.tim.m,40);
            lT(104+110*pla.tim.c/pla.tim.m,48);
            lT(104,48);
        cP();
        sB(0);
        heF({x:8, y:80, w:128, h:128},1*pla.tim.c/pla.tim.m||0.001);
        
    }
}