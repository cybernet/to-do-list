$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		$(".todoList").append("<li>" + $("#customBox").val() + "<button>Delete</button>" +  "<input type='checkbox'>" + "</li>");
		$("#customBox").val('');
	}); 
	$(".todoList").on("click", "button", function(){
		$(this).parent().remove();
	});
	$(".todoList").on("click", ":checkbox", function (){
		$(this).parent().toggleClass("completedItem");

	});
});








