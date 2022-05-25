document.onkeydown = fun;
let sleep =(time)=> {
    return new Promise((resolve) => setTimeout(resolve, time));
}
let map=getMap(hero.floor);
    function fun(e) {
        var e = e || window.event;  //标准化事件处理
        if(hero.enable==0) return;
        if(e.keyCode==37&&hero.x>1&&map[hero.y-1][hero.x-2]!=3){    //向左走
            hero.face=2;
            check(hero.y-1,hero.x-2);
            hero.x--;    
        }
        else if(e.keyCode==38&&hero.y>1&&map[hero.y-2][hero.x-1]!=3){    //向上走
            hero.face=4;
            check(hero.y-2,hero.x-1);
            if(map[hero.y-2][hero.x-1]!=6&&map[hero.y-2][hero.x]!=6&&map[hero.y-2][hero.x-2]!=6)
                hero.y--;
        }
        else if(e.keyCode==39&&hero.x<11&&map[hero.y-1][hero.x]!=3){    //向右走
            hero.face=3;
            check(hero.y-1,hero.x);
            hero.x++;
        }
        else if(e.keyCode==40&&hero.y<11&&map[hero.y][hero.x-1]!=3){    //向下走
            hero.face=1;
            check(hero.y,hero.x-1);
            hero.y++;
        }
        if(map[hero.y-1][hero.x-1]>3&&map[hero.y-1][hero.x-1]<100||map[hero.y-1][hero.x-1]>200){
            setZero(hero.floor,hero.y-1,hero.x-1);
        }
}
check=(x,y)=>{
    let objectNum=map[x][y];
    if(objectNum<100&&objectNum>0){
        //事件开启
        let beginEve=(objectNum)=>{
            let eve={
                1:()=>{//下楼梯
                    map=getMap(--hero.floor);
                    $("#floor")[0].innerHTML=hero.floor;
                },
                2:()=>{//上楼梯
                    map=getMap(++hero.floor);
                    $("#floor")[0].innerHTML=hero.floor;
                    if(hero.floor>hero.maxFloor) hero.maxFloor=hero.floor;
                },
                4:()=>{},//假墙
                5:()=>{//商人
                    hero.x=hero.x*2-y-1;
                    hero.y=hero.y*2-x-1;
                    merchTalk();
                },
                6:()=>{//商店
                    buyTalk();
                },
                7:()=>{//智者
                    hero.x=hero.x*2-y-1;
                    hero.y=hero.y*2-x-1;
                    funTalk();

                    //对话结束消失作者
                    setZero(hero.floor,x,y);

                },
                8:()=>{//黄门
                    hero.x=hero.x*2-y-1;
                    hero.y=hero.y*2-x-1;
                    if(hero.yk>0){
                        $("#yk")[0].innerHTML=--hero.yk;
                        hero.enable=0;
                        openDoor(x,y);
                    }
                },
                9:()=>{//蓝门
                    hero.x=hero.x*2-y-1;
                    hero.y=hero.y*2-x-1;
                    if(hero.bk>0){
                        $("#bk")[0].innerHTML=--hero.bk;
                        openDoor(x,y);
                    }
                },
                10:()=>{ //红门
                    hero.x=hero.x*2-y-1;
                    hero.y=hero.y*2-x-1;
                    if(hero.rk>0){
                        $("#rk")[0].innerHTML=--hero.rk;
                        openDoor(x,y);
                    }
                },
                11:()=>{//封门
                    hero.x=hero.x*2-y-1;
                    hero.y=hero.y*2-x-1;
                    switch(hero.floor){
                        case 2:
                            if(map[1][5]==0&&map[1][7]==0)
                                openDoor(x,y);
                            break;
                        case 8:
                            if(map[x+1][y-1]==0&&map[x+1][y+1]==0)
                                openDoor(x,y);
                            break;
                        case 10:
                            if(map[3][4]==0&&map[3][5]==0&&map[3][6]==0&&map[4][4]==0&&map[4][6]==0&&map[5][4]==0&&map[5][5]==0&&map[5][6]==0)
                                openDoor(x,y);
                            break;
                    }
                },
            };
            return eve[objectNum]();
        }
        beginEve(objectNum);
    }
    else if(objectNum<200&&objectNum>100){//战斗！！！TTK
        hero.isFighting=1;
        let monText=getEnermey(objectNum-100);//存储怪物各项数据
        if(objectNum==103&&x==4){
            Bossevent();
            return;
        }

        let damage;//最终造成伤害
        if(hero.att>monText.def){//角色攻击大于怪物
            damage=(Math.ceil(monText.hp/(hero.att-monText.def))-1)*(monText.att-hero.def);
            if(damage<0)    damage=0;
            if(hero.HP>damage){//角色血量大于造成伤害
                //战斗动画
                hero.enable=0;
                let id0=setInterval(function(){//启动动画
                    fighting();
                    if(hero.isFighting==0){
                        clearInterval(id0);
                        setZero(hero.floor,hero.y-1,hero.x-1);
                        hero.enable=1;
                    }
                },200);
                $("#hp")[0].innerHTML=(hero.HP-=damage);
                $("#coin")[0].innerHTML=(hero.money+=monText.coin);
            }
            else{
                hero.x=hero.x*2-y-1;
                hero.y=hero.y*2-x-1;
            }
        }
        else{
            hero.x=hero.x*2-y-1;
            hero.y=hero.y*2-x-1;
        }

    }
    else if(objectNum<300&&objectNum>0){
        let treasure=getTreasure(objectNum-200);
        $("#hp")[0].innerHTML=(hero.HP+=treasure.hp);
        $("#att")[0].innerHTML=(hero.att+=treasure.att);
        $("#def")[0].innerHTML=(hero.def+=treasure.def);
        $("#yk")[0].innerHTML=(hero.yk+=treasure.yk);
        $("#bk")[0].innerHTML=(hero.bk+=treasure.bk);
        $("#rk")[0].innerHTML=(hero.rk+=treasure.rk);
    }
    else{
        getSpecialTreasure(objectNum-300);
        $("#att")[0].innerHTML=hero.att;
        $("#def")[0].innerHTML=hero.def;
        if(hero.fly==1)
            $("#flyFloor").show();
    }
}

