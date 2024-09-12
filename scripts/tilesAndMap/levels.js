function fill(num)
{   return Array.from({length:24},(i) => Array.from({length:32}, (r)=>num));
}
function cma(a)
{   for(var lne = 0;lne < a.length; lne++) // Linhas
    {   for(var col = 0; col < a[lne].length; col++) // Colunas
        {   switch(Number(a[lne][col])) // Tipos de Tiles
            {                                  //set X   set Y
                case 1: a[lne][col] = new flr(col*32,lne*32);break;  // floor
                case 2: a[lne][col] = new Wal(col*32,lne*32);break;  // wall
                case 3: a[lne][col] = new dor(col*32,lne*32);break;
                case 4: a[lne][col] = new Spw(col*32,lne*32);break;
                case 5: a[lne][col] = new Bxs(col*32,lne*32);break;
                case 6: a[lne][col] = new Btn(col*32,lne*32,[false,true]);break; 
                case 7: a[lne][col] = new BDT(col*32,lne*32);break;
                case 8: a[lne][col] = new Sgn(col*32,lne*32);break;
                //graphics
                case 9: a[lne][col] = new Gbx(col*32,lne*32);break;
                case 10: a[lne][col] = new Gbo(col*32,lne*32);break;
                case 11: a[lne][col] = new Gdi(col*32,lne*32);break;
                //
                case 12: a[lne][col] = new Ice(col*32,lne*32);break;
                case 13: a[lne][col] = new Mor(col*32,lne*32,[".","_"], Math.round(rng()));break;
                //mat
                case 14: a[lne][col] = new Mth(col*32,lne*32,"Dgt", false);break; //random digit tile, mutable
                case 15: a[lne][col] = new Mth(col*32,lne*32,"Add", true);break;
                case 16: a[lne][col] = new Mth(col*32,lne*32,"Sub", true);break;
                case 17: a[lne][col] = new Mth(col*32,lne*32,"Mul", true);break;
                case 18: a[lne][col] = new Mth(col*32,lne*32,"Div", true);break;
                case 19: a[lne][col] = new Mth(col*32,lne*32,"Res", true);break; //result tile holds the result of the equation
                case 20: a[lne][col] = new Mth(col*32,lne*32,"Ans", true);break;
                
                case 21: a[lne][col] = new Cnt(col*32,lne*32);break;
                case 22: a[lne][col] = new F13(col*32,lne*32);break;
            }
        }
    }
}
var levels = 
[   {x:16*32.5,y:21*32},
    {x:26*32.5,y:21*32},
    {x:16*31.2,y:21*32},
    {x:26*31.5,y:21*32},
    {x:26*32.5,y:21*32},
    {x:26*32.5,y:21*32},
    {x:16*31.2,y:21*32},
    {x:26*31.5,y:21*32},
    {x:16*32.5,y:21*32}
]
function sqlv(a)
{
    for(var y=0;y<cnv.height/32;y++)   a[y][0] = a[y][31] = 2;
    for(var x=1;x<cnv.width/32-1;x++)   a[0][x] = a[23][x] = 2;
}

function Llvl(a)
{   sqlv(a)
    for(var x=0;x<23;x++) a[11][x] = 2;
    for(var y = 12; y<24;y++) a[y][22] = 2;
    for(var x=0;x<22;x++)
        for(var y=12;y<24;y++) a[y][x] = 0;
    a[0][16] = a[0][15] = 3;
    a[2][22] = a[1][1] = a[22][30] = 4;
}

function Tlvl(a)
{   sqlv(a)
    for(var y=1;y<16;y++)
        for(var x=0;x<13;x++)  a[y+8][x+19] = a[y+8][x] = 0;
    for(var x=0;x<13;x++) a[9][x+19] = a[9][x] = 2;
    for(var y=10;y<24;y++) a[y][12] = a[y][19] = 2;
    a[0][16] = a[0][15] = 3;
    a[5][5] = a[5][25] = 4;
}

function Hlvl(a)
{   sqlv(a)
    for(var y=0;y<8;y++)
        for(var x=11;x<21;x++) a[y][x] = a[y+16][x] = 0;
    for(var x=11;x<21;x++) a[16][x] = a[7][x] = 2;
    for(var y=0;y<7;y++) a[y][11] = a[y][20] = a[y+17][11] = a[y+17][20] = 2;
    a[0][6] = a[0][5] = 3;
    a[12][3] = a[2][23] = a[1][1] = a[22][30] = 4;
}

function Clvl(a)
{   sqlv(a)
    a[0][16] = a[0][15] = 2;
    for(var y=7;y<17;y++)
        for(var x=10;x<32;x++) a[y][x] = 0;
    for(var x=10;x<32;x++) a[16][x] = a[7][x] = 2;
    for(var y=8;y<16;y++) a[y][10] = 2;
    a[0][26] = a[0][25] = 3;
    a[4][9] = a[16][2] = a[17][30] = a[6][30] = 4;
}

