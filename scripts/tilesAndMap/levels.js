function empty()
{   return Array.from({length:24},(i) => Array.from({length:32}, (r)=>0));
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
            }
        }
    }
}

function sqlv(arr)
{   for(var y=1;y<cnv.height/32-1;y++)
        for(var x=1;x<cnv.width/32-1;x++)   arr[y][x] = arr[y][x] = 1;
}

function Llvl(arr)
{   for(var y=1;y<11;y++)
        for(var x=1;x<cnv.width/32-1;x++)   arr[y][x] = 1;

    for(var y=11;y<23;y++)
        for(var x=22;x<cnv.width/32-1;x++)  arr[y][x] = 1;
}

function Tlvl(arr)
{   for(var y=1;y<cnv.height/32-1;y++)
        for(var x=1;x<cnv.width/32-1;x++) arr[y][x] = 1;
    for(var y=1;y<15;y++)
        for(var x=1;x<12;x++)  arr[y+8][x+19] = arr[y+8][x] = 0;
}

function Hlvl(arr)
{   for(var y=1;y<cnv.height/32-1;y++)
        for(var x=1;x<cnv.width/32/3;x++) arr[y][x+20] = arr[y][x] = 1;
    for(var y=8;y<15;y++)
        for(var x=1;x<11;x++) arr[y][x+10] = 1;
}

function Clvl(arr)
{   for(var y=1;y<cnv.height/32/3-1;y++)
        for(var x=1;x<cnv.width/32-1;x++) arr[y+16][x] = arr[y][x] = 1;
    for(var y=1;y<cnv.height/32/2-1;y++)
        for(var x=1;x<cnv.width/32/3-1;x++) arr[y+6][x] = arr[y][x] = 1;
}

function lv1(arr)
{   //add Walls
    sqlv(arr);
    arr[0][16] = arr[0][15] = 3;
    arr[1][1] = arr[22][30] = 4;
    arr[9][9] = arr[9][15] = 5;
    arr[4][5] = arr[6][5] = arr[4][7] = arr[6][7] = 6;
    arr[12][9] = arr[12][15] = 7;
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
    return arr;
}
function lv5(arr)
{   //add Walls
    Clvl(arr);
    arr[0][26] = arr[0][25] = 3;
    return arr;
}