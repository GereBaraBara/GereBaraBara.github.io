window.addEventListener('load', function(){
	new Glider(document.querySelector('.carrusel__lista'), {
		slidesToShow: 3,
		slidesToScroll: 2,
    	draggable: true,
		dots: '.carrusel__indicadores',
		arrows: {
			prev: '.carrusel__anterior',
			next: '.carrusel__siguiente'
		},
	
	});
});