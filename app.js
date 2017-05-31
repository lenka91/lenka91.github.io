window.onload = function(){
	$("#putImg1").html("<img src=\"photo/img1.jpg\" class=\"photo\">");
	$("#putImg2").html("<img src=\"photo/img2.jpg\" class=\"photo\">");
	$("#putImg3").html("<img src=\"photo/img3.jpg\" class=\"photo\">");
	$("#putImg4").html("<img src=\"photo/img4.jpg\" class=\"photo\">");

	$(".option").click(function(){
		var getsrc = $(this).find("img").attr("src");
  		$("#show-photo").html("<img src=\"" + getsrc + "\" class=\"photo\">");
	});
}
