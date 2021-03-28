
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};



$(document).ready(function() {
	$(".main-block__slider").slick({
		dots: true,
	});
	$(".sertificate-inner").slick({
		arrows: false,
		slidesToShow:4,

		responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:2,
					arrows: true,
				}
			},
			{
				breakpoint: 680,
				settings: {
					slidesToShow:1,
					arrows: true,
				}
			},
		]
	});

	$(".header-burger").click(function() {
		$(".header-mobile, .header-burger, body").toggleClass("active");
	});

	$(".main-block__burger").click(function() {
		$(".main-block__burger, .main-block__left-list").toggleClass("active");
	})

	let body = $('body');
	console.log(body);
	if (isMobile.any()) {
		body.addClass("touch");
		let arrow = $('.main-block__left-list__item-arrow');
		arrow.click(function() {
			$(this).toggleClass("active");
			let menu = $(this).next();
			menu.toggleClass("open");
		})
		
		
	} else{
		body.addClass('mouse');
	}

});

