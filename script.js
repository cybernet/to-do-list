$(document).ready(function(){
	$("form#main_input_box").submit(function(event){
		event.preventDefault();
		var deleteButton = "<button class='delete btn btn-default'>Delete</button>";
		var editButton = "<button class='edit btn btn-default'>Edit</button>";
		var twoButtons = "<div class='btn-group'>" + deleteButton + editButton + "</div>"
		$(".list_of_items").append("<li class='list-group-item'>" + "<div>" + $("#custom_textbox").val() + twoButtons + "<input type='checkbox'>" + "</div>" + "</li>");
		$("#custom_textbox").val('');
	});
	$(".list_of_items").on("click", "button.delete", function(){
		$(this).parent().parent().parent().remove();
	});
	$(".list_of_items").on("click", "button.edit", function (){
		var editItemBox = "<form class='edit_input_box'><input type='text' class='itembox'></form>";
		var originalItem = $(this).parent().val();
		$(this).parent().parent().replaceWith(editItemBox); /* FIXME */
		$(".itembox").val(originalItem.val);
		$("form.edit_input_box ").on("submit", function(){
			event.preventDefault(); 
			$(this).replaceWith("<div>" + $(".itembox").val() + "<button class='delete btn btn-default'>Delete</button>" + "<button class='edit btn btn-default'>Edit</button>" +  "<input type='checkbox'>" + "</div>");
		}); 
	});
	$(".list_of_items").on("click", ":checkbox", function (){
		$(this).parent().toggleClass("completed_item");
	});
});





/*

The code on line 15 does not work.  I am trying to get editItemBox to prepopulate with the text of its associated div.

*/


