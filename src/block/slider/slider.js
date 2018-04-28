(function(){
	// Слайдеры на странице
	let slider= document.getElementsByClassName('slider');
	
	for(let i= 0; slider.length > i; i++){
		// слайды в слайдере
		let slide= slider[i].getElementsByClassName('slider__item');
		// Кнопки next / prev
		let btn_prev= slider[i].querySelector('.slider__btn_prev');
		let btn_next= slider[i].querySelector('.slider__btn_next')

		// Добавляем номер каждому слайду
		for(let numSlide= 0; slide.length > numSlide; numSlide++){
			slide[numSlide].setAttribute('data-num', numSlide);
		}

		let n= 1;
		let p= 0;
		slide[0].classList.add('active');
		// Автоперелистывание слайдов
		let idInterval= setInterval( ()=>{
			slide[p].classList.remove('active');
			slide[n].classList.add('active');
			// Номер предыдущего слайда
			p= n;
			// Номер следующего слайда
			if( n < slide.length - 1  && n != slide.length - 1){
				n++;
			 } else {
				 n= 0
			 }
			 let stop= (event, el)=>{
				el.addEventListener(event, ()=>{
					clearInterval( idInterval );
				})
			 }

			 stop('click', btn_prev);
			 stop('click', btn_next);
			 stop('touch', btn_prev);
			 stop('touch', btn_next);

		}, 4000 );

		// Перелистывание кнопками;
		let letBtnSlider= (event, el, step)=>{
			el.addEventListener(event, ()=>{
				let curentSlide= slider[i].querySelector('.slider__item.active');
				let num= Number( curentSlide.getAttribute('data-num') );
				curentSlide.classList.remove('active');
				// Удалить у предыдущего
				slide[num].classList.remove('active');

				if(num + step < 0){
					num= slide.length - 1;
				} else if(num + step > slide.length - 1) {
					num= 0;
				} else {
					num= num + step;
				}
				slide[num].classList.add('active');
			} );
		}
		letBtnSlider('click', btn_prev, -1);
		letBtnSlider('click', btn_next, 1);
		letBtnSlider('touch', btn_prev, -1);
		letBtnSlider('touch', btn_next, 1);
	}
})();