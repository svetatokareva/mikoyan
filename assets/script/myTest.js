jQuery( document ).ready(function() {
    init();
});

function init(){
	

	// add caption placeholder to all "large" pictures
	jQuery('<div class="carousel-caption"><h5>My Caption</h5></div>').appendTo(".carousel-item");
	
	// update the placeholder with real text from the gallery 
	// find the text based on the img src element.
	$.each( jQuery(".carousel-caption"), function( key, value ) {
		// loop through "large" images.
		
		// get image source for current "large" image
		var path = this.previousSibling.src;
		
		// the path variable has an absolute path, while the gallery images have a relative path (starting with "assets")
		// extract relative path from absolute path 
		var jpgIndex2  = path.indexOf('.jpg');
		
		// some of the files are jpeg, not jpg.
		if(jpgIndex2 == -1){
			var jpgIndex2  = path.indexOf('.jpeg');
		}
			
		path2 = path.substr(0, jpgIndex2);		
	    var index1  = path2.indexOf('assets');
	    var source = path2.substr(index1);
	    
	    // find a gallery item based on the relative path
		var selector800 = "img[src^='" + source + "-800']";	
		
		// get the caption of the gallery item
		var caption = $(selector800).siblings('.mbr-gallery-title').text();
		
		// one of the pictures has the relative path ending with 780, not 800. Not sure why, but deal with it:
		if(caption == ""){
			var source780 = source.substr(0, source.length - 1);
			var selector780 = "img[src^='" + source780 + "-780']";
			caption = $(selector780).siblings('.mbr-gallery-title').text();
		}
		
		// same foe 800 pic
		if(caption == ""){
			var source800_1 = source.substr(0, source.length - 1);
			var selector800_1 = "img[src^='" + source800_1 + "-800']";
			caption = $(selector800_1).siblings('.mbr-gallery-title').text();
		}
		
		// same for -626x410 pic
		if(caption == ""){
			//var source626 = source.substr(0, source.length - 1);
			var selector626 = "img[src^='" + source + "-626x410']";
			caption = $(selector626).siblings('.mbr-gallery-title').text();
		}
		
		// same for -800x1350
		if(caption == ""){
			var source = source.replace("-15", "15");
			var source1350 = "img[src^='" + source + "-800x1350']";
			caption = $(source1350).siblings('.mbr-gallery-title').text();
		}
		
		
		// update the caption of current "large" image
		 this.innerHTML = "<h5> " + caption + "</h5>";
		});
}
	
	
	
	
	


