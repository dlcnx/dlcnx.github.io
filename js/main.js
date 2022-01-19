//默认的detail内容
function remain(){
    $("#detail").html("These are my websites");
}

//移到图片1上时
$(function(){
    $("#p1").hover(
		function(){
			$("#detail").html("My repository");
		},
		function(){
			remain()
		}
    )
});

//移到图片2上时
$(function(){
    $("#p2").hover(
		function(){
			$("#detail").html("My blog");
		},
		function(){
			remain()
		}
    )
});

//移到图片3上时
$(function(){
    $("#p3").hover(
		function(){
			$("#detail").html("My cloud disk");
		},
		function(){
			remain()
		}
    )
});