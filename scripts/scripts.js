var links = document.getElementById("imageGallery").getElementsByTagName("a");

window.onload = function() {
	prepareGallery();
}

function prepareGallery() {
    for (var i = 0; i < links.length; i++) {
        //console.log(i);
        links[i].onclick = function () {
            					showPicOne(this);
            					return false;
        					}
    }
    showPicOne(links[0])
    links[0].parentNode.classList.add('active');
}

function showPicOne(whichpic) {
	removeActive();
    whichpic.parentNode.className = 'active';
	var source = whichpic.getAttribute('href');
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);

	var text = whichpic.getAttribute('title');
	var description = document.getElementById('description');
	//description.firstChild.nodeValue = text;
	description.innerHTML = text;

    //console.log(description.childNodes[0]);
}

function removeActive() {
    for (var i = 0; i < links.length; i++) {
        links[i].parentNode.className = ''
    }
}

