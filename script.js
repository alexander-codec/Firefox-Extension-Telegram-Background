console.log("started");
function addmenu() {
	var li = document.createElement("li");
	var a = document.createElement("a");
	   
	var i = document.createElement("i");
	i.setAttribute("class", "icon icon-new-background");
	   
	var span = document.createElement("span");
	span.appendChild(document.createTextNode("Change background"));
	   
	a.appendChild(i);
	a.appendChild(span);
	   
	li.appendChild(a);
	li.setAttribute("onclick", "changeImage()");
	   
	document.getElementsByClassName("dropdown-menu")[0].appendChild(li);
	
	document.getElementsByClassName("im_history_wrap")[0].setAttribute("id", "changebackground");
}
setTimeout(function() {
	addmenu();
}, 3000);
var change = `
var images = ['https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-1.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-2.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-3.svg'];
var index = localStorage.getItem("bg");
if(index == null){
	index = 0
}

function buildImage() {
    document.getElementById('changebackground').style.backgroundImage = 'url(' + images[index] + ')';
}

function changeImage() {
    index++;
    if (index >= images.length) index = 0;
    document.getElementById('changebackground').style.backgroundImage = 'url(' + images[index] + ')';
	localStorage.setItem("bg", index);
}
setTimeout(function() {
	buildImage();
}, 3000);
`;

var script = document.createElement('script');
script.textContent = change;
(document.head||document.documentElement).appendChild(script);