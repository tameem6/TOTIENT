function cubeCalc()
{
    var a=document.getElementById("cub").value;
    a=a.split(" ").map(Number);
    var cube=[];
    let i=0,j=0;
    for(i=0;i<a.length;i++)
    {
        if(a[i]%2==0)
        {
            cube[j++]=Math.pow(a[i],3);
        }
    }
    alert(cube);
}
function sdCalc()
{
    var ar=document.getElementById("stan").value;
    ar=ar.split(" ").map(Number);
    for(var i=0;i<ar.length;i++)
    {
        ar[i]=parseInt(ar[i]);
    }
    var sum = ar.reduce(function(a, b) { return a + b; }, 0);
    var mean=sum/ar.length;
    var dif=[];
    dif=ar.map(function(a){ return a-mean;},0);
    var sd;
    sd=dif.reduce(function(a,b){return Math.pow(a,2)+Math.pow(b,2);});
    sd=Math.sqrt(sd)/dif.length;
    alert(sd);
}
function sumAll(... args)// Call in arCheck)()
{
    let sum=0;
    for(let arg of args)
    {
        sum+=arg;
    }
    return sum;
}

function argCheck()
{
    let arr = document.getElementById("args").value;
    arr=arr.split(" ").map(Number);
    let s=sumAll(... arr);
    alert(s);
}
function flip()
{
    let c=Math.floor(Math.random()*2);
    if(c==0)
        alert("Heads!");
    else
        alert("Tails!");
}
function hide()
{
    var str = document.getElementById("cli").value;
  var arr = str.split(" ");
  alert(arr);
}