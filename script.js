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
var images = ['https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-1.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-2.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-3.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-4.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-5.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-6.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-7.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-8.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-9.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-10.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-11.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-12.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-13.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-14.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-15.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-16.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-17.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-18.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-19.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-20.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-21.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-22.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-23.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-24.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-25.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-26.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-27.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-28.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-29.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-30.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-31.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-32.svg', 'https://raw.githubusercontent.com/alexander-codec/Firefox-Extension-Telegram-Background/main/backgrounds/pattern-33.svg'];
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