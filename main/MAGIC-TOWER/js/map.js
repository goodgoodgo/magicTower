/*地图信息*/

let getMap=(num)=>{
	var nums = {
		1:()=>m[0],
		2:()=>m[1],
		3:()=>m[2],
		4:()=>m[3],
		5:()=>m[4],
		6:()=>m[5],
		7:()=>m[6],
		8:()=>m[7],
		9:()=>m[8],
		10:()=>m[9],
		11:()=>m[10],
		12:()=>m[11]
	};
	return nums[num]();
}


setZero=(floor,x,y)=>{
	m[floor-1][x][y]=0;
}

setObject=(floor,x,y,num)=>{
	m[floor-1][x][y]=num;
}

function setDoor(floor,x,y){
	m[floor-1][x][y]+=10;
	if(m[floor-1][x][y]>41){
		m[floor-1][x][y]=0;
	}
}


/**
 * 空地: 	  0
 下楼入口： 1
 上楼入口： 2
 真墙：	  3
 假墙：	  4
 商人：	  5
 商店：	  6
 智者：	  7
 黄门：	  8
 蓝门：	  9
 红门：	  10
 封印门：	  11
 怪物：	  对应的num+100
 宝物：	  对应的num+200
 特殊宝物： 对应的num+300
 * @type {number[][]}
 */
