var arr = [];
var _body = document.getElementsByTagName('body')[0];
	for (var i = 0; i < 9 * 7; i++) {	
		var square = document.createElement("div");
		arr.push(square);
		_body.appendChild(square);
	}

function Color(arr) {
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		count++;
		arr[i].style.float = "left";
		arr[i].style.width = "11.1%";
		arr[i].style.height = "11.1%"
		arr[i].style.paddingBottom = "11.1%"
		if (count % 2 === 0) {
			arr[i].style.backgroundColor = "red";			
		} else {
			arr[i].style.backgroundColor = "black";
		}
	}
}
Color(arr);