function AJAXRun(str,region)
{

  document.getElementById(region).innerHTML = "<div style='padding:5px;'><img src='inc_ajax/ajax16.gif' /> <span style='margin-left:8px;font-size:12px;font-weight:bold;'>Please wait...</span></div>";

var xmlHttp;
if (str.length==0)
  { 
  document.getElementById(region).innerHTML="";
  return;
  }
xmlHttp=GetXmlHttpObject();
if (xmlHttp==null)
  {
  alert ("Browser does not support HTTP Request");
  return;
  } 
var url=str;
xmlHttp.onreadystatechange=function()
{
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
 { 
 document.getElementById(region).innerHTML = xmlHttp.responseText;
 } 
}
xmlHttp.open("GET",url,true);
xmlHttp.send(null);


function GetXmlHttpObject()
{
var xmlHttp=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 // Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}
} 
