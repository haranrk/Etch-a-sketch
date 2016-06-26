console.log("JS start loaded");
var m=16, n=16;

$(document).ready(function(){
	play();		
}); 

function play(){
for (var i = 0; i < n; i++) {
		$("#grid").append('<div class="row"></div>');
	}
	for (var i = 0; i < m; i++) {
		$(".row").append('<div class="sq"></div>')
	}
	$(".sq").css("opacity",0);
	$(".sq").mouseover(function() {
		$(this).css("background-color","#ECF0F1");
		var opacity = $(this).css("opacity");
		console.log(opacity);
		opacity+=0.5;
		$(this).css("opacity",opacity);
		var opacity = $(this).css("opacity");
		console.log(opacity);
	});

	$(".sq").click(function(){
		$(this).css("background-color","#2980B9")
	})
}

function replay(){
	console.log("replay()");
	$("#grid").empty();
	m = prompt("Width?");
	n = prompt("Height?");
	play();
}

function fresh(){
	console.log("clear()");
	$("#grid").empty();
	play();
}

console.log("JS end loaded");
/*.mouseenter(
		$(".sq").hover(,)
	);

	*/