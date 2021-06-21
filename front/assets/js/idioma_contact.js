
let español = d.querySelector('.español');
let ingles = d.querySelector('.ingles');


//Header
let $habitaciones = d.getElementById('habitaciones');
let $contacto = d.getElementById('contacto');

//Section 1 - Index

let $h5_contact_1 = d.querySelector('.h5_contact_1');
let $span_contact_1 = d.querySelector('.span_contact_1');
let $a_contact_1 = d.querySelector('.a_contact_1');


let $h5_box_whasap = d.querySelector('.h5_box_whasap');
let $p_box_whasap = d.querySelector('.p_box_whasap');


let $p_footer = d.querySelector('.p-footer-hab');



español.onclick = ()=>{
	
	$habitaciones.innerHTML = 'HABITACIONES';
	$contacto.innerHTML = 'CONTACTO';

	$h5_contact_1.innerHTML = 'Te gusto algo de lo que viste?';
	$span_contact_1.innerHTML = 'Contacta directamente con nosotros';
	$a_contact_1.innerHTML = 'Contactanos';

	$h5_box_whasap = 'O Tambien puedes contactarnos vía WhatsApp';
	$p_box_whasap  = 'Podes contactarte directamente con nosotros via Whasapp las 24hs del dia';


	$p_footer.innerHTML = 'Todos los derechos reservados © 2021 | <i class="fas fa-heart text-red-400"></i> RoomsWeRent'


 }

ingles.onclick = ()=>{


	$habitaciones.innerHTML = 'ROOMS';
	$contacto.innerHTML = 'CONTACT';

	$h5_contact_1.innerHTML = 'Did you like any of what you saw?';
	$span_contact_1.innerHTML = 'Contact us directly';
	$a_contact_1.innerHTML = 'Contact us';

	$h5_box_whasap.innerHTML = 'Or you can also contact us via Whasapp!';
	$p_box_whasap.innerHTML = 'You can contact us directly via WhatsApp 24 hours a day';


	$p_footer.innerHTML = 'All rights reserved © 2021 | <i class = "fas fa-heart text-red-400"> </i> RoomsWeRent'



}