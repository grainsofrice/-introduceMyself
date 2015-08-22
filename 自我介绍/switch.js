window.onload = function(){
	var title = document.getElementById("title");
	var h2=title.getElementsByTagName("h2")[0];
	var h3=title.getElementsByTagName("h3")[0];
	var as=document.getElementsByTagName("a");
	console.log(h2);
	for(var i=0;i<as.length;i++){
		as[i].onclick = function(){
			h2.className=h2.className.replace("active","");
			h3.className=h3.className.replace("active","");
			setTimeout(function(){
				h2.className+='active';
				h3.className+='active';
			},1000);
			
		}
	}
}