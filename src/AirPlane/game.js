function Game() {
  this.inited = false;

  this.init = function () {
    //获取开始界面
    this.startDiv = document.getElementById("startdiv");
    this.mainDiv = document.getElementById("maindiv");
    this.endDiv = document.getElementById("enddiv");

    this.score = 0;
    this.scoreLabel = document.getElementById("scorelabel");
    this.endScore = document.getElementById("endscore");

    this.timeSet = null;

    this.selfPlane = new Plane(this,1,200,420,60,80,0,0,
        // "/image/我的飞机.gif","/image/本方飞机爆炸.gif");
        "/planes/spiked ship 3.PNG","/planes/spiked ship 3.PNG");

    this.enemyArray = [];
    this.bulletArray= [];
    this.flag1 = 0;
    this.flag2 = 0;
    this.change = 0;

    this.pause = 0;

    this.time = null;
    this.bgFlag = 0;

    this.inited = true;
  }
}

export function newGame() {
  return new Game();
}

export function newPlane(game,hp,px,py,pw,ph,score,speed,imgSrc,boomImgSrc) {
  return new Plane(game,hp,px,py,pw,ph,score,speed,imgSrc,boomImgSrc);
}

export function newBullet(game,bx,by,bw,bh,speed,imgSrc) {
  return new Bullet(game,bx,by,bw,bh,speed,imgSrc);
}

/*
*飞机:
 * 游戏对象:game
 * 血条:hp
 * 坐标:x,y
 * 飞机大小:w,h
 * 飞机分数:score
 * 速度:speed
 * 图片:imgSrc
 * 爆炸图片:boomImgSrc
*/
function Plane(game,hp,px,py,pw,ph,score,speed,imgSrc,boomImgSrc) {
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
        this.image.style.width = this.pw +"px";
        this.image.style.height = this.ph +"px";

        //把img标签插入到maindiv 标签下面
        game.mainDiv.appendChild(this.image);
    }
    this.init();
}

//子弹
function Bullet(game,bx,by,bw,bh,speed,imgSrc) {
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

        game.mainDiv.appendChild(this.bimage);
    }
    this.init();
}
