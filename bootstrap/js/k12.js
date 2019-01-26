$(document).ready(function(){
	$(window).scroll(function(){
		// console.log("scroll");
		var res = $(this).scrollTop();
		// console.log(res);

		if( res > 100 ){
			$('#topBtn').fadeIn(2000);
		}else if(res < 100){
			$('#topBtn').fadeOut();
		}
	});

	$('#topBtn').click(function(){
		// alert();
		$('html').animate({
			scrollTop: 0
		},1000);
	});
})