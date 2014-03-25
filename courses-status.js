var body = $("body")
var button = $("button")

$(document).ready(function(){

	$(".status").on("click", function(){
		var message = $("<span>Excellent Progress!</span>");
		$(this).after(message);
		$(this).remove();
	});

	var filters = $("#filters");
	var course = $(".course");

	filters.find(".recommended").click(function(){
		course.filter(".recommended").css("background-color", "yellow");
	});

});