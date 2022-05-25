/*加载图片资源*/

let picture = [];

for(let n = 1; n <= 16; n++){
	picture[n-1] = new Image();
	picture[n-1].src = "image/" + n + ".png";
}


let pic=n=>{
	return picture[n-1];
}
