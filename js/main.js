const contenedor = document.querySelector('#contenedor');

document.querySelector('#boton-menu').addEventListener('click', () => {
	contenedor.classList.toggle('active');
});

const comprobarAncho = () => {
	if(window.innerWidth <= 768){
		contenedor.classList.remove('active');
	} else {
		contenedor.classList.add('active');
	}
}

comprobarAncho();

window.addEventListener('resize', () => {
	comprobarAncho();
});


videoList.forEach(vid =>{
	vid.onclick = () =>{
	   videoList.forEach(remove =>{remove.classList.remove('active')});
	   vid.classList.add('active');
	   let src = vid.querySelector('.list-video').src;
	   let title = vid.querySelector('.list-title').innerHTML;
	   document.querySelector('.main-video-container .main-video').src = src;
	   document.querySelector('.main-video-container .main-video').play();
	   document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
 });