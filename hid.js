function hideFunc()
{
  var s=document.getElementById("hideC").value;
  s=s.split(" ");
  var a=[];
  j=0;
  for(var i=0;i<s.length;i++)
  {
    if(s[i]==="client:")
      a[j++]=i;
  }
  for(i=0;i<a.length;i++)
  {
    s[a[i]]="<Redacted>";
  }
  s=s.join(" ");
  alert(s);
}
