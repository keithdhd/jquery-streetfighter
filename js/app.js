//After page load, display standing still image of Ryu
$(document).ready(function(){
	var ryu = $(".ryu img");

	//ryu.onHover turn him into a "ready" image
	ryu.hover(function(){
    	$(this).attr("src", "images/ryu-ready-position.gif");
	}, function(){
    	$(this).attr("src", "images/ryu-standing-still.png");
    });		

	//ryu.onClick Ryu fires a Hadouken
	ryu.mousedown(function() {
 	 $(this).attr("src", "images/ryu-throwing-hadouken.png");
 	 //play the sound
 	 $("#audioFile").trigger('play');
	});
	
	//ryu.onClick release, return to "ready" pose
	ryu.mouseup(function() {
 	 $(this).attr("src", "images/ryu-ready-position.gif");
	});

})






//x key.onkeyDown Ryu looks cool

//x key.onKeyUp Ryu is "ready"
