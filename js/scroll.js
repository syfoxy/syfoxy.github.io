$(document).ready(function(){
	$( 'a[href*=#]:not([href=#])' ).click( function() {
		var target = $( this.hash );
			target = target.length ? target : $( '[name='+this.hash.slice( 1 )+']' );
				{
					$( 'html,body' ).stop().animate(
					{
						scrollTop:target.offset().top - 120
					} , 1000 );
					return false;
				}
	});
})