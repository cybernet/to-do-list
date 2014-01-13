$(document).ready(function(){
	$("form#main_input_box").submit(function(event){
		event.preventDefault();
		var deleteButton = "<button class='delete btn btn-default'>Delete</button>";
		var editButton = "<button class='edit btn btn-default'>Edit</button>";
		var twoButtons = "<div class='btn-group pull-right'>" + deleteButton + editButton + "</div>";
		var checkBox = "<div class='checkbox'><label><input type='checkbox'></label></div>";
		$(".list_of_items").append("<li class='list-group-item'>" + "<div>" + $("#custom_textbox").val() + twoButtons + "</div>" + checkBox + "</li>");
		$("#custom_textbox").val('');
	});
	$(".list_of_items").on("click", "button.delete", function(){
		$(this).parent().parent().parent().remove();
	});
	$(".list_of_items").on("click", "button.edit", function (){
		var editItemBox = "<form class='edit_input_box'><input type='text' class='itembox'></form>";
		var originalItem = $(this).parent().val();
		var deleteButton = "<button class='delete btn btn-default'>Delete</button>";
		var editButton = "<button class='edit btn btn-default'>Edit</button>";
		var twoButtons = "<div class='btn-group pull-right'>" + deleteButton + editButton + "</div>";
		$(this).parent().parent().replaceWith(editItemBox); 
		$(".itembox").val(originalItem.val); /* FIXME */
		$("form.edit_input_box ").on("submit", function(){
			event.preventDefault(); 
			var checkBox = "<label><input type='checkbox'></label>";
			$(this).replaceWith("<div>" + $(".itembox").val() + twoButtons + "</div>");
		}); 
	});
	$(".list_of_items").on("click", ":checkbox", function (){
		$(this).parent().parent().parent().toggleClass("completed_item");
	});
});





/*

not ordering list

The code on line 20 does not work.  I am trying to get editItemBox to prepopulate with the text of its associated div.

*/


