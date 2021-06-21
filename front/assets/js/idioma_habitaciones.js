
let español = d.querySelector('.español');
let ingles = d.querySelector('.ingles');


//Header
let $habitaciones = d.getElementById('habitaciones');
let $contacto = d.getElementById('contacto');

//Section 1 - Index

let $h5_main_habitaciones = d.querySelector('.h5-main-habitaciones');

//Habitaciones span

let $p_balmes = d.querySelector('.p-balmes');
let $p_botella = d.querySelector('.p-botella');
let $p_diagonal = d.querySelector('.p-diagonal');
let $p_ronda = d.querySelector('.p-ronda');
let $p_santa = d.querySelector('.p-santa');
let $p_tamarit = d.querySelector('.p-tamarit');

let $a_balmes = d.querySelector('.a-balmes');
let $a_botella = d.querySelector('.a-botella');
let $a_diagonal = d.querySelector('.a-diagonal');
let $a_ronda = d.querySelector('.a-ronda');
let $a_santa = d.querySelector('.a-santa');
let $a_tamarit = d.querySelector('.a-tamarit');

let $p_footer = d.querySelector('.p-footer-hab');



español.onclick = ()=>{

	$habitaciones.innerHTML = 'HABITACIONES';
	$contacto.innerHTML = 'CONTACTO';

	$h5_main_habitaciones.innerHTML = 'Habitaciones';

	$p_balmes.innerHTML = 'Vivir en un piso compartido puede ser increíble. Encuentra compañeros de piso y un lugar donde vivir';
	$p_botella.innerHTML = 'Este piso ubicado en el Raval ,un barrio dinámico que ofrece exposiciones vanguardistas en el Museo de Arte Contemporáneo de Barcelona (MACBA) y el Centro de Cultura Contemporánea de Barcelona (CCCB).' ;
	$p_diagonal.innerHTML = 'Ubicado en una de las avenidas mas bonitas e importantes de Barcelona. Si eres una persona social te encantara este piso.' ;
	$p_ronda.innerHTML = 'Ubicado en el corazón de Barcelona a metros de Plaza Cataluña, rodeado de tiendas restaurantes y bares.' ;
	$p_santa.innerHTML = 'Este piso ubicado en una de las calles con nombre de patrona de Barcelona ,muy cerca del  Palau Nacional de Montjuïc, y del Museu Nacional dArt de Catalunya, decorado al dedillo con balcon y sol todo el día.';
	$p_tamarit.innerHTML = 'Ubicado en el Barrio mas “hípster” de Barcelona , Sant Antoni, es un hervidero de actividad.' ;

	$a_balmes.innerHTML = 'Ver Detalle';
	$a_botella.innerHTML = 'Ver Detalle';
	$a_diagonal.innerHTML = 'Ver Detalle';
	$a_ronda.innerHTML = 'Ver Detalle';
	$a_santa.innerHTML = 'Ver Detalle';
	$a_tamarit.innerHTML = 'Ver Detalle';

	$p_footer.innerHTML = 'Todos los derechos reservados © 2021 | <i class="fas fa-heart text-red-400"></i> RoomsWeRent'


 }

ingles.onclick = ()=>{


	$habitaciones.innerHTML = 'ROOMS';
	$contacto.innerHTML = 'CONTACT';

	$h5_main_habitaciones.innerHTML = 'Rooms';


	$p_balmes.innerHTML = 'Living in a shared apartment can be incredible. Find roommates and a place to live';
	$p_botella.innerHTML = 'This apartment located in the Raval, a dynamic neighborhood that offers avant-garde exhibitions at the Museum of Contemporary Art of Barcelona (MACBA) and the Center for Contemporary Culture of Barcelona (CCCB).';
	$p_diagonal.innerHTML = 'Located in one of the most beautiful and important avenues in Barcelona. If you are a social person you will love this apartment.';
	$p_ronda.innerHTML = 'Located in the heart of Barcelona a few meters from Plaza Catalunya, surrounded by shops, restaurants and bars.' ;
	$p_santa.innerHTML = 'This apartment located in one of the streets named after the patron saint of Barcelona, ​​very close to the Palau Nacional de Montjuïc, and the Museu Nacional d Art de Catalunya, decorated to the letter with a balcony and sun all day.';	
	$p_tamarit.innerHTML = 'Located in the most “hipster” neighborhood of Barcelona, ​​Sant Antoni, it is abuzz with activity.' ;

	$a_balmes.innerHTML = 'View Details';
	$a_botella.innerHTML = 'View Details';
	$a_diagonal.innerHTML = 'View Details';
	$a_ronda.innerHTML = 'View Details';
	$a_santa.innerHTML = 'View Details';
	$a_tamarit.innerHTML = 'View Details';

	$p_footer.innerHTML = 'All rights reserved © 2021 | <i class = "fas fa-heart text-red-400"> </i> RoomsWeRent'



}
