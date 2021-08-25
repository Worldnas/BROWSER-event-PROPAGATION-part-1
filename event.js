function show(){
	 //alert('done');
	var p=document.getElementById("result")
	p.innerHTML="you registered"
	
}
var link=document.getElementById("mylink")
link.onclick=eror
function eror(){
	alert("done");
	return false;
}
function divtext(x){
	x.innerHTML="<a href=www.google.com>google</a>";
}
function mov(over){
	over.style.backgroundColor="red";
	over.style.textAlign="center";
	over.innerHTML="you hovered me";
}
function mout(out){
	out.style.backgroundColor="black";
	out.style.textAlign="left";
	out.innerHTML="this is my content";
}