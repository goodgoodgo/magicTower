/*特殊物品和神器*/


let getSpecialTreasure=(num)=>{
	switch(num){
		case 1:
			Ironwork();
			
			break;
		case 2:
			Ironies();
			break;
		case 3:
			silversWord();
			break;
		case 4:
			silverShield();
			break;
		case 5:
			fly();
			break;
	}
}


let Ironwork=()=>{		//铁剑
	hero.att+=10;
}

let Ironies=()=>{		//铁盾
	hero.def+=10;
}

let silversWord=()=>{		//银剑
	hero.att+=20;
}
let silverShield=()=>{	//银盾
	hero.def+=20;
}
let fly=()=>{				//楼层传送器
	hero.fly=1;
	console.log("mygod");
}