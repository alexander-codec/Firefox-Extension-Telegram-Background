console.log("started");
function addMenu() {
	var li = document.createElement("li");
	var a = document.createElement("a");
	   
	var i = document.createElement("i");
	i.setAttribute("class", "icon icon-new-background");
	   
	var span = document.createElement("span");
	span.appendChild(document.createTextNode("Novo grupo"));
	   
	a.appendChild(i);
	a.appendChild(span);
	   
	li.appendChild(a);
	li.setAttribute("onclick", "changeChat()");
	   
	document.getElementsByClassName("dropdown-menu")[0].appendChild(li);
	
	var myScript = window.top.document.createElement('script');
	myScript.type = 'text/javascript';
	myScript.setAttribute('src','script.js');
	window.top.document.getElementsByTagName('head')[0].appendChild(myScript);
}
window.addEventListener("load", function(){
	addMenu();
});