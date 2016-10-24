// JavaScript Document

$(document).ready(function(e) {
    var picIndex=1;
	var activo = 0;
	var lef = '-300px';
	var cen = '175px';
	var rig = '600px';
	var i;
	var pics = document.getElementsByClassName('pic');

	pos();

	function pos() {
		if (activo==0){
			for (i=0; i<pics.length; i++){
				pics[i].style.left = rig;
				pics[i].style.display = "none";
			}
		}else {
			for (i=0; i<pics.length; i++){
				if (i!=activo-1){
					if (i<activo-1){
						pics[i].style.left = lef;
					}else if(i>activo-1){
						pics[i].style.left = rig;
					}
				}
			}
		}
	}
	entrar();
	function entrar (){
		if (activo != 0){
			oculta();
		}
		pics[picIndex - 1].style.display = "block";
		$('#pic'+picIndex).animate({left: cen, opacity: 1},500);
		$('#opt'+picIndex).addClass("active");
		$('#opt'+activo).removeClass("active");
		activo =picIndex;
		pos();
	}
	function salir (){
		if (activo < picIndex){
			$('#pic'+activo).animate({
				left: lef,
				opacity: 0,
				}, 300);
		}else if (activo > picIndex){
			$('#pic'+activo).animate({
				left: rig,
				opacity: 0,
				}, 300);
		}
	}
	
	
	function oculta() {
		pics[activo-1].style.display = "none";
	}
	
	$('#opt1').click(function(){
		if (activo != 1){
			picIndex =1;
			salir();
			setTimeout(entrar,300);
		}
	});
	$('#opt2').click(function(){
		if (activo !=2){
			picIndex =2;
			salir();
			setTimeout(entrar,300);
		}
	});
	$('#opt3').click(function(){
		if (activo != 3){
			picIndex =3;
			salir();
			setTimeout(entrar,300);
		}
	});
	$('#opt4').click(function(){
		if (activo != 4){
			picIndex =4;
			salir();
			setTimeout(entrar,300);
		}
	});
	$('#opt5').click(function(){
		if (activo != 5){
			picIndex =5;
			salir();
			setTimeout(entrar,300);
		}
	});
	$('#opt6').click(function(){
		if (activo != 6){
			picIndex =6;
			salir();
			setTimeout(entrar,300);
		}
	});
	
	$('.prev').click(function(){
		if (picIndex > 1){
			picIndex--;
			salir();
			setTimeout(entrar, 300);
		}
	});
	
	$('.next').click(function(){
		if (picIndex < pics.length){
			picIndex++;
			salir();
			setTimeout(entrar, 300);
		}
	});
	
	$("body").keydown(function(e) {
	  if(e.keyCode == 37) { // left
		if (picIndex != 1){
			picIndex--;
			salir();
			setTimeout(entrar, 300);
		}
	  }
	  else if(e.keyCode == 39) { // right
		if (picIndex != pics.length){
			picIndex++;
			salir();
			setTimeout(entrar, 300);
		}
	  }
	});
	
});