
let español = d.querySelector('.español');
let ingles = d.querySelector('.ingles');


//Header
let $habitaciones = d.getElementById('habitaciones');
let $contacto = d.getElementById('contacto');

//Section 1 - Index

let $h5_balmes = d.querySelector('.h5-balmes');


let $p_balmes_desc = d.querySelector('.p-balmes-desc');

let $contac_h5 = d.querySelector('.contac-h5');
let $span_cont = d.querySelector('.span-cont');
let $a_contact = d.querySelector('.a-contact');

let $p_footer = d.querySelector('.p-footer-hab');



español.onclick = ()=>{
	
	$habitaciones.innerHTML = 'HABITACIONES';
	$contacto.innerHTML = 'CONTACTO';

	$h5_balmes.innerHTML = 'El salón de actos';


	$p_balmes_desc.innerHTML = 'Ubicado en una de las avenidas mas bonitas e importantes de Barcelona. <br>Si eres una persona social te encantara este piso. <br><br>Te sentirás en la cima del mundo en la terraza: tiene unas vistas gloriosas para relajarse o compartir con amigos.';

	$contac_h5.innerHTML = 'Te ha gustado?';
	$span_cont.innerHTML = 'Consulta diponibilidad';
	$a_contact.innerHTML = 'Contactanos!';


	$p_footer.innerHTML = 'Todos los derechos reservados © 2021 | <i class="fas fa-heart text-red-400"></i> RoomsWeRent'


 }

ingles.onclick = ()=>{


	$habitaciones.innerHTML = 'ROOMS';
	$contacto.innerHTML = 'CONTACT';

	$h5_balmes.innerHTML = 'The assembly hall';


	$p_balmes_desc.innerHTML = 'Located in one of the most beautiful and important avenues in Barcelona. If you are a social person you will love this apartment. <br> <br>You will feel on top of the world on the terrace - it has glorious views to relax or share with friends.';

	$contac_h5.innerHTML = 'Did you like it?';
	$span_cont.innerHTML = 'Check availability';
	$a_contact.innerHTML = 'Contact us!';


	$p_footer.innerHTML = 'All rights reserved © 2021 | <i class = "fas fa-heart text-red-400"> </i> RoomsWeRent'



}