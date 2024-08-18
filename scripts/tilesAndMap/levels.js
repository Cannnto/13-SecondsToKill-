function empty(arr)
{   return arr = Array.from({length:24},(i) => Array.from({length:32}, (r)=>0));
}
function cma(arr)
{   switch(clv)
    {   case 0: lv1(arr);break;
        case 1: lv2(arr);break;
    }

    for(var lne = 0;lne < arr.length; lne++) // Linhas
    {   for(var col = 0; col < arr[lne].length; col++) // Colunas
        {   switch(Number(arr[lne][col])) // Tipos de Tiles
            {                                  //set X   set Y
                case 1: arr[lne][col] = new flr(col*32,lne*32);break;  // floor
                case 2: arr[lne][col] = new Wal(col*32,lne*32);break;  // wall
                case 3: arr[lne][col] = new dor(col*32,lne*32);break;
                case 4: arr[lne][col] = new Spw(col*32,lne*32);break;
            }
        }
    }
}


function lv1(arr)
{   //add Walls
    for(var x=0;x<cnv.width/32;x++)     arr[0][x] = arr[23][x] = 2;
    for(var y=0;y<cnv.height/32;y++)    arr[y][0] = arr[y][31] = 2;
    arr[0][17] = arr[0][16] = arr[0][15] = 3;

    for(var y=1;y<cnv.height/32-1;y++)
        {for(var x=1;x<cnv.width/32-1;x++)   arr[y][x] = arr[y][x] = 1};

    arr[1][1] = arr[22][30] = 4;
}
function lv2(arr)
{   //add Walls
    for(var x=0;x<cnv.width/32/1.5;x++) arr[11][x] = arr[0][x] = 2;
    for(var x=21;x<cnv.width/32;x++)    arr[23][x] = arr[0][x] = 2;

    arr[0][17] = arr[0][16] = arr[0][15] = 3;
    for(var y=1;y<11;y++)
    for(var x=1;x<cnv.width/32-1;x++)arr[y][x] = 1;

    for(var y=11;y<23;y++)
    for(var x=22;x<cnv.width/32-1;x++)arr[y][x] = 1;

    arr[1][1] = arr[22][30] = 4;

    for(var y=0;y<cnv.height/32/2;y++)  arr[y][0] = arr[y][31] = 2;
    for(var y=11;y<cnv.height/32;y++)   arr[y][21] = arr[y][31] = 2;
}