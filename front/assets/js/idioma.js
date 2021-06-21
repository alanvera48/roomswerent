
let español = d.querySelector('.español');
let ingles = d.querySelector('.ingles');


//Header
let $habitaciones = d.getElementById('habitaciones');
let $contacto = d.getElementById('contacto');
//Section 1 - Index

let $index_h1 = d.querySelector('.h1-index');
let $index_h3 = d.querySelector('.h3-index');
let $a_section1 = d.querySelector('.a-index-section1');

//Section 2 - index

let $h4_section_2 = d.querySelector('.h4-section-2');
let $texto_sec2 = d.querySelector('.texto-section2');

let $li_1_1 = d.querySelector('.li-1-1');
let $li_1_3 = d.querySelector('.li-1-3');
let $li_2_1 = d.querySelector('.li-2-1');
let $li_2_2 = d.querySelector('.li-2-2');
let $li_2_3 = d.querySelector('.li-2-3');

//Section 4 

let $h4_section_4 = d.querySelector('.h4-section-4');
let $h5_section_4_1 = d.querySelector('.h5-section-4-1');
let $p_section_4_1 = d.querySelector('.p-section-4-1');
let $h5_section_4_2 = d.querySelector('.h5-section-4-2');
let $p_section_4_2 = d.querySelector('.p-section-4-2');

//Section 5

let $h5_section5 = d.querySelector('.h5-section5');
let $a_section5 = d.querySelector('.a-section5');

//Footer

let $p_footer = d.querySelector('.p-footer');

español.onclick = ()=>{

	$habitaciones.innerHTML = 'HABITACIONES';
	$contacto.innerHTML = 'CONTACTO';

	$index_h1.innerHTML = 'Vive, disfruta y crece!';
	$index_h3.innerHTML = 'Siempre con amigos y en el mejor lugar';
	$a_section1.innerHTML = 'Ver Habitaciones';


	$h4_section_2.innerHTML = `No solo es compartir, es vivir aventuras.`;
	$texto_sec2.innerHTML  = `En RoomsWeRent elegimos la manera de que cada uno de nuestro apartamentos queden amueblados y tratados con cariño y buen gusto. <br>¿Que mas?. 
					<br>Pues ademas ofrecemos`;

	$li_1_1.innerHTML = `<i class="fas fa-heart text-red-400"></i>Comunidad internacional`;
	$li_1_3.innerHTML = `<i class="fas fa-heart text-red-400"></i>Councious living`;
	$li_2_1.innerHTML = `<i class="fas fa-couch"></i>Habitación amueblada`;
	$li_2_2.innerHTML = `<i class="fas fa-money-bill-alt"></i>Sin deposito`;
	$li_2_3.innerHTML = `<i class="fas fa-ruler"></i>Diseño y privadidad para usted y su familia o amigos.`;

	$h4_section_4.innerHTML= '¿Porque RoomsWeRent?...';
	$h5_section_4_1.innerHTML='El espacio perfecto';
	$p_section_4_1.innerHTML ='Apartamentos equipados, con todo lo que necesitas. La cama más cómoda de la ciudad, escritorio para teletrabajar';
	$h5_section_4_2.innerHTML='Con todos los servicios';
	$p_section_4_2.innerHTML ='Olvídate de pagos fraccionados. Aquí es una única factura que incluye agua, electricidad, gas, el Wi-Fi... ¡y la limpieza de todo el piso semanalmente!';
	
	$h5_section5.innerHTML = '¡Descubre todo lo necesario para tu estancia!'; 
	$a_section5.innerHTML = 'Contactanos';


	$p_footer.innerHTML = 'Todos los derechos reservados © 2021 | <i class="fas fa-heart text-red-400"></i> RoomsWeRent'



 }

ingles.onclick = ()=>{

	$habitaciones.innerHTML = 'ROOMS';
	$contacto.innerHTML = 'CONTACT';

	$index_h1.innerHTML = 'Live, enjoy and grow!';
	$index_h3.innerHTML = 'Always with friends in the best place';
	$a_section1.innerHTML = 'View rooms';

	$h4_section_2.innerHTML = `It is not only sharing, it is living adventures.`;
	$texto_sec2.innerHTML  = `At RoomsWeRent we choose the way that each of our apartments are furnished and treated with care and good taste.<br> What else ?.<br> Well, we also offer`;

	$li_1_1.innerHTML = `<i class="fas fa-heart text-red-400"></i>International Community`;
	$li_1_3.innerHTML = `<i class="fas fa-heart text-red-400"></i>Councious living`;
	$li_2_1.innerHTML = `<i class="fas fa-couch"></i>Furnished room`;
	$li_2_2.innerHTML = `<i class="fas fa-money-bill-alt"></i>No deposit`;
	$li_2_3.innerHTML = `<i class="fas fa-ruler"></i>Design and privacy for you and your family or friends.`;

	$h4_section_4.innerHTML= '¿Why RoomsWeRent?...';
	$h5_section_4_1.innerHTML='The perfect place';
	$p_section_4_1.innerHTML ='Equipped apartments, with everything you need. The most comfortable bed in town, a desk for teleworking.';
	$h5_section_4_2.innerHTML='All services';
	$p_section_4_2.innerHTML ='Forget about installment payments. Here is a single bill that includes water, electricity, gas, Wi-Fi ... and cleaning of the entire apartment every week!';
	
	$h5_section5.innerHTML = 'Discover everything you need for your stay!'; 
	$a_section5.innerHTML = 'Contact us';


	$p_footer.innerHTML = 'All rights reserved © 2021 | <i class = "fas fa-heart text-red-400"> </i> RoomsWeRent'


}
