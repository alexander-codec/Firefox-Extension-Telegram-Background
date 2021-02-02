var images = ['https://picsum.photos/200/300/?random', 'https://picsum.photos/200/300/?random', 'https://picsum.photos/200/300/?random'];
var index = 0;

function buildImage() {
    document.getElementById('changebackground').style.backgroundImage = 'url('+images[index]+')';
}

function changeImage() {
    index++;
    if (index >= images.length) index = 0;
    document.getElementById('changebackground').style.backgroundImage = 'url(' + images[index] + ')';
	var span = document.getElementById('changebackground');span.setAttribute('background-image', 'url(' + images[index] + ')');
}