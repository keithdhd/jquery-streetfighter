//After page load, display standing still image of Ryu
$(document).ready(function(){
	init();
	playGame();
});	

function init(){
//do something
}


function playGame(){
	var ryu = $(".ryu img");
	var hadouken = $(".hadouken");
	
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
 	 $("#hadouken-sound").trigger("play");
 	 
 	 //fire hadouken
		hadouken.show().animate(
		  {'left': '1020px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '520px');
		  }
		);

	});
	
	//ryu.onClick release, return to "ready" pose
	ryu.mouseup(function() {
 	 $(this).attr("src", "images/ryu-ready-position.gif");
	});
	
	//x key.onkeyDown Ryu looks cool
	$(document).keydown(
	function( event ) {
  	if ( event.which == 88 ) {
     ryu.attr("src", "images/ryu-cool.gif");
 	}
  	});

  	//x key.onKeyUp Ryu is "ready"
  	$(document).keyup(
	function( event ) {
  	if ( event.which == 88 ) {
     ryu.attr("src", "images/ryu-standing-still.png");
 	}
  	});

}