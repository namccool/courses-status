$("body").css("background", "lightblue");
$(document).ready(function(){
	$("button").on("click", function(){
		var message = $("<span>Good brain power!</span>");
		$(this).after(message);
		$(this).remove();
	});
});