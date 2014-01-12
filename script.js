$(document).ready(function(){
	$("form").submit(function(event){
		event.preventDefault();
		$(".todoList").append("<li>" + $("#customBox").val() + "<button>Delete</button>" + "<button>Edit</button>" + "<input type='checkbox'>" + "</li>");
		$("#customBox").val('');
	}); 
	$(".todoList").on("click", "button", function(){
		$(this).parent().remove();
	});
	$(".todoList").on("click", ":checkbox", function (){
		$(this).parent().toggleClass("completedItem");
	});
});






/*

#1 Add an edit button

#2 When user clicks eddit, the value of the list item becomes editable text.

#3 Hittin enter should turn the input into a regular li
Prompt the user for the new value in a modal,
or inline. Do not attempt to use the same textbox that is used to add todos for this functionality.
Pre­populate the edit textbox with the original text.



*/

