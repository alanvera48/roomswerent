
let español = d.querySelector('.español');
let ingles = d.querySelector('.ingles');


//Header
let $habitaciones = d.getElementById('habitaciones');
let $contacto = d.getElementById('contacto');

//Section 1 - Index

let $p_balmes_desc = d.querySelector('.p-balmes-desc');

let $contac_h5 = d.querySelector('.contac-h5');
let $span_cont = d.querySelector('.span-cont');
let $a_contact = d.querySelector('.a-contact');

let $p_footer = d.querySelector('.p-footer-hab');



español.onclick = ()=>{
	
	$habitaciones.innerHTML = 'HABITACIONES';
	$contacto.innerHTML = 'CONTACTO';


	$p_balmes_desc.innerHTML = 'Ubicado en el corazón de Barcelona a metros de Plaza Cataluña, rodeado de tiendas restaurantes y bares.<br><br> Un piso soleado, con habitaciones sencillas pero amuebladas muy bonitas. <br> Un piso de pocas habitaciones para lograr una atmosfera de amistad y confianza.';

	$contac_h5.innerHTML = 'Te ha gustado?';
	$span_cont.innerHTML = 'Consulta diponibilidad';
	$a_contact.innerHTML = 'Contactanos!';


	$p_footer.innerHTML = 'Todos los derechos reservados © 2021 | <i class="fas fa-heart text-red-400"></i> RoomsWeRent'


 }

ingles.onclick = ()=>{


	$habitaciones.innerHTML = 'ROOMS';
	$contacto.innerHTML = 'CONTACT';

	
	$p_balmes_desc.innerHTML = 'Located in the heart of Barcelona a few meters from Plaza Catalunya, surrounded by shops, restaurants and bars. <br> <br> A sunny apartment, with simple but very beautiful furnished rooms. <br> A flat with few rooms to achieve an atmosphere of friendship and trust.';

	$contac_h5.innerHTML = 'Did you like it?';
	$span_cont.innerHTML = 'Check availability';
	$a_contact.innerHTML = 'Contact us!';


	$p_footer.innerHTML = 'All rights reserved © 2021 | <i class = "fas fa-heart text-red-400"> </i> RoomsWeRent'



}