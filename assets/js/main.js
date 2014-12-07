 $('#calendar').datepicker({
 inline: true,
 firstDay: 1,
 defaultDate: 14,
 navigationAsDateFormat: true
});


$(function(){
	$(".post__like").click(
		function(){
			$(this).toggleClass('selected');
		});
	$(".video_func__like").click(
		function(){
			$(this).toggleClass('selected');
		})
});


$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 		autoPlay: 3000,
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 800,
      singleItem:true,
      items : 3,
	  navigationText: true,
	  stopOnHover: true
 
  });
 
});

$(document).ready(function() {
 
  $("#owl-demo2").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 800,
      singleItem:true,
      items : 3,
	  navigationText: true

 
  });
 
});
