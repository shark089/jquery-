$(function(){
	$('.slideshow').each(function() {
        var $slide = $(this).find('img'),
			slideCount = $slide.length,
			currentIndex = 0;
			$slide.eq(currentIndex).fadeIn();
			setInterval(showNextSlide,3000);
			function showNextSlide(){
				var nextIndex = (currentIndex+1) % slideCount;
				$slide.eq(currentIndex).fadeOut();
				$slide.eq(nextIndex).fadeIn();
				currentIndex = nextIndex;
			}
    });	
});