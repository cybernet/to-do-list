$(document).ready(function(){
	$("form#mainInputBox").submit(function(event){
		event.preventDefault();
		var deleteButton = "<button class='delete'>Delete</button>";
		var editButton = "<button class='edit'>Edit</button>";
		$(".todoList").append("<li>" + "<div>" + $("#customBox").val() + "</div>" + deleteButton + editButton + "<input type='checkbox'>" + "</li>");
		$("#customBox").val('');
	});
	$(".todoList").on("click", "button.delete", function(){
		$(this).parent().remove();
	});
	$(".todoList").on("click", "button.edit", function (){
		var editItemBox = "<form class='editInputBox'><input type='text' class='itembox'></form>";
		$(this).parent().replaceWith(editItemBox);
		$("form.editInputBox ").on("submit", function(){
			event.preventDefault();
			$(this).replaceWith("<li>" + "<div>" + $(".itembox").val() + "</div>" + "<button class='delete'>Delete</button>" + "<button class='edit'>Edit</button>" + "</li>");
		}); 
	});
	$(".todoList").on("click", ":checkbox", function (){
		$(this).parent().toggleClass("completedItem");
	});
});





/*

PSEUDO
1. PRESSING ENTER ON THE BOX NEEDS TO replace the box wih its value
2. editItemBox needs to grab the value of the list item
going to define a variable for the value of the parent li
*/


