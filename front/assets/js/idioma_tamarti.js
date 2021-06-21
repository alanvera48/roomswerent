
let español = d.querySelector('.español');
let ingles = d.querySelector('.ingles');


//Header
let $habitaciones = d.getElementById('habitaciones');
let $contacto = d.getElementById('contacto');

//Section 1 - Index

let $span_hab = d.querySelector('.span-hab');


let $p_balmes_desc = d.querySelector('.p-balmes-desc');

let $contac_h5 = d.querySelector('.contac-h5');
let $span_cont = d.querySelector('.span-cont');
let $a_contact = d.querySelector('.a-contact');

let $p_footer = d.querySelector('.p-footer-hab');



español.onclick = ()=>{
	
	$habitaciones.innerHTML = 'HABITACIONES';
	$contacto.innerHTML = 'CONTACTO';

	$span_hab.innerHTML = 'El sueño del minimalista';

	$p_balmes_desc.innerHTML = 'Ubicado en el Barrio mas “hípster” de Barcelona , Sant Antoni, es un hervidero de actividad. <br><br> Cada fin de semana es el lugar de reunión de cientos de personas para comenzar su ruta de tapeo y vermús. Muy cerquita del Mercado de Sant Antoni, a un lado del Raval y del otro lado el Poble Sec. <br><br> Te encantará la decoración ultramoderna. La decoración monocromática, la iluminación colgante en la sala de estar y la cocina de planta abierta, el sofá y la terraza para socializar; Es el clásico de Barcelona.';

	$contac_h5.innerHTML = 'Te ha gustado?';
	$span_cont.innerHTML = 'Consulta diponibilidad';
	$a_contact.innerHTML = 'Contactanos!';


	$p_footer.innerHTML = 'Todos los derechos reservados © 2021 | <i class="fas fa-heart text-red-400"></i> RoomsWeRent'


 }

ingles.onclick = ()=>{


	$habitaciones.innerHTML = 'ROOMS';
	$contacto.innerHTML = 'CONTACT';

	$span_hab.innerHTML = 'The minimalists dream';

	
	$p_balmes_desc.innerHTML = 'Located in the most “hipster” neighborhood of Barcelona, ​​Sant Antoni, it is abuzz with activity. <br> <br> Every weekend is the meeting place for hundreds of people to begin their route of tapas and vermouth. Very close to the Sant Antoni Market, on one side of the Raval and on the other side of Poble Sec. <br> <br> You will love the ultra-modern decoration. Monochromatic decor, pendant lighting in the open-plan living room and kitchen, sofa and deck for socializing; It is the classic of Barcelona.';

	$contac_h5.innerHTML = 'Did you like it?';
	$span_cont.innerHTML = 'Check availability';
	$a_contact.innerHTML = 'Contact us!';


	$p_footer.innerHTML = 'All rights reserved © 2021 | <i class = "fas fa-heart text-red-400"> </i> RoomsWeRent'



}