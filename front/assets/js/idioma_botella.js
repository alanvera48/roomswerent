
let español = d.querySelector('.español');
let ingles = d.querySelector('.ingles');


//Header
let $habitaciones = d.getElementById('habitaciones');
let $contacto = d.getElementById('contacto');

//Section 1 - Index

//let $span_hab = d.querySelector('.span-hab');

let $h5_balmes = d.querySelector('.h5-balmes');
let $p_balmes_desc = d.querySelector('.p-balmes-desc');

let $contac_h5 = d.querySelector('.contac-h5');
let $span_cont = d.querySelector('.span-cont');
let $a_contact = d.querySelector('.a-contact');

let $p_footer = d.querySelector('.p-footer-hab');



español.onclick = ()=>{
	
	$habitaciones.innerHTML = 'HABITACIONES';
	$contacto.innerHTML = 'CONTACTO';


	$h5_balmes.innerHTML = 'Porque este es el lugar para estar?';
	$p_balmes_desc.innerHTML = 'Este piso ubicado en el Raval ,un barrio dinámico que ofrece exposiciones vanguardistas en el Museo de Arte Contemporáneo de Barcelona (MACBA) y el Centro de Cultura Contemporánea de Barcelona (CCCB). <br><br> Los bares bohemios, las tiendas de diseño a la última y el arte callejero es el símbolo de este barrio. <br>A pasos del Mercado de La Boquería, y de las Cafeterías informales que se encuentran en la Rambla del Raval.';

	$contac_h5.innerHTML = 'Te ha gustado?';
	$span_cont.innerHTML = 'Consulta diponibilidad';
	$a_contact.innerHTML = 'Contactanos!';


	$p_footer.innerHTML = 'Todos los derechos reservados © 2021 | <i class="fas fa-heart text-red-400"></i> RoomsWeRent'


 }

ingles.onclick = ()=>{


	$habitaciones.innerHTML = 'ROOMS';
	$contacto.innerHTML = 'CONTACT';

	//$span_hab.innerHTML = 'The assembly of the Eixample.';
	$h5_balmes.innerHTML = 'Why is this the place to be?';
	$p_balmes_desc.innerHTML = 'This apartment located in the Raval, a dynamic neighborhood that offers avant-garde exhibitions at the Museum of Contemporary Art of Barcelona (MACBA) and the Center for Contemporary Culture of Barcelona (CCCB). <br> <br> Bohemian bars, trendy designer shops and street art is the symbol of this neighborhood. <br> A few steps from the La Boquería Market, and the informal cafeterias found on the Rambla del Raval.';

	$contac_h5.innerHTML = 'Did you like it?';
	$span_cont.innerHTML = 'Check availability';
	$a_contact.innerHTML = 'Contact us!';


	$p_footer.innerHTML = 'All rights reserved © 2021 | <i class = "fas fa-heart text-red-400"> </i> RoomsWeRent'



}