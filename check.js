function calcEve()
{
  var x=document.getElementById("ooe").value;
  x=parseInt(x);
  if(x%2===0)
    {
    alert("Even");
    }
  else
    alert("Odd");
}
function calcFib()
{
    var a=document.getElementById("fib").value;
    let y1=0,y2=1;
    var res,i,msg="";
    if(a<=0)
    {
        alert("Invalid Input");
    }
    else if(a==1)
    {
        alert("0");
    }
    else
    {
        msg=y1+" "+y2;
        for(i=2;i<=a;i++)
        {
            res=y1+y2;
            msg+=" "+res;
            y1=y2;
            y2=res;
        }
    alert(msg);
    }
}
function calcPrime()
{
    var p=document.getElementById("prim").value;
    var i,t=0;
    for(i=2;i<p;i++)
    {
        if(p%i==0)
        {
            alert("Not a prime");
            t=-1;
            break;
        }
    }
    if(t==0)
    {
        alert("Prime");
    }
}
function calcu()
{
    var v1=document.getElementById("var1").value;
    var v2=document.getElementById("var2").value;
    v1=parseInt(v1);
    v2=parseInt(v2);
    var s,d,q,pr,r;
    s=v1+v2;
    d=v1-v2;
    q=v1/v2;
    pr=v1*v2;
    r=v1%v2;
    alert(s+" "+d+" "+q+" "+pr+" "+r);
}