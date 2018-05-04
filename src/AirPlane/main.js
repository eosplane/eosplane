/**
 * Created by Geogre on 16/6/29.
 */
//获取开始界面
var startDiv = document.getElementById("startdiv");
var mainDiv = document.getElementById("maindiv");
var bgDiv = document.getElementById("bgdiv");
var suspendDiv = document.getElementById("suspenddiv");
var endDiv = document.getElementById("enddiv");

var score = 0;
var scoreLabel = document.getElementById("scorelabel");
var endScore = document.getElementById("endscore");
/*
* 1.子弹打到飞机 判断坐标 子弹 敌机,敌机hp-,当hp为0的时候死,死->切换图片源(爆炸),分数增加,死飞机移除
* n个子弹,n个敌机
* for(i= 0;i< 子弹个数;i++){
* //每个子弹(1)
* for(j= 0; j<敌机个数;j++){
* bulletArray[]与 enemyArray[j] 比较 判断撞机
* }
* }
* 2.我方飞机死: 判断:我方飞机-敌方飞机,我就死了,整个游戏停止,停止定时器,end页面显示
* for(i= 0;i < 敌机个数;i++)
* {
* 我方飞机和地方飞机比较
* }
* 3.暂停:鼠标点击暂停;暂停:定时器关闭,暂停界面出现
*
* */
var timeSet;
/*
*飞机:
 * 图片:
 * 爆炸图片:
 * 血条:hp
 * 坐标:x,y
 * 飞机大小:w,h
 * 飞机分数:score
 * 速度:speed
*/
// function Bg(bx,by,bw,bh,imgSrc) {
//     this.bx = bx;
//     this.by = by;
//     this.bw = bw;
//     this.bh = bh;
//     this.imgSrc = imgSrc;
//
//     this.init = function () {
//         this.bgimage = document.createElement("img");
//         this.bgimage.src = this.imgSrc;
//         this.bgimage.style.left = this.px + "px";
//         this.bgimage.style.top = this.py +"px";
//         //把img标签插入到maindiv 标签下面
//         mainDiv.appendChild(this.bgimage);
//     }
//     this.init();
// }
function Plane(hp,px,py,pw,ph,score,speed,imgSrc,boomImgSrc) {
    this.hp = hp;
    this.px = px;
    this.py = py;
    this.pw = pw;
    this.ph = ph;
    this.score = score;
    this.speed = speed;
    this.imgSrc = imgSrc;
    this.boomImgSrc = boomImgSrc;
    
    this.isDied = false;
    this.content = 0;
    this.san = false;
    
    this.move = function () {
        //敌方飞机调用
        this.image.style.top = this.image.offsetTop + this.speed +"px";
    }
    this.init = function () {
        this.image = document.createElement("img");
        this.image.src = this.imgSrc;
        this.image.style.left = this.px + "px";
        this.image.style.top = this.py +"px";
        //把img标签插入到maindiv 标签下面
        mainDiv.appendChild(this.image);
    }
    this.init();
}

//子弹
function Bullet(bx,by,bw,bh,speed,imgSrc) {
    this.bx = bx;
    this.by = by;
    this.bw = bw;
    this.bh = bh;
    this.speed = speed;
    this.imgSrc = imgSrc;
    this.isDied = false;
  
    this.move = function () {
        //子弹
        this.bimage.style.top = this.bimage.offsetTop - this.speed +"px";
    }
    
    this.init = function () {
        this.bimage = document.createElement("img");
        this.bimage.src = this.imgSrc;
        this.bimage.style.left = this.bx + "px";
        this.bimage.style.top = this.by + "px";

        mainDiv.appendChild(this.bimage);
    }
    this.init();
}
/*
* 敌方飞机出现特点:
* 大飞机,中飞机,小飞机:
* 5个小+1个中
* 20个小 + 1个大
* 飞机都是从上往下飞
* 飞机速度随机值 1-4
* 飞机x坐标,随机值 0-320
* */
//产生min-max的随机整数
function myrandom(min,max) {
    //floor 向下取整数
    return Math.floor(min + (max - min)*Math.random());
}
// var selfbg = new Bg(0,0,300,500,"image/background_1.png");
var selfPlane = new Plane(1,200,420,60,80,0,0,
    "image/我的飞机.gif","image/本方飞机爆炸.gif");