$(document).ready(function(){       //各类点击事件
    $("#monsterBook").click(function(){         //怪物书点击事件

        if(hero.book==1){
            hero.enable=0;  //看书不能动哈
            $("#book").show();
            $("#cancel").show();
            $("#book ul").remove();
            $("#book").append("<ul></ul>");
            appendMonster();
        }
    });
    $("#cancel").click(function(){
        $("#book").hide();
        $("#cancel").hide();
        hero.enable=1;
    });


    $("#fly").click(function(){         //飞行器点击事件
        if(hero.fly==0) return;
        let floor=parseInt($("#flyFloor").val());
        if(floor>0&&floor<=hero.maxFloor){
            adjustPos(floor);
            hero.floor=floor;
            $("#floor")[0].innerHTML=hero.floor;
            map=getMap(floor);
        }
        else
            alertify.alert("无法到达该层");
    });
    
    /*商店点击事件*/
    $("#talk div:nth-child(2)").click(function (){
        if(hero.money<hero.buyTimes*hero.buyTimes*10+20-10*hero.buyTimes) return;
        $("#coin").html(hero.money-=(hero.buyTimes*hero.buyTimes*10+20-10*hero.buyTimes));
        $("#hp").html(hero.HP+=400);
        hero.buyTimes++;
        buyTalk();
    });
    $("#talk div:nth-child(3)").click(function (){
        if(hero.money<hero.buyTimes*hero.buyTimes*10+20-10*hero.buyTimes) return;
        $("#coin").html(hero.money-=(hero.buyTimes*hero.buyTimes*10+20-10*hero.buyTimes));
        $("#att").html(hero.att+=2);
        hero.buyTimes++;
        buyTalk();
    });
    $("#talk div:nth-child(4)").click(function (){
        if(hero.money<hero.buyTimes*hero.buyTimes*10+20-10*hero.buyTimes) return;
        $("#coin").html(hero.money-=(hero.buyTimes*hero.buyTimes*10+20-10*hero.buyTimes));
        $("#def").html(hero.def+=4);
        hero.buyTimes++;
        buyTalk();
    });
    $("#talk div:nth-child(5)").click(function (){
        $("#talk").hide();
        hero.enable=1;
    });
});


