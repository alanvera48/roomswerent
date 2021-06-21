
let español = d.querySelector('.español');
let ingles = d.querySelector('.ingles');


//Header
let $habitaciones = d.getElementById('habitaciones');
let $contacto = d.getElementById('contacto');

//Section 1 - Index

let $span_hab = d.querySelector('.span-hab');

let $h5_balmes = d.querySelector('.h5-balmes');
let $span_balmes_descr = d.querySelector('.span-balmes-descr');
let $p_balmes_desc = d.querySelector('.p-balmes-desc');

let $contac_h5 = d.querySelector('.contac-h5');
let $span_cont = d.querySelector('.span-cont');
let $a_contact = d.querySelector('.a-contact');

let $p_footer = d.querySelector('.p-footer-hab');



español.onclick = ()=>{
	
	$habitaciones.innerHTML = 'HABITACIONES';
	$contacto.innerHTML = 'CONTACTO';


	$p_balmes_desc.innerHTML = 'Este piso ubicado en una de las calles con nombre de patrona de Barcelona ,muy cerca del  Palau Nacional de Montjuïc, y del Museu Nacional d Art de Catalunya, decorado al dedillo con balcon y sol todo el día. <br><br> Las habitaciones acogedoras y bien amuebladas están disponibles para alquilar en un moderno apartamento de 5 dormitorios';

	$contac_h5.innerHTML = 'Te ha gustado?';
	$span_cont.innerHTML = 'Consulta diponibilidad';
	$a_contact.innerHTML = 'Contactanos!';


	$p_footer.innerHTML = 'Todos los derechos reservados © 2021 | <i class="fas fa-heart text-red-400"></i> RoomsWeRent'


 }

ingles.onclick = ()=>{


	$habitaciones.innerHTML = 'ROOMS';
	$contacto.innerHTML = 'CONTACT';

	
	$p_balmes_desc.innerHTML = 'This apartment located in one of the streets named after the patron saint of Barcelona, ​​very close to the Palau Nacional de Montjuïc, and the Museu Nacional d Art de Catalunya, decorated to the letter with a balcony and sun all day. <br> <br> Cozy and well-furnished rooms are available to rent in a modern 5-bedroom apartment';

	$contac_h5.innerHTML = 'Did you like it?';
	$span_cont.innerHTML = 'Check availability';
	$a_contact.innerHTML = 'Contact us!';


	$p_footer.innerHTML = 'All rights reserved © 2021 | <i class = "fas fa-heart text-red-400"> </i> RoomsWeRent'



}