let m = [
[//1
	[2,0,107,108,107,0,0,0,0,0,0],
	[3,3,3,3,3,3,3,3,3,3,0],
	[201,0,0,8,0,3,203,201,0,3,0],
	[0,101,0,3,0,3,204,201,0,3,0],
	[3,8,3,3,0,3,3,3,8,3,0],
	[209,0,0,3,0,8,104,110,104,3,0],
	[0,102,0,3,0,3,3,3,3,3,0],
	[3,8,3,3,0,0,0,0,0,0,0],
	[0,0,0,3,3,8,3,3,3,8,3],
	[201,0,209,3,209,0,0,3,0,104,0],
	[201,305,209,3,0,0,0,3,107,202,107]
],
[//2
	[1,0,9,0,0,0,0,0,0,0,0],
	[0,0,3,3,0,117,0,117,0,3,3],
	[0,3,3,3,3,3,11,3,3,3,3],
	[0,3,209,209,3,0,0,0,3,0,7],
	[0,3,209,0,11,0,0,0,11,0,0],
	[0,3,3,3,3,0,0,0,3,3,3],
	[7,3,0,0,3,0,0,0,3,0,5],
	[0,3,0,0,11,0,0,0,11,0,0],
	[0,3,3,3,3,0,0,0,3,3,3],
	[0,3,202,202,3,0,0,0,3,0,0],
	[2,3,202,0,11,0,0,0,11,0,0]
],
[//3
	[209,204,3,209,202,209,3,0,3,0,201],
	[0,201,3,202,209,202,3,0,8,104,0],
	[110,0,3,209,210,209,3,0,3,3,3],
	[8,3,3,3,0,3,3,0,3,0,7],
	[0,0,104,0,0,0,107,0,0,0,0],
	[8,3,3,0,0,0,3,0,3,3,3],
	[101,0,3,3,0,3,3,0,3,0,201],
	[0,209,3,0,0,0,3,0,8,110,209],
	[201,203,3,0,0,0,3,0,3,3,3],
	[3,3,3,3,0,3,3,108,3,0,0],
	[1,0,0,0,0,0,3,0,8,0,2]
],
[//4
	[0,210,0,3,0,6,0,3,0,7,0],
	[201,0,209,3,0,0,0,3,209,0,202],
	[0,0,0,3,0,0,0,3,0,102,0],
	[3,8,3,3,3,9,3,3,3,8,3],
	[0,110,0,8,0,108,0,0,101,0,0],
	[0,0,0,3,3,3,3,3,3,3,3],
	[108,0,107,0,0,0,0,0,0,0,0],
	[8,3,3,8,3,3,3,8,3,3,8],
	[0,3,0,104,0,3,0,110,0,3,0],
	[0,3,107,0,209,3,203,0,201,3,0],
	[2,3,209,107,209,3,0,107,0,3,1],
],
[//5
	[2,3,0,108,8,0,3,0,0,8,0],
	[0,3,0,0,3,209,3,107,107,3,108],
	[0,8,104,0,3,0,3,209,209,3,0],
	[3,3,3,8,3,104,3,209,209,3,0],
	[209,0,110,0,3,0,3,3,3,3,0],
	[209,0,0,104,3,0,107,0,0,0,0],
	[3,102,3,3,3,0,3,3,3,3,108],
	[0,0,0,0,3,107,3,0,0,0,0],
	[204,209,201,210,3,0,3,8,3,3,3],
	[3,3,3,3,3,0,3,0,3,0,0],
	[1,0,0,0,0,0,3,0,4,0,301]
],
[//6
	[1,3,209,209,3,0,110,0,209,107,0],
	[0,3,209,209,3,0,3,3,3,3,8],
	[0,3,3,108,3,0,3,201,0,101,0],
	[0,8,8,0,8,0,3,5,0,0,104],
	[0,3,3,3,3,0,3,3,3,3,3],
	[0,0,108,110,0,209,0,101,102,0,0],
	[3,3,3,3,3,0,3,3,3,3,0],
	[110,0,0,7,3,0,8,8,0,8,0],
	[0,104,0,204,3,0,3,3,108,3,108],
	[8,3,3,3,3,0,3,0,0,3,0],
	[0,107,0,0,101,0,3,201,201,3,2]
],
[//7
	[2,3,203,3,0,5,0,3,209,3,107],
	[0,3,201,3,0,0,0,3,209,3,108],
	[0,3,104,3,108,3,102,3,201,3,107],
	[0,3,0,3,0,3,0,3,0,3,0],
	[8,3,8,3,9,3,8,3,101,3,8],
	[0,102,0,110,0,0,0,0,0,0,0],
	[8,3,8,3,8,3,8,3,102,3,8],
	[0,3,0,3,0,3,0,3,0,3,0],
	[0,3,0,3,104,3,108,3,202,3,0],
	[107,3,107,3,209,3,110,3,209,3,0],
	[0,108,0,3,209,3,202,3,209,3,1]
],
[//8
	[1,0,8,8,0,2,0,3,209,0,209],
	[0,0,3,3,0,0,107,3,0,211,0],
	[8,3,3,3,3,8,3,3,202,0,201],
	[0,3,209,209,209,0,0,3,3,11,3],
	[201,3,3,3,3,3,110,3,116,0,116],
	[0,108,107,108,0,3,0,3,0,0,0],
	[3,3,3,3,8,3,104,3,3,8,3],
	[0,0,0,104,0,101,0,110,0,0,0],
	[8,3,3,3,3,3,3,3,3,3,8],
	[107,0,3,203,209,3,210,201,3,0,101],
	[0,104,9,209,204,3,209,0,8,102,0]
],
[//9
	[0,0,101,8,0,1,0,8,107,0,201],
	[0,209,0,3,0,0,0,3,0,107,0],
	[102,3,3,3,3,9,3,3,3,3,0],
	[0,209,0,3,209,0,209,8,8,0,0],
	[204,0,104,8,0,203,0,3,3,4,3],
	[3,3,3,3,3,3,108,3,0,0,102],
	[209,0,8,102,209,3,0,3,302,3,0],
	[102,0,3,0,0,3,0,3,3,3,8],
	[8,3,3,3,8,3,0,3,209,0,110],
	[0,201,3,0,101,3,104,3,0,101,0],
	[2,0,9,0,0,8,0,8,110,0,201]
],
[//10
	[0,0,0,0,0,0,0,0,0,0,0],
	[3,3,3,3,0,0,0,3,3,3,3],
	[101,101,101,3,3,0,3,3,101,101,101],
	[0,102,0,11,0,0,0,11,0,102,0],
	[3,3,3,3,0,103,0,3,3,3,3],
	[101,204,101,3,0,0,0,3,101,203,101],
	[0,102,0,3,3,0,3,3,0,102,0],
	[0,0,0,3,3,0,3,3,0,0,0],
	[8,3,8,3,3,10,3,3,8,3,8],
	[0,3,0,3,0,0,0,3,0,3,0],	
	[1,3,0,110,0,0,0,110,0,3,202]
]
]
/*let m =[
	[,,,,,,,,,,],
	[,,,,,,,,,,],
	[,,,,,,,,,,],
	[,,,,,,,,,,],
	[,,,,,,,,,,],
	[,,,,,,,,,,],
	[,,,,,,,,,,],
	[,,,,,,,,,,],
	[,,,,,,,,,,],
	[,,,,,,,,,,],
	[,,,,,,,,,,]
];*/