function ContactForm(){
	const d = document;
	const $input = d.querySelectorAll('.contact-form [required]');
	const $form = d.querySelector('.contact-form');

	$input.forEach((input)=>{
		const $span = d.createElement('p');
		$span.id = input.name;
		$span.textContent = input.title;
		$span.className = 'none text-red-500 text-xs italic no-complete';
		input.insertAdjacentElement("afterend", $span);

	});

/*	<p class="text-red-500 text-xs italic no-complete">Please fill out this field.</p>*/

	d.addEventListener('keyup', (e)=>{ 
		 if(e.target.matches('.contact-form [required]')){
		 	let $input = e.target;
		 	const pattern = $input.pattern || $input.dataset.pattern;

		 	if(pattern && $input.value!==""){
		 		
		 		let regex = new RegExp(pattern);
		 		return !regex.exec($input.value)
		 			? d.getElementById($input.name).classList.remove('none')
		 			: d.getElementById($input.name).classList.add('none');
		 	}


		 }
		})

	d.addEventListener('submit', (e)=>{
		e.preventDefault();
		const $buttonSubmit = d.querySelector('.buttonSub'); 

		$buttonSubmit.innerHTML = `<img src="assets/img/loader/oval.svg" class="loader" alt="">`;

		fetch("../back/send-form.php",{
			method: "POST",
			body: new FormData(e.target)
		})
		.then(res=>res.ok 
			? res.json()
			: Promise.reject(res))
		
		.then((json)=>{

			$buttonSubmit.innerHTML = json.message;
			$form.reset();
			console.log(json)
		})
		.catch((err)=>{
			$buttonSubmit.innerHTML = json.message;
		})
		.finally(()=>{
			setTimeout(()=>{
				$buttonSubmit.innerHTML = "Send Mail";
		}, 3000)
		})
	})

}

ContactForm();