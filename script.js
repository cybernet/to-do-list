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
	$(".todoList").on("click", ":checkbox", function (){
		$(this).parent().toggleClass("completedItem");
	});
});






/*

#1 Add an edit button

Specify different ids for delete and edit buttons.  Problem: need to differentiate between the two buttons.  using the variables doesn't work.

#2 When user clicks eddit, the value of the list item becomes editable text.

#3 Hittin enter should turn the input into a regular li
Prompt the user for the new value in a modal,
or inline. Do not attempt to use the same textbox that is used to add todos for this functionality.
Pre­populate the edit textbox with the original text.



*/

