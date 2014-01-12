$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		var deleteButton = "<button class='delete'>Delete</button>";
		var editButton = "<button class='edit'>Edit</button>";
		$(".todoList").append("<li>" + $("#customBox").val() + deleteButton + editButton + "<input type='checkbox'>" + "</li>");
		$("#customBox").val('');
	});
	$(".todoList").on("click", "button.delete", function(){
		$(this).parent().remove();
	});
	$(".todoList").on("click", "button.edit", function (){
		var editItemBox = "<input type='text' class='itemBox'>";
		$(this).parent().replaceWith("<form>" + editItemBox + "</form>");
	});
	$(".todoList").on("click", ":checkbox", function (){
		$(this).parent().toggleClass("completedItem");
	});
});








