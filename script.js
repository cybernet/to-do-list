$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		$(".todoList").append("<li>" + $("#customBox").val() + "<button>Delete</button>" + "</li>");
		$("#customBox").val('');
	}); 
	$("button").click(function(event){
		$(this).closest("li").remove();
	});
});








