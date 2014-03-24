var body = $("body")
var button = $("button")

$(document).ready(function(){
	$(".status").on("click", function(){
		var message = $("<span>Excellent Progress!</span>");
		$(this).after(message);
		$(this).remove();
	});
	$("#filters").on("click", ".recommended", function(){
		$(".course").filter(".recommended").css("background-color", "yellow");
	});
});