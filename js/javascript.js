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
	$(".sq").mouseover(function() {
		$(this).css("background-color","#ECF0F1")
	});

	$(".sq").click(function(){
		$(this).css("background-color","#2980B9")
	})
}

function replay(){
	$("#grid").empty();
	m = prompt("Width?");
	n = prompt("Height?");
	play();
}

console.log("JS end loaded");
/*.mouseenter(
		$(".sq").hover(,)
	);

	*/