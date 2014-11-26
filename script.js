window.onload = function() {

var c = document.getElementById('contInterface');
var d = document.getElementById('contCreate');
var e = document.getElementById('contEdit');
var f = document.getElementById('contVideo');

c.onclick = function() {
		c.nextElementSibling.classList.toggle('hide');
		c.children[0].classList.toggle('down');
	};

d.onclick = function() {
	d.nextElementSibling.classList.toggle('hide');
	};

e.onclick = function() {
		e.nextElementSibling.classList.toggle('hide');
		e.children[0].classList.toggle('down');
	};

f.onclick = function() {
		f.nextElementSibling.classList.toggle('hide');
		f.children[0].classList.toggle('down');
	};


$(window).scroll(function(){
  if($(window).scrollTop() > 1000){
      $("#navigation").fadeIn("slow");
  }
});
$(window).scroll(function(){
  if($(window).scrollTop() < 1000){
      $("#navigation").fadeOut("fast");
  }
});




};