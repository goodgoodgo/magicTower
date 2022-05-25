/**
 * 负责游戏的启动和初始化
 */
let picState = 0;
let doorState = -1;
/**
 * 1000ms的渐进过场用于加载资源
 */
$(document).ready(function(){
	$("#canvas").fadeIn("1000");
	initialize();
});

/**
 * 初始化，并重复执行draw()函数,实现怪物的动态效果
 */
initialize=()=>{
	showTitle();
	//setEvent();
	setInterval(function(){//启动动画
			picState=picState%3+1;
    		doorState=(doorState+1)%4;
			draw();
	},150);
}
/**
 * 展示标题
 */
showTitle=()=>{
	let canvas = $("canvas")[0];
	let c = canvas.getContext("2d");
	c.font = "15px Arial";
	c.fillStyle = "black";
	c.textBaseline = "middle";
	c.fillText("魔塔",canvas.width/2-20,10);
}

