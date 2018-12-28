$(document).ready(function(){
	flag = 0;
	$(".menuIcon").click(function(){
		if(flag==0){
			$(".open").hide();
			$(".close").show();
			$(".close").css('display','flex');
			
			$(".menus").fadeIn(300);
			flag=1;
		}
		else{
			$(".open").show();
			$(".close").hide();
			$(".menus").fadeOut(300);
			flag=0;
		}
	});
});