import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { newGame, newPlane, newBullet} from '../AirPlane/game';
import '../AirPlane/main.css';

class GamePanel extends React.Component {

  state = {
    game: {},
    showStartDialog: true,
  };

  myrandom(min,max) {
      //floor 向下取整数
      return Math.floor(min + (max - min)*Math.random());
  }

  begin = () => {
    const game = {...this.state.game};
    // game.startDiv.style.display = "none";
    game.mainDiv.style.display = "block";

    game.timeSet =  setInterval(this.timerAction, 20);

    this.setState({
      game: game,
      showStartDialog: false,
      showRestartDialog: false,
     });
  };

  restart = () => {
    const game = {...this.state.game};
    location.reload();
    // game.startDiv.style.display = "block";
    game.mainDiv.style.display = "none";
    // game.endDiv.style.display = "none";

    this.setState({ game });
  }

  planeMove = (e) => {
    if(!this.state.game.selfPlane.isDied) {
      const game = {...this.state.game};

      const x = e.clientX;
      const y = e.clientY;
      game.selfPlane.image.style.left = x - game.selfPlane.pw/2 +"px";
      game.selfPlane.image.style.top = y - game.selfPlane.ph/2 +"px";

      this.setState({ game });
    }
  };

  /*
  * 敌方飞机出现特点:
  * 大飞机,中飞机,小飞机:
  * 5个小+1个中
  * 20个小 + 1个大
  * 飞机都是从上往下飞
  * 飞机速度随机值 1-4
  * 飞机x坐标,随机值 0-320
  * */

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
  *
  * */

