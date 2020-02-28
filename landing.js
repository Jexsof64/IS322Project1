(function () {
	
	var slidePosition = 0;

	function changeSlidePosition() {
		var slideOne = document.querySelector('.carousel .slide#slide' + slidePosition);

		slideOne.className = 'slide';

		if (slidePosition === 2) {
			slidePosition = 0;
		} else {
			slidePosition++;
		}

		var slideTwo = document.querySelector('.carousel .slide#slide' + slidePosition);
		slideTwo.className = 'slide active';
	}

	setInterval(changeSlidePosition, 10000);

})();