$(document).ready(function(){
	/*var button = $("<button>Delete</button>");*/
	/*var newItem = $("<li>Test</li>");*/
	$("#customBox").on("change", function(){
		$(".todoList").append("<li>" + this.value + "<button>Delete</button>" + "</li>");
	});
	$("#addButton").click(function(){
		$(".todoList").append("<li>" + this.value + "<button>Delete</button>" + "</li>");
	});
});






/* PSUEDO CODE

User enters newItem (text) into customBox (text box).

When user clicks "add" button, newItem get appended to ol as a new ordered list item.
The text then clears from the textbox (can we wrap something in a form)

When a newItem gets appended to ol, a delete button is also added beside each newItem

When a user clicks on the deleteButton, the newItem closest to that deleteButton dissappears. 


FIX ME

Need to allow user to user enter key OR add button to add something to list*/

