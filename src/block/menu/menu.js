(function(){
	let menu__item= document.querySelectorAll('.menu_header .menu__item');

	let funActiveMenu__item= (event)=>{
		for(let i= 0; menu__item.length > i; i++){
			menu__item[i].addEventListener(event, function(e){
				for(let j= 0; menu__item.length > j; j++){
					menu__item[j].classList.remove('active');
				}
				e.target.parentNode.classList.add('active');
			});
		}
	}

	funActiveMenu__item('click');
	funActiveMenu__item('touch');

	document.getElementById('menu__btn-burger_header').addEventListener('click', (e)=>{
		document.getElementById('menu-list_header').classList.toggle('active');
		e.target.classList.toggle('active');
	})

})();