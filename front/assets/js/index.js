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



d.addEventListener('DOMContentLoaded', (e)=>{

	let $menu = d.querySelector('.navbar');

	d.addEventListener('click', e =>{
		if(e.target.matches('.fa-bars')){
			$menu.classList.toggle('active-nav');
		}else if(e.target.matches('.fa-chevron-up')){
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}else return false			
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