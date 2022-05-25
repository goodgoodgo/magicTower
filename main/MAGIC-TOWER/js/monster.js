/*负责敌人信息的管理*/

let getEnermey=(num)=>{
	let nums = {
		1:()=>e1,
		2:()=>e2,
		3:()=>e3,
		4:()=>e4,
		5:()=>e5,
		6:()=>e6,
		7:()=>e7,
		8:()=>e8,
		9:()=>e9,
		10:()=>e10,
		11:()=>e11,
		12:()=>e12,
		13:()=>e13,
		14:()=>e14,
		15:()=>e15,
		16:()=>e16,
		17:()=>e17,
		18:()=>e18,
		19:()=>e19,
		20:()=>e20
	};
	return nums[num]();
	
}


var e1 = {//骷髅人
	name:"骷髅人",
	id:1,
	hp:50,
	att:42,
	def:6,
	coin:6,
	top:0
};

var e2 = {//骷髅士兵
	name:"骷髅士兵",
	id:2,
	hp:55,
	att:52,
	def:12,
	coin:8,
	top:32
};

var e3= {//骷髅队长
	name:"骷髅队长",
	id:3,
	hp:100,
	att:65,
	def:15,
	coin:30,
	top:64
};

var e4 = {//小蝙蝠
	name:"小蝙蝠",
	id:5,
	hp:35,
	att:38,
	def:3,
	coin:3,
	top:128
};

var e5 = {//大蝙蝠
	name:"大蝙蝠",
	id:6,
	hp:60,
	att:100,
	def:8,
	coin:12,
	top:160
};

var e6 = {//吸血鬼
	name:"吸血鬼",
	id:8,
	hp:444,
	att:199,
	def:66,
	coin:144,
	top:224
};

var e7 = {//绿史莱姆
	name:"绿史莱姆",
	id:9,
	hp:35,
	att:18,
	def:1,
	coin:1,
	top:256
};

var e8 = {//红史莱姆
	name:"红史莱姆",
	id:10,
	hp:45,
	att:20,
	def:2,
	coin:2,
	top:288
};

var e9 = {//大史莱姆
	name:"大史莱姆",
	id:11,
	hp:130,
	att:60,
	def:3,
	coin:8,
	top:320
};

var e10 = {//初级法师
	name:"初级法师",
	id:13,
	hp:60,
	att:32,
	def:8,
	coin:5,
	top:384
};

var e11 = {//高级法师
	name:"高级法师",
	id:14,
	hp:100,
	att:95,
	def:30,
	coin:22,
	top:416
};

var e12 = {//兽人
	name:"兽人",
	id:17,
	hp:260,
	att:85,
	def:5,
	coin:18,
	top:512
};

var e13 = {//兽人武士
	name:"兽人武士",
	id:18,
	hp:320,
	att:120,
	def:15,
	coin:30,
	top:544
};

var e14 = {//石头人
	name:"石头人",
	id:19,
	hp:20,
	att:100,
	def:68,
	coin:28,
	top:576
};

var e15 = {//幽灵
	name:"幽灵",
	id:20,
	hp:320,
	att:140,
	def:20,
	coin:30,
	top:608
};

var e16 = {//初级卫兵
	name:"初级卫兵",
	id:21,
	hp:50,
	att:48,
	def:22,
	coin:12,
	top:640
};

var e17 = {//中级卫兵
	name:"中级卫兵",
	id:22,
	hp:100,
	att:180,
	def:110,
	coin:50,
	top:672
};

var e18 = {//魔王
	name:"魔王",
	id:25,
	hp:8000,
	att:5000,
	def:1000,
	coin:5000,
	top:0
};

var e19 = {//魔龙
	name:"魔龙",
	id:32,
	hp:1500,
	att:600,
	def:250,
	coin:800,
	top:0
};

var e20 = {//大乌贼
	name:"大乌贼",
	id:33,
	hp:1200,
	att:180,
	def:20,
	coin:100,
	top:0
};