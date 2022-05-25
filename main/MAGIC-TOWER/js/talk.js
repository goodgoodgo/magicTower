
funTalk=()=>{       //智者对话
    if(hero.floor==2)
        alertify.alert("铁剑在第 5 层，铁盾在第 9 层，你需要尽快拿到他们来提升你的实力！");
    else if(hero.floor==3){
        alertify.alert("这是一本怪物图鉴，你可以点击右下角查看怪物属性值");
        hero.book=1;
    }
    else if(hero.floor==4)
        alertify.alert("如果你在和我对话之前就拿到了 铁盾 那么说明你是一个合格的玩家");
    else if(hero.floor==6)
        alertify.alert("尽量提升你的防御！当你的防御大于敌人的攻击时，就可以无伤杀怪！");
    else if(hero.floor==4)
        alertify.alert("如果你在和我对话之前就拿到了 铁盾 那么说明你是一个合格的玩家");
    else
        return;
}
merchTalk=()=>{     //商人对话
    alertify.set({ labels: {
        ok : "好的",
        cancel : "不买"
    } });
    if(hero.floor==6){
        alertify.confirm("我有 5 把蓝钥匙，50块钱卖给你", function (e) {
            if(e){
                if(hero.money<50){
                    alertify.alert("没钱，gun！");
                }
                else{
                    $("#coin").html(hero.money-=50);
                    $("#yk").html(hero.yk+=5);
                    setZero(6,3,7);
                }
            } 
            else return;
        });
    }
    else if(hero.floor==7){
        alertify.confirm("我有一把蓝钥匙，50块钱卖给你", function (e) {
            if(e){
                if(hero.money<50){
                    alertify.alert("没钱，gun！");
                }
                else{
                    $("#coin").html(hero.money-=50);
                    $("#bk").html(hero.bk+=1);
                    setZero(7,0,5);
                }
            } 
            else return;
        });
    }
    else return;
}

buyTalk=()=>{       //商店对话
	let money=hero.buyTimes*hero.buyTimes*10+20-10*hero.buyTimes;
	$("#talk span").html("你可以花费"+money+"块钱，选择以下增益之一：");
	hero.enable=0;
	$("#talk").show();
}