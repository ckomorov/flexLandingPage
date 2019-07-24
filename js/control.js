$(document).ready( function() {

	'use strict';


//   Float Anchors

	$('a[href^="#"]').on('click', function(){

		let target = $(this).attr('href');

		$('html, body').animate(
			{
				scrollTop: $(target).offset().top
			}, 800);
	});


//  Fixed Navigation Block

	let offset = $('#bottom-header').offset();

	$(window).scroll( function() {

		if ($(window).scrollTop() > offset.top) {
			$("#bottom-header").addClass('fixedNav');
		} else {
			$("#bottom-header").removeClass('fixedNav');
		}
	});


//  Slick Slider
	
	if (window.innerWidth > 1024){
		$('#slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000});
	} else { 
		$('#slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000
	});
	};
	

//  View All Gallery

	$('#gallery-button').on('click', function(){
		let content = '<div id="line4" class="flex_main flex_nowrap flex_jcontent-between"><div id="img01" class="line-img"></div><div id="img02" class="line-img"></div></div><div class="img-address"><p>Marina Palms / <a href="#">North Miami Beach, FL 33162</a></p></div>';
		$('#gallery-box').append(content);
		$(this).remove();
	});


//  Add/Remove Modal Box

	$('#modal-box, #black-fill').hide();

	$('#call').on('click', function(){
		$('#modal-box, #black-fill').show();
	});

	$('#modal-close, #black-fill').on('click', function(){
		$('#modal-box, #black-fill').hide();
	});



});

