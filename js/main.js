;(function($){
	$(function(){
		$('.ba-slider').slick({
			dots:true,
			infinite:true
		});

		var qtyField =$('.ba-product__qty-field'),
		qtyUp = $('.ba-product__qty-up'),
		qtyDown = $('.ba-product__qty-down');

		qtyUp.on('click', function(event){
			event.preventDefault();

			var oldVal = qtyField.val();
			qtyField.val(++oldVal);
		});

		qtyDown.on('click', function(event){
			event.preventDefault();

			var oldVal = qtyField.val();

			if(--oldVal > 0 ){
				qtyField.val(oldVal);
			}
		});


		var prodColor=$('[name="product_color"]'),
		phone = $('img#myphoto');

		console.log(prodColor.val());

		prodColor.on('change', function(){

			if (prodColor.val() === 'grey') {
				phone.hide('slow');
				phone.attr({
					'src':'img/whitehead.png',
					// 'src': 'http://s1.iconbird.com/ico/0612/iloviconsbysvengraph/w512h5121339361119headphones.png',
					'alt':'white'
				});
				phone.show('slow');
				prodColor.val('black');

			} else{
				phone.hide('slow');
				phone.attr({
					'src':'img/headphones1.png',
					'alt':'white'
				});
				phone.show('slow');
				prodColor.val('grey');
			}

		})



		// var prodColor = $('[name = "product_color"]'),
		// phone = $('img#myphoto');

		// prodColor.on('change', function(){
		// 	alert("change сработал");
		// 	if( prodColor.val() !== 'black'){
		// 		console.log(prodColor.val());
		// 	phone.attr({
		// 		'src': '../img/whitehead.png',
		// 		'alt': 'My Photo'
		// 	});
		// }
		// else {
		// 	console.log(prodColor.val());
		// 	phone.attr({
		// 		'src': '../img/headphones1.png',
		// 		'alt': 'My Photo'
		// 	});
		// }
		// });

		 	price =$('.ba-product__price');
		// var but = $('.ba-button'),
		// 	phone = $('img'),
		// 	price =$('.ba-product__price');

		// but.on('click', function(event){
		// 	event.preventDefault();
		// 	console.log(12);
		// 	price.css('color', 'green');
		// 	// phone.html("[src='../img/head.jpg']");
		// 	phone.css('opacity', '.1');

		// });

var but=$('#add');

but.on('click', function(event){
	event.preventDefault();
	console.log('add');
	phone.hide('slow');
});

});
})(jQuery);
