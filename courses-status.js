var body = $("body")
var button = $("button")

$(document).ready(function(){

	$(".status").on("click", function(){
		var message = $("<span>Excellent Progress!</span>");
		$(this).after(message);
		$(this).remove();
	});

	var filters = $("#filters");
	var goodCourse = $(".course").filter(".recommended");

	function recommendCourses() {
		console.log("WORKING!");
		goodCourse.toggleClass("highlight");
	}

	filters.find(".recommended").click(recommendCourses);
});