function lv1(a)
{   //add Walls
    sqlv(a);
    a[5][5] = a[17][25] = 4;
    a[0][16] = a[0][15] = 3;
    var txt = "Well met, T’reze!;You hast reached the Tower of Dreizehn!;May the number thirteen bless your journey...;"
    var txt2 = "The sword you wield in your hand holds great power T’reze.;but everything has a price... If you dont feed the sword with souls...; In thirteen seconds she will feed on your own soul!;"

    a[2][12] = new Sgn(12*32,2*32,txt);    
    a[2][19] = new Sgn(19*32,2*32,txt2);    
    a[0][23] = 21;    
        
    Ddi(a);
    return a;
}
function lv2(a)
{   //add Walls
    Llvl(a);
    a[3][5] = a[6][28] = a[9][9] = a[9][15] = 5;
    a[7][1] = a[16][30] = a[2][17] = a[2][14] = 7;

    a[9][1] = a[10][2] = a[10][1] = a[2][23] = a[2][24] = a[1][24] = a[1][25] = a[16][24] = a[16][23] = a[15][23] = 9;
    a[10][3] = a[9][2] = a[8][1] = a[2][25] = a[1][22] = a[1][23] = a[1][26] = a[13][23] = a[14][24] = a[15][24] = a[14][23] = 10;
    
    Ddi(a);
    return a;
}
function lv3(a)
{   //add Walls
    Tlvl(a);

    // a[4][5] = a[6][5] = a[4][7] = a[6][7] = 6;
    a[0][23] = 21;    
    
    Ddi(a);
    return a;
}
function lv4(a)
{   //add Walls
    Hlvl(a);

    var txt = ".-- .-. .. - . / - .... . / -. ..- -- -... . .-. / --- ..-. / - .... . / -.-. ..- .-. ... .;- .... .- - / -.. --- - .... / - .- .. -. - / -.-- --- ..- .-. / .-.. .. ..-. . .-.-.- .-.-.- .-.-.-;"
    a[4][26] = new Sgn(26*32,4*32,txt);
    a[10][10 ] = a[10][11] = a[10][12] = a[10][13] = a[10][14]  = a[10][17] = a[10][18] = a[10][19] = a[10][20] = a[10][21] = 13

    
    Ddi(a);
    return a;
}
function lv5(a)
{   //add Walls
    Clvl(a);
    a[12][8] = a[6][3] = a[18][28] = a[4][29] = 6;

    Ddi(a);
    return a;
}
function lv6(a)
{   //add Walls
    Llvl(a);
    a[8][9] = a[3][20] = 4;

    a[0][20] = 21;    
    
    Ddi(a);
    return a;
}
function lv7(a)
{   Tlvl(a);
    a[4][22] = 14;
    a[4][23] = 17;
    a[4][24] = new Mth(24*32,4*32,"Dgt", true, 3); //must use this method to create fixed digit tiles
    a[4][25] = 15;
    a[4][26] = 14;
    a[4][27] = 19;
    a[4][28] = 20;

    
    Ddi(a);
    return a;
}
function lv8(a)
{   Hlvl(a);
    a[1][1] = a[22][30] = 4;

    a[0][26] = 21;    
    return a;
}   
function lv13(a)
{   //add Walls
    sqlv(a);
    a[6][7] = a[6][8] = a[16][7] = a[16][8] = a[16][12] = a[16][11] = a[16][20] = a[16][21] = a[16][22] = a[16][23] = a[15][23] = a[14][23] = a[13][23] = a[10][23] = a[9][23] = a[8][23] = a[7][23] = a[7][22] = a[7][21] = a[7][20] = a[12][19] = a[11][19] = a[12][20] = a[11][20] = a[12][21] = a[11][21] = a[12][22] = a[11][22] = a[12][23] = a[11][23] = a[7][19] = a[6][19] = a[6][20] = a[6][21] = a[6][22] = a[6][23] = a[6][24] = a[7][24] = a[8][24] = a[9][24] = a[10][24] = a[11][24] = a[12][24] = a[13][24] = a[14][24] = a[15][24] = a[16][24] = a[17][24] = a[17][23] = a[17][22] = a[17][21] = a[17][20] = a[16][19] = a[17][19] = a[17][12] = a[17][7] = a[17][8] = a[17][11] = a[17][10] = a[17][9] = a[17][10] = a[16][9] = a[16][10] = a[15][9] = a[15][10] = a[14][9] = a[14][10] = a[13][9] = a[13][10] = a[12][9] = a[12][10] = a[11][9] = a[11][10] = a[10][9] = a[10][10] = a[9][9] = a[9][10] = a[8][9] = a[8][10] = a[7][7] = a[7][8] = a[7][9] = a[7][10] = a[6][10] = a[6][9] = 22;
    Ddi(a);
    return a;
}

