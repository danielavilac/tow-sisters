$(window).load(function() {
	$('.menu').css("margin-top", $('.navbar').height() - $('.menu').height());
	$('.search').css("margin-top", $('.navbar').height() - $('.search').height());
	console.log($('.navbar').height() - $('.search').height());
});