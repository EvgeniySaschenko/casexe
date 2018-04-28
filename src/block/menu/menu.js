// Основное меню
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

//  меню sidebar
(function(){
	let menu__title= document.querySelectorAll('.menu_sidebar-left .menu__title');
	let menu__item= document.querySelectorAll('.menu_sidebar-left .menu__item');
	let menu__btn_catalog= document.querySelector('.menu_sidebar-left .menu__btn_catalog');
	let menu__box= document.querySelector('.menu_sidebar-left .menu__box');

	// title
	let active_title= (event, el)=>{
		for(let i= 0; el.length > i; i++){
			el[i].addEventListener(event, function(e){
				// Удаляет active
				for(let i= 0; el.length > i; i++){
					el[i].classList.remove('active');
				}
				//  active для текущего
				e.target.classList.add('active');
			})
		}
	}

	active_title('click', menu__title);
	active_title('touch', menu__title);

	// item
	let active_item= (event, el)=>{
		for(let i= 0; el.length > i; i++){
			el[i].addEventListener(event, function(e){
				// Удаляет active
				for(let i= 0; el.length > i; i++){
					el[i].classList.remove('active');
				}
				//  active для текущего
				e.target.parentNode.classList.add('active');
			})
		}
	}


	active_item('click', menu__item);
	active_item('touch', menu__item);

	// btn_catalog
	let drop_menu= (event, el1, el2)=>{
		el1.addEventListener(event, function(e){
			el2.classList.toggle('active');
		})
	}

	drop_menu('click', menu__btn_catalog, menu__box);
	drop_menu('touch', menu__btn_catalog, menu__box);

})();