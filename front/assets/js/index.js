const d = document;

let img1 = d.querySelector('.comen1');
let img2 = d.querySelector('.comen2');	
let img3 = d.querySelector('.comen3');
let select1 = d.querySelector('.active1');
let select2 = d.querySelector('.active2');
let select3 = d.querySelector('.active3');	

function SliderCome2 () {
	select2.addEventListener('click', e=>{
	img1.style.transform = 'translateX(-100%)';
	img2.style.transform = 'translateX(-100%)';
	img3.style.transform = 'translateX(-100%)';
	})
}

function SliderCome3 () {
	select3.addEventListener('click', e=>{
	img1.style.transform = 'translateX(-200%)';
	img2.style.transform = 'translateX(-200%)';
	img3.style.transform = 'translateX(-200%)';
	})
}

function SliderCome1 () {
	select1.addEventListener('click', e=>{
	img1.style.transform = 'translateX(0%)';
	img2.style.transform = 'translateX(100%)';
	img3.style.transform = 'translateX(100%)';
	})
}

  const Toggle = (e)=>{
    let _tog = document.querySelector('.navbar-collapse');
    _tog.classList.toggle('collapse')
  }



d.addEventListener('DOMContentLoaded', (e)=>{

	let $menu = d.querySelector('.navbar');
	let $navbar_toggler = d.querySelector('.navbar-toggler');

	$navbar_toggler.addEventListener('click', (e)=>{
		let _tog = document.querySelector('.navbar-collapse');
		_tog.classList.toggle('collapse')
	})


	d.addEventListener('scroll',e =>{
		let scroll = d.documentElement.scrollTop;
		if(scroll) $menu.classList.remove('active-nav')	
	})


	d.addEventListener('scroll', e=>{
		let $row  = d.querySelector('.row-up');
		let $scroll = d.documentElement.scrollTop;

		 if($scroll > 200){
		 	$row.classList.remove('up-noActive')
			$row.classList.add('up-active')
		}else{
			$row.classList.remove('up-active')
			$row.classList.add('up-noActive')
		} 

	})

	SliderCome2();
	SliderCome3();
	SliderCome1();


})

$('body').on('mouseenter mouseleave','.nav-item',function(e){
	if ($(window).width() > 750) {
		var _d=$(e.target).closest('.nav-item');_d.addClass('show');
		setTimeout(function(){
		_d[_d.is(':hover')?'addClass':'removeClass']('show');
		},1);
	}
});	

$(document).ready(function() {
	$('body.hero-anime').removeClass('hero-anime');
  });

  (function($) { "use strict";

	//Switch dark/light
	
	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 