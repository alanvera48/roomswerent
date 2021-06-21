
let español = d.querySelector('.español');
let ingles = d.querySelector('.ingles');


//Header
let $habitaciones = d.getElementById('habitaciones');
let $contacto = d.getElementById('contacto');

//Section 1 - Index


let $h5_balmes = d.querySelector('.h5-balmes');
let $span_balmes_descr = d.querySelector('.span-balmes-descr');
let $p_balmes_desc = d.querySelector('.p-balmes-desc');

let $contac_h5 = d.querySelector('.contac-h5');
let $span_cont = d.querySelector('.span-cont');
let $a_contact = d.querySelector('.a-contact');

let $p_footer = d.querySelector('.p-footer-hab');



español.onclick = ()=>{

	console.log('dasdasdsa')

	$habitaciones.innerHTML = 'HABITACIONES';
	$contacto.innerHTML = 'CONTACTO';

	$h5_balmes.innerHTML = 'Vivir en un piso compartido puede ser increíble';
	$span_balmes_descr.innerHTML = 'Encuentra compañeros de piso y un lugar donde vivir';
	$p_balmes_desc.innerHTML = 'No hay momentos de soledad. Tendrás la opción de comer solo o con otros , lo mismo que para tus noches de Netflix.<br>También tendrás la oportunidad de hablar y chatear con tus compañeros tan pronto te aburras. ¡Y si temes por tu privacidad, tu habitación sigue siendo tu espacio personal.<br><br>Es probable que compartas con personas de otras nacionalidades, la oportunidad única de aprender más sobre unacultura diferente y mejorar, por ejemplo, tu nivel de inglés o aprender otros idiomas.';

	$contac_h5.innerHTML = 'Te ha gustado?';
	$span_cont.innerHTML = 'Consulta diponibilidad';
	$a_contact.innerHTML = 'Contactanos!';


	$p_footer.innerHTML = 'Todos los derechos reservados © 2021 | <i class="fas fa-heart text-red-400"></i> RoomsWeRent'


 }

ingles.onclick = ()=>{

	console.log('dasdasdsa')

	$habitaciones.innerHTML = 'ROOMS';
	$contacto.innerHTML = 'CONTACT';

	$h5_balmes.innerHTML = 'Living in a shared apartment can be incredible.';
	$span_balmes_descr.innerHTML = 'Find roommates and a place to live';
	$p_balmes_desc.innerHTML = 'There are no lonely moments. You will have the option to eat alone or with others, the same as for your Netflix nights. <br> You will also have the opportunity to talk and chat with your colleagues as soon as you get bored. And if you fear for your privacy, your bedroom is still your personal space.<br> <br>It is likely that you will share with people of other nationalities, the unique opportunity to learn more about a different culture and improve, for example, your level of English or learn other languages.';

	$contac_h5.innerHTML = 'Did you like it?';
	$span_cont.innerHTML = 'Check availability';
	$a_contact.innerHTML = 'Contact us!';


	$p_footer.innerHTML = 'All rights reserved © 2021 | <i class = "fas fa-heart text-red-400"> </i> RoomsWeRent'



}
