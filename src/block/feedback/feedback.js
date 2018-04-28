// Открыть / закрыть
(function(){
	let feedback__close= document.querySelector('.feedback__close');
	let btn_feedback= document.querySelector('.btn_feedback');
	
	let feedback= document.querySelector('.feedback');

	let modal= (event, el)=>{
		el.addEventListener(event, function(e){
			feedback.classList.toggle('active');
		});
	}
	// Закрыть 
	modal('click', feedback__close);
	modal('touch', feedback__close);
	// Показать  
	modal('click', btn_feedback);
	modal('touch', btn_feedback);
})();

// Отравка формы
(function(){
	let feedback__btn= document.querySelector('.feedback__btn');
	let send= (event, el)=>{

		el.addEventListener('click', (e)=>{
			e.preventDefault();
			
			let required= document.querySelectorAll('.feedback [required="required"]');
		
			for(let i= 0; required.length > i; i++){
				// Проверка на заполнение
				if(required[i].value === ''){
					required[i].classList.add('error');
					required[i].setAttribute('placeholder', 'Поле обязательно для заполнения');
				}

				required[i].addEventListener('input', ()=>{
					if( required[i].value ){
						required[i].classList.remove('error');
					} else{
						required[i].classList.add('error');
						required[i].setAttribute('placeholder', 'Поле обязательно для заполнения');
					}
				});
				// валидация Email
				if( required[i].getAttribute('name') == 'mail'  && !required[i].value.match(/\w{1,}@\w{1,}/gi) ){
					required[i].classList.add('error');
				}

			}
		
		})

	}

	send('click', feedback__btn)
})();


