
// Funcion para el loader
$(window).on('load', function() {
   $('#contenedor_loader').delay(10).fadeOut('slow',function(){$(this).remove();});
  });

 //Abrir y cerrar el menu 
  const nav = document.querySelector("nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");
  
  abrir.addEventListener("click", () => {
      nav.classList.add("visible");
  })
  
  cerrar.addEventListener("click", () => {
      nav.classList.remove("visible");
  })  


//Cerrar el menu dar click una opcion

function seleccionar(link){
  var opciones = document.querySelectorAll('.navList a');
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  link.className = "seleccionado";

  const nav = document.querySelector("nav");
  nav.className = "";

}

//Cambiar de texto al presionar el boton enviado
let btn = document.getElementById('btn');

btn.addEventListener('click', toggle);
function toggle() {
  btn.innerHTML = "Enviado";
}
  window.addEventListener('scroll',e=>{            
    var item= document.querySelectorAll('.content')
    item.forEach(element => {
        if(element.getBoundingClientRect().top <  window.innerHeight){
            element.classList.add('visible')
        }
    });
})

//Efecto en las barras
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('porcentajes')
		},3000);
	});
}); 