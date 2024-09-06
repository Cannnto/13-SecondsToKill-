function fill(num)
{   return Array.from({length:24},(i) => Array.from({length:32}, (r)=>num));
}
function cma(arr)
{   for(var lne = 0;lne < arr.length; lne++) // Linhas
    {   for(var col = 0; col < arr[lne].length; col++) // Colunas
        {   switch(Number(arr[lne][col])) // Tipos de Tiles
            {                                  //set X   set Y
                case 1: arr[lne][col] = new flr(col*32,lne*32);break;  // floor
                case 2: arr[lne][col] = new Wal(col*32,lne*32);break;  // wall
                case 3: arr[lne][col] = new dor(col*32,lne*32);break;
                case 4: arr[lne][col] = new Spw(col*32,lne*32);break;
                case 5: arr[lne][col] = new Bxs(col*32,lne*32);break;
                case 6: arr[lne][col] = new Btn(col*32,lne*32,[false,true]);break; 
                case 7: arr[lne][col] = new BDT(col*32,lne*32);break;
                case 8: arr[lne][col] = new Sgn(col*32,lne*32);break;
                //graphics
                case 9: arr[lne][col] = new Gbx(col*32,lne*32);break;
                case 10: arr[lne][col] = new Gbo(col*32,lne*32);break;
                case 11: arr[lne][col] = new Gdi(col*32,lne*32);break;
                //
                case 12: arr[lne][col] = new Ice(col*32,lne*32);break;
                case 13: arr[lne][col] = new Mor(col*32,lne*32,[".","_"], Math.round(rng()));break;
                //mat
                case 14: arr[lne][col] = new Mth(col*32,lne*32,"Dgt", false);break; //random digit tile, mutable
                case 15: arr[lne][col] = new Mth(col*32,lne*32,"Add", true);break;
                case 16: arr[lne][col] = new Mth(col*32,lne*32,"Sub", true);break;
                case 17: arr[lne][col] = new Mth(col*32,lne*32,"Mul", true);break;
                case 18: arr[lne][col] = new Mth(col*32,lne*32,"Div", true);break;
                case 19: arr[lne][col] = new Mth(col*32,lne*32,"Res", true);break; //result tile holds the result of the equation
                case 20: arr[lne][col] = new Mth(col*32,lne*32,"Ans", true);break;
            }
        }
    }
}

function sqlv(arr)
{   for(var y=0;y<cnv.height/32;y++)   arr[y][0] = arr[y][31] = 2;
    for(var x=1;x<cnv.width/32-1;x++)   arr[0][x] = arr[23][x] = 2;
}

function Llvl(arr)
{   sqlv(arr)
    for(var x=0;x<23;x++) arr[11][x] = 2;
    for(var y = 12; y<24;y++) arr[y][22] = 2;
    for(var x=0;x<22;x++)
        for(var y=12;y<24;y++) arr[y][x] = 0;

}
// function Llvl(arr)
// {   sqlv(arr)
//     for(var x=0;x<23;x++) arr[11][x] = 2;
//     for(var y = 24; y<12;y++) arr[y][22] = 2;
//     for(var x=0;x<22;x++)
//         for(var y=24;y<12;y++) arr[y][x] = 0;

// }
function Llvl2(arr)
{   sqlv(arr)
    for(var x=0;x<23;x++) arr[11][x] = 2;
    for(var y = 12; y<24;y++) arr[y][22] = 2;
    for(var x=0;x<22;x++)
        for(var y=12;y<24;y++) arr[y][x] = 0;
}

function Tlvl(arr)
{   sqlv(arr)
    for(var y=1;y<16;y++)
        for(var x=0;x<13;x++)  arr[y+8][x+19] = arr[y+8][x] = 0;
    for(var x=0;x<13;x++) arr[9][x+19] = arr[9][x] = 2;
    for(var y=10;y<24;y++) arr[y][12] = arr[y][19] = 2;
}

function Hlvl(arr)
{   sqlv(arr)
    for(var y=0;y<8;y++)
        for(var x=11;x<21;x++) arr[y][x] = arr[y+16][x] = 0;
    for(var x=11;x<21;x++) arr[16][x] = arr[7][x] = 2;
    for(var y=0;y<7;y++) arr[y][11] = arr[y][20] = arr[y+17][11] = arr[y+17][20] = 2;
}

function Clvl(arr)
{   sqlv(arr)
    for(var y=7;y<17;y++)
        for(var x=10;x<32;x++) arr[y][x] = 0;
    for(var x=10;x<32;x++) arr[16][x] = arr[7][x] = 2;
    for(var y=8;y<16;y++) arr[y][10] = 2;
}

function lv1(arr)
{   //add Walls
    sqlv(arr);
    arr[0][16] = arr[0][15] = 3;
    arr[1][1] = arr[22][30] = 4;
    // arr[9][9] = arr[9][15] = 5;
    // arr[4][5] = arr[6][5] = arr[4][7] = arr[6][7] = 6;
    // arr[12][9] = arr[12][15] = 7;
    arr[12][28] = 8;
    // let i =0;
    arr[2][23] = arr[2][24] = arr[1][24] = arr[1][25] = 9;
    arr[2][25] = arr[1][22] = arr[1][23] = arr[1][26] = 10;
    // arr[5][30] = arr[22][8] = arr[8][3] = arr[10][20] = 11;

    
    
    // arr[4][10] = new Mth(10*32,4*32,"Dgt", true, 3); //must use this method to create fixed digit tiles
    // arr[4][11] = 15;
    // arr[4][12] = 14;
    // arr[4][13] = 19;
    // arr[4][14] = 20;
    
    Ddi(arr);
    return arr;
}
function lv2(arr)
{   //add Walls
    Llvl(arr);
    arr[0][16] = arr[0][15] = 3;
    arr[1][1] = arr[22][30] = 4;
    arr[3][5] = arr[6][28] = arr[9][9] = arr[9][15] = 5;

    arr[7][1] = arr[16][30] = arr[2][17] = arr[2][14] = 7;

    Ddi(arr);
    return arr;
}
function lv3(arr)
{   //add Walls
    Tlvl(arr);
    arr[0][16] = arr[0][15] = 3;
    // arr[4][5] = arr[6][5] = arr[4][7] = arr[6][7] = 6;

    Ddi(arr);
    return arr;
}
function lv4(arr)
{   //add Walls
    Hlvl(arr);

    var txt = "1: .----;3: ...--;"
    arr[5][5] = new Sgn(5*32,5*32,txt);
    arr[10][10 ] = arr[10][11] = arr[10][12] = arr[10][13] = arr[10][14]  = arr[10][17] = arr[10][18] = arr[10][19] = arr[10][20] = arr[10][21] = 13


    arr[0][6] = arr[0][5] = 3;
    arr[1][1] = arr[22][30] = 4;
    
    Ddi(arr);
    return arr;
}
function lv5(arr)
{   //add Walls
    Clvl(arr);
    arr[0][26] = arr[0][25] = 3;
    arr[12][8] = arr[6][3] = arr[18][28] = arr[4][29] = 6;
    arr[4][9] = arr[16][2] = arr[17][30] = arr[6][30] = 4;

    Ddi(arr);
    return arr;
}
function lv6(arr)
{   //add Walls
    Llvl(arr);
    arr[0][26] = arr[0][25] = 3;
    arr[8][9] = arr[3][20] = 4;
    Ddi(arr);
    return arr;
}