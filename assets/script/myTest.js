jQuery( document ).ready(function() {
    init();
});

function init(){
	
	/*
	jQuery.fn.center = function ($) {
  var w = jQuery(window);
  this.css({
    'position':'absolute',
    'left':Math.abs(((w.width() - 1000) / 2) + w.scrollLeft())
  });
  return this;
  */
	
	jQuery('<div class="carousel-caption"><h5>My Caption</h5></div>').appendTo(".carousel-item");
	
	$.each( jQuery(".carousel-caption"), function( key, value ) {
		var path = this.previousSibling.src;
		var jpgIndex2  = path.indexOf('.jpg');
		
		path2 = path.substr(0, jpgIndex2);
		
	//get the index of the start of the part of the URL we want to keep
	    var index1  = path2.indexOf('assets');
	    
	    //then get everything after the found index
	    var source = path2.substr(index1);

//		 var index  = path.indexOf('.jpg');
//		 var source = path.substr(0,index);
		
		var selector800 = "img[src^='" + source + "-800']";
		
		
		var capture = $(selector800).siblings('.mbr-gallery-title').text();
		if(capture == ""){
			var source780 = source.substr(0, source.length - 1);
			var selector780 = "img[src^='" + source780 + "-780']";
			capture = $(selector780).siblings('.mbr-gallery-title').text();
		}
		 this.innerHTML = "<h5> " + capture + "</h5>";
		});
	
	
	
	
	
	

//    $('.carousel').carousel();
//    var caption = $('.carousel-item:nth-child(1) .carousel-caption');
//    $('.new-caption-area').html(caption.html());
//    caption.css('display', 'none');
//
//    $(".carousel").on('slide.bs.carousel', function (evt) {
//        var caption = $('.carousel-item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
//        $('.new-caption-area').html(caption.html());
//        caption.css('display', 'none');
//    });
	
	
	
	
	
	
//	jQuery(function ($) {
//		
//		
//		
//		//$("img[src^='assets/images/1941-2-restored2-2000x2686-800']").siblings('.mbr-gallery-title').text()
//		
//		
//		
//	    $('.carousel').carousel();
//	    var caption = $('div.item:nth-child(1) .carousel-caption');
//	    $('.new-caption-area').html(caption.html());
//	    caption.css('display', 'none');
//
//	    $(".carousel").on('slide.bs.carousel', function (evt) {
//	        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index() + 1) + ') .carousel-caption');
//	        $('.new-caption-area').html(caption.html());
//	        caption.css('display', 'none');
//	    });
//	});
//	
	
}

//jQuery('#custom-html-1ff').center()
//
//jQuery('.item').click(function(){
//	/*
//		var idx = $(this).parents('div').index();
//		var id = parseInt(idx);
//		$('#myModal').modal('show'); // show the modal
//		$('#modalCarousel').carousel(id); // slide carousel to selected
//		*/
//		alert ("YAY!");
//});



