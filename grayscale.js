function grayscalePage(){
	$('img').css({"-webkit-filter" : "grayscale(100%)"});
	$('i').css({"-webkit-filter" : "grayscale(100%)"});
}

$('document').ready(function(){
	grayscalePage();
	$('div').css({"-webkit-filter" : "grayscale(100%)"});
});

$('body').bind("DOMSubtreeModified", function() {	
	grayscalePage();
});
