window.onload = function () {
	var h2 = document.querySelectorAll('.foot_content h2');
	console.log(h2);
	for (let i = 0; i < h2.length; i++) {
		h2[i].onclick = function () {
			var ul = this.nextSibling.nextSibling;
			var display = window.getComputedStyle(ul, null)["display"];
			if ( display == 'none') {
				ul.style.display = 'block';
			} else {
				ul.style.display = 'none';	
			}
		}
	}

	var China = document.querySelector('.district');
	var cliam = document.querySelector('.cliam');
	var copyright = document.querySelector('.copyright');
	cliam.insertBefore(China, copyright);


}