  timerAction = () => {
      const game = {...this.state.game};

      game.scoreLabel.innerHTML = game.score +"分";
      //创建敌方飞机
      if(game.score > 3000 && game.change === 0){
          var san = newPlane(game,2,this.myrandom(0,320-89),-150,89,113,1000,this.myrandom(1,4),"/image/parachute.png",
              "/image/san.png");
          san.san = true;
          game.enemyArray.push(san);
          game.change = 1
      }
      game.flag1++;//如果定时器触发20次则创建
      if(game.flag1 % 5 === 0) {
            var  x= game.selfPlane.image.offsetLeft;
            var  y =game.selfPlane.image.offsetTop - 3;
          var b = newBullet(game,x+10,y,3,7,5,"/image/net.png");
          var c = newBullet(game,x+40,y,3,7,5,"/image/bamboo.png");
          game.bulletArray.push(b);
          game.bulletArray.push(c);
      }
      if(game.flag1 === 20){
          game.flag2++;
          if (game.flag2 %10 === 0){
              //创建中型飞机
              var p1 = newPlane(game,3,this.myrandom(0,320-50),-100,50,60,200,this.myrandom(1,2),"/image/enemy3_fly_1.png",
                  "/image/中飞机爆炸.gif");
              game.enemyArray.push(p1);
          }
          if (game.flag2 %20 === 0){
              //创建大型飞机
              var p2 = newPlane(game,6,this.myrandom(0,320-110),-200,110,164,300,1,"/image/enemy2_fly_1.png",
                  "/image/大飞机爆炸.gif");
              game.enemyArray.push(p2);
              game.flag2 = 0;
          }else{
              //创建小型飞机
              var p = newPlane(game,1,this.myrandom(0,320-34),-100,34,24,100,this.myrandom(5,8),"/image/enemy1_fly_1.png",
                  "/image/小飞机爆炸.gif");
              game.enemyArray.push(p);
          }
          game.flag1 = 0;
      }
      //敌方飞机行为
      for(var i = 0;i < game.enemyArray.length; i++) {
          //如果飞机没有死,则移动
          if (game.enemyArray[i].isDied === false) {
              game.enemyArray[i].move();
              if ((game.enemyArray[i].image.offsetLeft + game.enemyArray[i].pw >= game.selfPlane.image.offsetLeft
                  ) && (game.selfPlane.image.offsetLeft + game.selfPlane.pw > game.enemyArray[i].image.offsetLeft)
                  && (game.selfPlane.image.offsetTop <= game.enemyArray[i].image.offsetTop + game.enemyArray[i].ph)) {
                  game.selfPlane.isDied=true;
                  game.selfPlane.image.src=game.selfPlane.boomImgSrc;
                  // game.endDiv.style.display="block";
                  // game.endScore.innerHTML=game.score;
                  this.setState({ showRestartDialog: true });

                  clearInterval(game.timeSet);
              }

          }
          //如果飞机已经抛出屏幕,则从数组中移除飞机,从maindiv 移除img元素
          if ((game.enemyArray[i].image.offsetTop > 568)){
              //把img标签移除
              game.mainDiv.removeChild(game.enemyArray[i].image);
              //数组中移除i元素
              game.enemyArray.splice(i,1);
          }
          if(game.enemyArray[i].isDied){
              game.enemyArray[i].content++;
              if(game.enemyArray[i].content === 10){
                  game.score += game.enemyArray[i].score;
                  game.mainDiv.removeChild(game.enemyArray[i].image);
                  game.enemyArray.splice(i,1);
              }
          }

      }
      // 子弹行为
      for(i = 0;i < game.bulletArray.length; i++) {
          game.bulletArray[i].move();
          for(var j= 0; j< game.enemyArray.length; j++){
              if((game.enemyArray[j].image.offsetLeft +game.enemyArray[j].pw>game.bulletArray[i].bimage.offsetLeft) &&
                  (game.bulletArray[i].bimage.offsetLeft>game.enemyArray[j].image.offsetLeft ) &&
                  (game.enemyArray[j].image.offsetTop+game.enemyArray[j].ph > game.bulletArray[i].bimage.offsetTop)&&(!game.enemyArray[j].isDied)){
                  game.bulletArray[i].isDied = true;
                  if(game.enemyArray[j].san){
                      game.selfPlane.image.src = "/image/aobam.png";
                  }
                  game.enemyArray[j].hp--;
                  if(game.enemyArray[j].hp === 0) {
                      game.enemyArray[j].isDied=true;
                      game.enemyArray[j].image.src = game.enemyArray[j].boomImgSrc;
                  }
              }
          }
          if (game.bulletArray[i].bimage.offsetTop < 0 || game.bulletArray[i].isDied) {
              //把img标签移除
              game.mainDiv.removeChild(game.bulletArray[i].bimage);
              //数组中移除i元素
              game.bulletArray.splice(i, 1);
          }
      }
      this.setState({ game: game });
  }

  componentWillMount() {
    this.setState({ game: newGame() });
  }

  componentDidMount() {
    if (!this.state.game.inited) {
      this.state.game.init();
    }
  }

  render() {
    return (
              <div id="contentdiv">
                <Dialog
                  open={this.state.showStartDialog}
                  onClose={this.begin}
                >
                  <DialogActions>

                    <Button onClick={this.begin} color="primary">
                      Start
                    </Button>
                  </DialogActions>
                </Dialog>

                  {/* <div id="startdiv" >
                      <button onClick={this.begin}>开始游戏</button>
                  </div> */}

                  <div id="maindiv" onMouseMove={this.planeMove}>
                      <div id="scorediv">
                          <label>分数</label>
                          <label id="scorelabel">0</label>
                      </div>
                  </div>

                  <Dialog
                    open={this.state.showRestartDialog}
                    onClose={this.restart}
                  >
                    <DialogContent>
                      <DialogContentText>
                        Your score: {this.state.game.score}
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.restart} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={this.restart} color="primary">
                        Restart
                      </Button>
                    </DialogActions>
                  </Dialog>

                  {/* <div id="enddiv">
                      <p className="planetext">飞机大战分数</p>
                      <p id="endscore">0</p>
                      <div><button onClick={this.restart}>继续</button></div>
                  </div> */}
              </div>
    );
  }
}

GamePanel.propTypes = {
  planeId: React.PropTypes.string.isRequired,


};

export default GamePanel;
