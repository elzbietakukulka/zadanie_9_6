var list = document.getElementById('list'); //Elements with id "list"
var add = document.getElementById('addElem');// Elements with id "button"

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var liElements = document.getElementsByTagName('li');
	element.innerHTML = 'item' + liElements.length;
	list.appendChild(element);
});