var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");
var delbtns = document.querySelectorAll(".delete");

function inputLength(){
	return input.value.length;
}

delbtns.forEach(function(i){
	i.addEventListener("click", removeParent);
});

function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent);
  evt.target.parentNode.remove();
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

lis.forEach(function(elem) {
    elem.addEventListener("click", function() {
        elem.classList.toggle("done")
    });
});

