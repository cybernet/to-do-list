$(document).ready(function(){
	var button = $("<button>Delete</button>");
	var newItem = $("<li>Test</li>");
	$("input[type='text']").change(function(){
		$(".todoList").append(newItem);
	});
});







/* PSUEDO CODE

User enters newItem (text) into customBox (text box).

When user clicks "add" button, newItem get appended to ol as a new ordered list item.
The text then clears from the textbox (can we wrap something in a form)

When a newItem gets appended to ol, a delete button is also added beside each newItem

When a user clicks on the deleteButton, the newItem closest to that deleteButton dissappears. */