var enemyArray = [];
var bulletArray= [];
var  flag1 = 0;
var  flag2 = 0;
var change = 0;
function timerAction() {
    scoreLabel.innerHTML = score +"分";
    //创建敌方飞机
    if(score > 3000 && change ==0){
        var san = new Plane(2,myrandom(0,320-89),-150,89,113,1000,myrandom(1,4),"image/parachute.png",
            "image/san.png");
        san.san = true;
        enemyArray.push(san);
        change = 1
    }
    flag1++;//如果定时器触发20次则创建
    if(flag1 % 5 == 0) {
          var  x= selfPlane.image.offsetLeft;
          var  y =selfPlane.image.offsetTop - 3;
        var b = new Bullet(x+10,y,3,7,5,"image/net.png");
        var c = new Bullet(x+40,y,3,7,5,"image/bamboo.png");
        bulletArray.push(b);
        bulletArray.push(c);
    }
    if(flag1 == 20){
        flag2++;
        if (flag2 %10 == 0){
            //创建中型飞机
            var p1 = new Plane(3,myrandom(0,320-50),-100,50,60,200,myrandom(1,2),"image/enemy3_fly_1.png",
                "image/中飞机爆炸.gif");
            enemyArray.push(p1);
        }
        if (flag2 %20 == 0){
            //创建大型飞机
            var p2 = new Plane(6,myrandom(0,320-110),-200,110,164,300,1,"image/enemy2_fly_1.png",
                "image/大飞机爆炸.gif");
            enemyArray.push(p2);
            flag2 = 0;
        }else{
            //创建小型飞机
            var p = new Plane(1,myrandom(0,320-34),-100,34,24,100,myrandom(5,8),"image/enemy1_fly_1.png",
                "image/小飞机爆炸.gif");
            enemyArray.push(p);
        }
        flag1 = 0;
    }
    //敌方飞机行为
    for(var i = 0;i < enemyArray.length;i++) {
        //如果飞机没有死,则移动
        if (enemyArray[i].isDied == false) {
            enemyArray[i].move();
            if ((enemyArray[i].image.offsetLeft + enemyArray[i].pw >= selfPlane.image.offsetLeft
                ) && (selfPlane.image.offsetLeft + selfPlane.pw > enemyArray[i].image.offsetLeft)
                && (selfPlane.image.offsetTop <= enemyArray[i].image.offsetTop + enemyArray[i].ph)) {
                selfPlane.image.src=selfPlane.boomImgSrc;
                endDiv.style.display="block";
                endScore.innerHTML=score;
                mainDiv.removeEventListener("mousemove",mouseMoveAction,true);
                clearInterval(timeSet);
            }
            
        }
        //如果飞机已经抛出屏幕,则从数组中移除飞机,从maindiv 移除img元素
        if ((enemyArray[i].image.offsetTop >568)){
            //把img标签移除
            mainDiv.removeChild(enemyArray[i].image);
            //数组中移除i元素
            enemyArray.splice(i,1);
        }
        if(enemyArray[i].isDied == true){
            enemyArray[i].content++;
            if(enemyArray[i].content == 10){
                score += enemyArray[i].score;
                mainDiv.removeChild(enemyArray[i].image);
                enemyArray.splice(i,1);
            }
        }
    
    }
    // 子弹行为
    for(var i = 0;i < bulletArray.length;i++) {
        bulletArray[i].move();
        for(var j= 0; j< enemyArray.length;j++){
            if((enemyArray[j].image.offsetLeft +enemyArray[j].pw>bulletArray[i].bimage.offsetLeft) &&
                (bulletArray[i].bimage.offsetLeft>enemyArray[j].image.offsetLeft ) &&
                (enemyArray[j].image.offsetTop+enemyArray[j].ph > bulletArray[i].bimage.offsetTop)&&(enemyArray[j].isDied==false)){
                bulletArray[i].isDied = true;
                if(enemyArray[j].san == true){
                    selfPlane.image.src = "image/aobam.png";
                }
                enemyArray[j].hp--;
                if(enemyArray[j].hp == 0) {
                    enemyArray[j].isDied=true;
                    enemyArray[j].image.src = enemyArray[j].boomImgSrc;
                }
            }
        }
        if (bulletArray[i].bimage.offsetTop < 0 || bulletArray[i].isDied==true) {
            //把img标签移除
            mainDiv.removeChild(bulletArray[i].bimage);
            //数组中移除i元素
            bulletArray.splice(i, 1);
        }
    }
}
//鼠标移动事件
function mouseMoveAction() {
    // console.log("666");
    var e = window.event;
    var x = e.clientX - 300;
    var y = e.clientY;
    
    selfPlane.image.style.left = x -selfPlane.pw/2 +"px";
    selfPlane.image.style.top = y -selfPlane.ph/2 +"px";
}

var pause = 0;
function clickAction() {
    //移除事件监听
    // console.log("单击事件");
    if (pause == 0){
        clearInterval(timeSet);
        suspendDiv.style.display = "block";
        mainDiv.removeEventListener("mousemove",mouseMoveAction,true);
        pause = 1;
    }else{
        suspendDiv.style.display = "none";
        timeSet = setInterval(timerAction,20);
        mainDiv.addEventListener("mousemove",mouseMoveAction,true);
        pause = 0;
    }
}

//添加事件监听
function addEventListener() {
    //鼠标移动
    mainDiv.addEventListener("mousemove",mouseMoveAction,true);
    //鼠标点击
    selfPlane.image.addEventListener("click",clickAction,true);
}

function Begin() {
    startDiv.style.display = "none";
    mainDiv.style.display = "block";
    
   timeSet =  setInterval(timerAction,20);
   addEventListener();
  
}

function start() {
    location.reload();
    startDiv.style.display = "block";
    mainDiv.style.display = "none";
    endDiv.style.display = "none";
}
function choice() {
    suspendDiv.style.display = "none";
    bgDiv.style.display = "block";
}
var time;
var bgFlag = 0;
function a() {
    bgDiv.style.display = "none";
    time = setInterval(timeAction,3000);
}
function timeAction() {
    if (bgFlag == 0){
        mainDiv.style.backgroundImage ="url(image/background_1.png)";
        bgFlag = 1;
    }else{
        mainDiv.style.backgroundImage ="url(image/灰色石头.png)";
        bgFlag = 0;
    }
}
function b() {
    clearInterval(time);
    bgDiv.style.display = "none";
    mainDiv.style.backgroundImage ="url(image/召唤师峡谷.png)";
    selfPlane.image.src ="image/bin.png";
}
function c() {
    clearInterval(time);
    bgDiv.style.display = "none";
    mainDiv.style.backgroundImage ="url(image/tanke1.png)";
    selfPlane.image.src ="image/tanke2.png";
}
