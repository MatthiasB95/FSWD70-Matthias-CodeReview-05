//creating variables for every class in the html document
$(document).ready(function(){
	var arr = $(".img");
	var name = $(".title");
	var text = $(".description");
	var increase = $(".btn");
	var amount = $(".likes");
	var img_like = $(".daumen")
	var sort = $(".btn-lg")
	var test =$(".test")
//counter to keep track of the likes	
let counter = [0,0,0,0,0,0];
//put the elements from the json file in the html document
	for (let i = 0; i < arr.length; i++) {
		$(arr[i]).attr("src", movie[i].pic);
		$(name[i]).text(movie[i].title);
		$(text[i]).text(movie[i].description);
		$(img_like[i]).attr("src", movie[i].button);
		

//function that every time u click the button the likes increase by one 
	$(increase[i]).click(function(){
		$(amount[i]).text(++counter[i]);
	});
//function to sort the movies by click when the likes are higher
	$(sort).click(function(){
		if (test[i].value < test[i+1].value) {
			test[i+1]=test[i];
		}
	});

	}




	


});