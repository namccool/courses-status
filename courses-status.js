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

	function recommendCourses() {
		$(".course.recommended").toggleClass("highlight");
	}

	filters
		.find(".recommended")
		.click(recommendCourses);
});