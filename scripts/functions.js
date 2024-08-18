document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
var key = [];

function keydown(event)
{   key[event.keyCode] = true;
    //console.log(event.keyCode)
}
function keyup(event)
{   key[event.keyCode] = false;
}

function r(x,y,w,h,c)
{   ctx.fillStyle = c;
    ctx.fillRect(x,y,w,h);
}
function sav(){ctx.save()};
function res(){ctx.restore()};
function tra(x,y){ctx.translate(x,y)};
function scl(x,y){ctx.scale(x,y)};
function rtt(ang){ctx.rotate(ang)};
function abs(a){return Math.abs(a)};