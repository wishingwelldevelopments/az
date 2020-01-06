$('.dropdown').hide();
$('.thide').hide();
$('#continue-read').hide();
$('.hero').click(function(){
	$('.dropdown').slideUp();
	$("#mobile-menu").toggleClass("fa-bars fa-times");
});
$('#mobile-menu').click(function(){
	$('.dropdown').slideToggle();
	$(this).toggleClass("fa-bars fa-times");
});
$("#continue-read").click(function(){
	$('#mwriteup').css('height','auto');
	$('.hidden').css("display","block");				
	$('#hide-read').css("display","block");				
	$('#continue-read').css("display","none");				
	$('#EmpMark').css("margin-top","250px");				
});			
$("#hide-read").click(function(){
	$('#mwriteup').css('height','450px');
	$('.hidden').css("display","none");				
	$('#hide-read').css("display","none");				
	$('#continue-read').css("display","block");				
	$('#EmpMark').css("margin-top","0px");				
});			
$('#showteam').click(function(){
	$('.thide').slideDown();
	$(this).hide();
	$('#mwriteup').css('height','auto');
	$('.hidden').css("display","block");				
	$('#hide-read').css("display","block");				
	$('#continue-read').css("display","none");				
});
$('.logo-section').click(function(){
	window.location = 'index.html'
});

