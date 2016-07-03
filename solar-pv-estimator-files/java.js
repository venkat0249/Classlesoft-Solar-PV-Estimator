function toggleshow(e)
{
	var ele = document.getElementById(e);
	if(ele.style.display == "block" || ele.style.display == "") {
    		ele.style.display = "none";
  	}
	else {
		ele.style.display = "";
	}
}

function toggleforce(e,f)
{
	var ele = document.getElementById(e);
	ele.style.display=f;

}

function toggleshowtext(e,a1,a2)
{
	var ele = document.getElementById(e);
	if(ele.innerHTML==a1) {
    		ele.innerHTML = a2;
  	}
	else {
		ele.innerHTML = a1;
	}
}

function ask(p,u)
{
 var r = confirm(p);
 if (r) {window.location.href=u;}
 return(r);
}

function settext(e,txt)
{
	var ele = document.getElementById(e);
	ele.innerHTML = txt;
}

function gettext(e)
{
	var ele = document.getElementById(e);
	return(ele.innerHTML);
}

//for SmallWin
function smallwin(url,ctrl) {
var formname = ctrl.form.name;
var controlname = ctrl.name;
var windowReference;
if (url.indexOf('?')==-1) {url+='?';}
  windowReference = window.open('inc_smallwins/'+url+'&form='+formname+'&control='+controlname,'windowName',
  "width=550,height=170,toolbar=0,status=0,location=0,resizable=0,scrollbars=1");
  if (!windowReference.opener)
    windowReference.opener = self;
}

//For SmartCombo
function smartcombo_get(divflow,control,url)
{
var sendtext = control.value;
var formname = control.form.name;
var controlname = control.name;
if (url.indexOf('?')==-1) {url+='?';}
var uri='inc_smartcombo/'+url+'&text='+escape(sendtext)+'&form='+formname+'&control='+controlname;
AJAXRun(uri,divflow,1)
toggleforce(divflow,"");
}
function smartcombo_set(control,value){control.value=value;}