function random(a,lvl,d)
{   var iFa = parseInt(rng()*4);
    var ro = parseInt(rng()*3)
    switch(iFa)
    {
        case 0: Llvl(a); levels.push({x:26*32.5,y:21*32});break; 
        case 1: Tlvl(a); levels.push({x:16*31.2,y:21*32});break; 
        case 2: Hlvl(a); levels.push({x:26*31.5,y:21*32});break; 
        case 3: Clvl(a); levels.push({x:26*32.5,y:21*32});break; 
    }
    var rmt = [
        [14,15,new Mth(0,0,"Dgt", true, 10),16,14,19,20],
        [14,17,new Mth(0,0,"Dgt", true, 2),16,14,19,20],
        [14,17,new Mth(0,0,"Dgt", true, 6),15,14,19,20],
        [14,18,new Mth(0,0,"Dgt", true, 3),15,14,19,20],
        [14,16,new Mth(0,0,"Dgt", true, 15),15,14,19,20],
    ]
    let di = a[1].indexOf(1)!=-1;

    switch(ro)
    {   case 0:
            var rn = 0
            while(rn < 2){rn = parseInt(rng()*5)}
            adran(a,rn,5);
            adran(a,rn,7);
            lvl.c = BTU;
        break;  //box
        case 1: 
            var rn = 0
            while(rn < 3){rn = parseInt(rng()*4)}
            adran(a,rn,6);
            lvl.c = BTNS;
        break;  //btn
        case 2:                    
            var d = 0                //math
            while(d<1)
            {   var l = parseInt(rng()*22);
                var c = parseInt(rng()*30);

                var tr = (a[l][c] == 1 && a[l][c+1] == 1 && a[l][c+2] == 1 && a[l][c+3] == 1 && a[l][c+4] == 1 && a[l][c+5] == 1  && a[l][c+6] == 1   && a[l][c+7] == 1|| a[l][c] == 12 && a[l][c+12] == 12 && a[l][c+2] == 12 && a[l][c+3] == 12 && a[l][c+4] == 12 && a[l][c+5] == 12 && a[l][c+6] == 12   && a[l][c+7] == 12);
                if(tr)
                {   var ram = parseInt((rng()*rmt.length))

                    for(var i = 0; i < 7; i++)
                    {   if(rmt[ram][i].constructor.name == "Number")
                            a[l][c+i] = rmt[ram][i];
                        else
                        {   a[l][c+i] = rmt[ram][i];
                            a[l][c+i].x = (c+i)*32;
                            a[l][c+i].y = l*32;
                        }
                    }
                    d++;
                }
            };
            lvl.c = MAT;
            break; 
        }
        di&&Ddi(a);
    return a
}
function KCT()
{   enC >= 13&&(cpd = 1);
}

function BTU(lvl)
{   var bCM = 0;
    for(let i=0; i<lvl.boxT.length;i++) 
        if (lvl.boxT[i].act) bCM++;
        bCM == lvl.boxT.length && bCM !=0?cpd = 1:cpd = 0;
}

function MORS(lvl)
{   var tr = 0
    //Checar os switchs para ver se pode passar de level
    for(var i = 0; i<lvl.mor.length; i++)
    {   if(lvl.mor[i].val[lvl.mor[i].i%lvl.mor[i].val.length] == lvl.txt[i])  tr++;
        
        if(tr == lvl.mor.length)
        {   for(var j = 0; j<lvl.mor.length; j++)
                lvl.mor[j].clr = "green";
                cpd = 1;
        }
        else
            for(var j = 0; j<lvl.mor.length; j++)
                lvl.mor[j].clr = "red", cpd = 0;
        
    }
}
var nxt = 0
function BTNS(lvl)
{   nxt == lvl.btns.length&&(cpd = 1,nxt = 0)
    return nxt
}

function MAT(lvl)
{   var s = "";
    if (lvl.maAr.length)
    {   for (let i = 0; i < lvl.maAr.length-2; i++) 
            s += lvl.maAr[i].dgt;
        for (let i=0; i<lvl.maAr.length; i++) 
        {   !lvl.maAr[i].fix ? lvl.maAr[i].txC = "crimson" : lvl.maAr[i].txC = "black";
            cpd = 0;
            if (Function("return parseInt(" + s +")==13")())
            {   lvl.maAr[i].txC = "green";
                cpd = 1;
                console.log('mat')
            };
        }
    }
}