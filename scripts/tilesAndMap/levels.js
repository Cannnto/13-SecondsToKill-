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
                case 6: arr[lne][col] = new Btn(col*32,lne*32);break;
                case 7: arr[lne][col] = new BDT(col*32,lne*32);break;
                case 8: arr[lne][col] = new Sgn(col*32,lne*32);break;
                //graphics
                case 9: arr[lne][col] = new Gbx(col*32,lne*32);break;
                case 10: arr[lne][col] = new Gbo(col*32,lne*32);break;
                case 11: arr[lne][col] = new Gdi(col*32,lne*32);break;
                //ice
                case 12: arr[lne][col] = new Ice(col*32,lne*32);break;
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
    // arr[1][1] = arr[22][30] = 4;
    // arr[9][9] = arr[9][15] = 5;
    // arr[4][5] = arr[6][5] = arr[4][7] = arr[6][7] = 6;
    // arr[12][9] = arr[12][15] = 7;
    arr[12][28] = 8;
    let i =0;
    while(i<10)
    {   let l = parseInt(rng()*22);
        let c = parseInt(rng()*30);
        if(arr[l][c] == 1) arr[l][c] = 11, i++;
    }
    arr[2][23] = arr[2][24] = arr[1][24] = arr[1][25] = 9;
    arr[2][25] = arr[1][22] = arr[1][23] = arr[1][26] = 10;
    // arr[5][30] = arr[22][8] = arr[8][3] = arr[10][20] = 11;
    // for(var y=7;y<17;y++)
    //     for(var x=10;x<32;x++) arr[y][x] = 12;
    return arr;
}
function lv2(arr)
{   //add Walls
    Llvl(arr);
    arr[0][16] = arr[0][15] = 3;
    arr[1][1] = arr[22][30] = 4;
    arr[9][9] = arr[9][15] = 5;
    return arr;
}
function lv3(arr)
{   //add Walls
    Tlvl(arr);
    arr[0][16] = arr[0][15] = 3;
    arr[4][5] = arr[6][5] = arr[4][7] = arr[6][7] = 6;
    return arr;
}
function lv4(arr)
{   //add Walls
    Hlvl(arr);
    arr[0][6] = arr[0][5] = 3;
    arr[1][1] = arr[22][30] = 4;
    arr[9][9] = arr[9][15] = 5;
    return arr;
}
function lv5(arr)
{   //add Walls
    Clvl(arr);
    arr[0][26] = arr[0][25] = 3;
    return arr;
}