openDoor=(x,y)=>{
        hero.enable=0;
        setTimeout(function(){setDoor(hero.floor,x,y)},0);
        setTimeout(function(){setDoor(hero.floor,x,y)},150);
        setTimeout(function(){setDoor(hero.floor,x,y)},300);
        setTimeout(function(){setDoor(hero.floor,x,y)},450);
        setTimeout(function(){hero.enable=1},450);
    }

appendMonster=()=>{
    let mon=[21];
    let map=getMap(hero.floor);
    let i=21,j;
    while(i--) mon[i]=0;
    console.log(mon[10]);
    for(i=0;i<11;i++){
        for(j=0;j<11;j++){
            if(map[i][j]>100&&map[i][j]<200)
                mon[map[i][j]-100]=1;
        }
    }

    j=0;
    for(i=1;i<21;i++){
        if(mon[i]==1){
            let monText=getEnermey(i);
            let damage;
            if(hero.att>monText.def){
                damage=(Math.ceil(monText.hp/(hero.att-monText.def))-1)*(monText.att-hero.def)
                if(damage<0)
                    damage=0;
            }
            else {
                damage = "我真菜";
            }
            $("#book ul").append("<li><div><img src=\"image/3.png\"></div><span>名称: </span>"+monText.name+"<span> 血量: </span>"+monText.hp+"<span> 攻击: </span>"+monText.att+"<span> 防御: </span>"+monText.def+"<span> 金钱: </span>"+monText.coin+"<span> 伤害: </span>"+damage+"</li>");
            $("#book ul li div").last().css({
                "clip":"rect("+monText.top+"px ,32px , "+(monText.top+32)+"px, 0px)",
                "top":10-monText.top+45*(j++)
            });
        }
    }
}

adjustPos=(floor)=>{
    if(floor<hero.floor){

        if(floor==1||floor==5||floor==7)
                hero.x=1,hero.y=1;
        else if(floor==2||floor==4||floor==9)
                hero.x=1,hero.y=11;
        else if(floor==3||floor==6)
                hero.x=11,hero.y=11;
        else if(floor==8||floor==10)        
                hero.x=6,hero.y=1;   
    }
    else{
        if(floor==1||floor==2||floor==6||floor==8)
            hero.x=1,hero.y=1;
        else if(floor==3||floor==5||floor==10)
            hero.x=1,hero.y=11;
        else if(floor==4||floor==7)
            hero.x=11,hero.y=11;
        else if(floor==9)
            hero.x=6,hero.y=1;
    }
}

Bossevent=()=>{
    setZero(hero.floor,2,0);
    setZero(hero.floor,2,1);
    setZero(hero.floor,2,2);
    setZero(hero.floor,2,5);
    setZero(hero.floor,2,8);
    setZero(hero.floor,2,9);
    setZero(hero.floor,2,10);
    setZero(hero.floor,3,1);
    setZero(hero.floor,3,9);
    setZero(hero.floor,3,3);
    setZero(hero.floor,3,7);
    setZero(hero.floor,4,5);
    setZero(hero.floor,4,5);

    setObject(hero.floor,3,4,101);
    setObject(hero.floor,3,5,101);
    setObject(hero.floor,3,6,101);
    setObject(hero.floor,5,4,101);
    setObject(hero.floor,5,5,101);
    setObject(hero.floor,5,6,101);
    setObject(hero.floor,4,4,102);
    setObject(hero.floor,4,6,102);
    setObject(hero.floor,1,5,103);

    setObject(hero.floor,6,5,11);
    setObject(hero.floor,2,5,11);
}