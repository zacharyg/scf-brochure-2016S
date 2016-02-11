$('.splash').parallax({imageSrc: '/img/background.jpg'});

function scrollTo(link, target) {
	link.click(function(e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: target.offset().top - 0
		}, 800);
	});
}

scrollTo($('#chevron'), $('#about'));