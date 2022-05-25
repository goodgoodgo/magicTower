let draw=()=>{
    let c = $("canvas")[0].getContext("2d");
    for(let a = 1; a<= 11; a++){
        for(let b = 1; b <= 4; b++){
            c.drawImage(pic(8), 0, 0, 32, 32, 32 * b, 32 * (a+1), 32, 32);
            c.drawImage(pic(8), 0, 0, 32, 32, 32 * b + 480, 32 * (a+1), 32, 32);
        }
    }
    //地板
    for(let a = 1; a<= 11; a++){//绘制地板
        for(let b = 1; b <= 11; b++){
            c.drawImage(pic(13),32 * b + 128, 32 * a+32);
        }
    }
    //物品绘制
    let theGoods=getMap(hero.floor);
    for(let a = 0; a< 11; a++){
        for(let b = 0; b < 11; b++){
            let num=theGoods[a][b];
            if(num>200&&num<300){     //绘制普通宝物
                let  testFn=(num)=> {
                    let goods = {
                        //绘制红药水
                        1:()=>c.drawImage(pic(2), 0, 32, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制蓝药水
                        2:()=>c.drawImage(pic(2), 32, 32, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制红宝石
                        3:()=>c.drawImage(pic(2), 0, 0, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制蓝宝石
                        4:()=>c.drawImage(pic(2), 32, 0, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制红药水
                        5:()=>c.drawImage(pic(2), 0, 32, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制蓝药水
                        6:()=>c.drawImage(pic(2), 32, 32, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //红宝石plus
                        7:()=>c.drawImage(pic(2), 0, 0, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制蓝宝石plus
                        8:()=>c.drawImage(pic(2), 32, 0, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制黄钥匙
                        9:()=>c.drawImage(pic(2), 0, 128, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制蓝钥匙
                        10:()=>c.drawImage(pic(2), 32, 128, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制红钥匙
                        11:()=>c.drawImage(pic(2), 64, 128, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                    };
                    return goods[num-200]();
                };
                testFn(num);
            }else if(num<100&&num>0){   //绘制基本事物
                let  testFw=(num)=> {
                    let goods = {
                        //绘制下楼梯
                        1:()=>c.drawImage(pic(6), 32 * b + 160, 32 * (a + 2)),
                        //绘制上楼梯
                        2:()=>c.drawImage(pic(7), 32 * b + 160, 32 * (a + 2)),
                        //绘制真墙
                        3:()=>c.drawImage(pic(14), 32 * b + 160, 32 * (a + 2)),
                        //绘制假墙
                        4:()=>c.drawImage(pic(8), 32, 0, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        //绘制商人
                        5:()=>c.drawImage(pic(10), 32 * picState, 32, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制商店
                        6:()=>c.drawImage(pic(12), 32 * (b - 1) + 160, 32 * (a+2)),
                        //绘制智者
                        7:()=>c.drawImage(pic(10), 32 * picState, 0, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        //绘制黄门
                        8:()=>c.drawImage(pic(5), 0, 0, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        //绘制蓝门
                        9:()=>c.drawImage(pic(5), 32, 0, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        //绘制红门
                        10:()=>c.drawImage(pic(5), 64, 0, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        //绘制封印门
                        11:()=>c.drawImage(pic(5), 96, 0, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        //绘制开黄门动画
                        18:()=>c.drawImage(pic(5), 0, 32, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        28:()=>c.drawImage(pic(5), 0, 64, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        38:()=>c.drawImage(pic(5), 0, 96, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        //绘制开蓝门动画
                        19:()=>c.drawImage(pic(5), 32, 32, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        29:()=>c.drawImage(pic(5), 32, 64, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        39:()=>c.drawImage(pic(5), 32, 96, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        //绘制开红门动画
                        20:()=>c.drawImage(pic(5), 64, 32, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        30:()=>c.drawImage(pic(5), 64, 64, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        40:()=>c.drawImage(pic(5), 64, 96, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        //绘制开封印门动画
                        21:()=>c.drawImage(pic(5), 96, 32, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        31:()=>c.drawImage(pic(5), 96, 64, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                        41:()=>c.drawImage(pic(5), 96, 96, 32, 32, 32 * b + 160, 32 * (a + 2), 32, 32),
                    };
                    return goods[num]();
                };
                testFw(num);
            }else if(theGoods[a][b]>100&&theGoods[a][b]<200){   //绘制怪物
                let monster=getEnermey(theGoods[a][b]%100);
                c.drawImage(pic(3), 32 * picState, monster.top, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32);
            }else if(num>300){   //绘制神器
                let  testFg=(num)=> {
                    let goods = {
                        1:()=>c.drawImage(pic(2), 0, 384, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        2:()=>c.drawImage(pic(2), 0, 448, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        3:()=>c.drawImage(pic(14), 32 * b + 160, 32 * (a + 2)),
                        4:()=>c.drawImage(pic(2), 32, 448, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                        5:()=>c.drawImage(pic(2), 64, 224, 32, 32, 32 * b + 160, 32 * (a+2), 32, 32),
                    };
                    return goods[num-300]();
                };
                testFg(num);
            }
        }
    }
    //hero绘制
    c.drawImage(pic(1), 0, (hero.face-1) * 32, 32, 32, 32 * hero.x + 128, 32 * hero.y+32, 32, 32);
    //物品栏绘制
    if(hero.book==1)
        c.drawImage(pic(2), 0, 224, 32, 32, 520, 375, 32, 32);
    if(hero.fly==1)
        c.drawImage(pic(2), 64, 224, 32, 32, 520, 330, 32, 32);
}

//战斗动画
let fighting=()=>{
    let c = $("canvas")[0].getContext("2d");
    c.drawImage(pic(15),0, 0, 32, 32, hero.x*32+128, hero.y*32+32, 32, 32);
    sleep(200).then(() => {
        hero.isFighting=0;
    })
}