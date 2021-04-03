<template>
  <div class="force">
    <div class="gsxt" @click="gsxt()">
      Physical experiment demonstration platform
    </div>
    <div class="title">力的相互作用</div>
    <h2 style="margin: auto; margin-top: 20px; margin-bottom: 20px">
      一、重力
    </h2>
    <div class="gforce">
      <div class="lgforce">
        <div class="line" style="background-color: #ffff66">
          <div><h4 style="margin: auto">平衡状态(F = ma)</h4></div>
          <div
            style="display: flex; justify-content: space-around; width: 100%"
          >
            <input class="btn2" type="button" value="开始" @click="start01()" />
            <input class="btn2" type="button" value="还原" @click="reset()" />
          </div>
          <img id="lift01" class="lift" src="../assets/force/lift.png" />
        </div>
        <div class="line" style="background-color: #99ccff">
          <div><h4 style="margin: auto">超重状态(F=mg+ma > mg)</h4></div>
          <div
            style="display: flex; justify-content: space-around; width: 100%"
          >
            <input class="btn2" type="button" value="开始" @click="start02()" />
            <input class="btn2" type="button" value="还原" @click="reset()" />
          </div>
          <img id="lift02" class="lift" src="../assets/force/lift.png" />
        </div>
        <div class="line" style="background-color: #99ff66">
          <div><h4 style="margin: auto">失重状态(F=mg-ma &lt; mg)</h4></div>
          <div
            style="display: flex; justify-content: space-around; width: 100%"
          >
            <input class="btn2" type="button" value="开始" @click="start03()" />
            <input class="btn2" type="button" value="还原" @click="reset()" />
          </div>
          <img id="lift03" class="lift" src="../assets/force/lift.png" />
        </div>
      </div>
      <div class="rforce">
        <img
          class="know"
          style="height: 600px"
          src="../assets/force/know1.png"
        />
      </div>
    </div>
    <h2 style="margin: auto; margin-top: 30px">二、弹力</h2>
    <div class="tforce">
      <div class="ltforce">
        <img
          src="../assets/force/tforce.png"
          style="width: 580px; height: 580px"
        />
        <div id="line"></div>
        <div class="in">
          <h3>胡克定律：F=kx</h3>
          <h4 style="text-indent: 2em">
            我们可以看到左侧的弹簧测力计，每1N的力，弹簧测力计的指针就会向下平移一个刻度。
          </h4>
          <input
            type="number"
            id="num"
            style="width: 80px; height: 30px"
            max="5"
            min="0"
          />
          <input
            type="button"
            style="width: 50px; height: 30px; margin-top: 20px"
            value="确定"
            @click="updown()"
          />
        </div>
      </div>
      <div class="rforce">
        <img style="width: 100%" src="../assets/force/know2.png" />
      </div>
    </div>
    <h2 style="margin: auto; margin-top: 20px; margin-bottom: 20px">
      三、单元总结
    </h2>
    <div class="sforce">
      <div class="lsforce">
        <h5 style="margin-top: 10px; margin-left: 15px">
          弹力球在重力和弹力的作用下的运动模拟
        </h5>
        <input
          type="button"
          class="btn"
          value="开始运动"
          @click="startMove()"
        />
        <input class="btn" type="button" value="还原" @click="reset()" />
        <div id="div"></div>
      </div>
      <div class="rsforce">
        <img style="width: 95%" src="../assets/force/know3.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // data() {
  //   return {};
  // },
  methods: {
    gsxt() {
      this.$router.push({path:'/' });
    },
    start01() {
      var timer01;
      var speed = -19;
      timer01 = setInterval(function () {
        if (lift01.offsetTop < 653) {
          lift01.style.top = lift01.offsetTop + speed + "px";
        } else {
          clearInterval(timer01);
        }
      }, 50);
    },
    start02() {
      var timer02;
      var speed = -18;
      var count = 0;
      timer02 = setInterval(function () {
        if (lift02.offsetTop < 653) {
          count++;
          if (count % 10 == 0) {
            speed += 10;
          }
          lift02.style.top = lift02.offsetTop + speed + "px";
        } else {
          clearInterval(timer02);
        }
      }, 30);
    },
    start03() {
      var timer03;
      var speed = -15;
      var count = 0;
      timer03 = setInterval(function () {
        if (lift03.offsetTop < 660) {
          count++;
          if (count % 5 == 0) {
            speed -= 6;
          }
          lift03.style.top = lift03.offsetTop + speed + "px";
        } else {
          clearInterval(timer03);
        }
      }, 30);
    },
    updown() {
      var x = document.getElementById("num").value;
      var y = line.offsetTop;
      if (x >= 0 && x <= 5) {
        console.log(y);
        line.style.top = line.offsetTop + (42 * x - 208) + "px";
      } else {
        this.$message({
          message: "请输入0~5之间的数字！",
          type: "error",
        });
      }
      setTimeout(function () {
        history.go();
      }, 2000);
    },
    startMove() {
      var timer = null;
      var speedX = 5,
        speedY = 3;
      //内部清空计时器，防止上次返回值叠加
      clearInterval(timer);
      //设置计时器
      timer = setInterval(function () {
        var div = document.getElementById("div");
        console.log(div.offsetHeight);
        //竖直方向上反向运动时速度为负值，为了达到反弹逐渐速度逐渐减小的效果，可以在向下碰撞后速度加上一个正值
        speedY += 6;
        //分别获取div距离左边距和上边距的动态距离
        var iW = div.offsetLeft + speedX;
        var iH = div.offsetTop + speedY;
        //获取div水平方向运动的最大距离，即不包含边框的浏览器窗口的宽度clientWidth减去div的宽度
        var w = document.documentElement.clientWidth - div.offsetWidth;
        //获取div垂直方向运动的最大距离
        var h = 2030 - div.offsetHeight;
        //当动态宽度达到div最大运动宽度范围时，立刻转换速度为反方向负值，同时把w的值负值给iw，因为w是可视窗口范围，当w缩小时，iw保存的还是上一次窗口条件下的距离左边距的距离
        if (iW >= w || iW <= 0) {
          speedX = -speedX;
          iW = w;
        }
        //当动态高度达到div最大运动高度范围时，立刻转向速度，同时将x方向速度乘以0.8，使之速度逐渐减小
        if (iH >= h || iH <= 0) {
          speedY = -speedY;
          iH = h;
          speedX *= 0.95;
        }
        //由于div.style.left和div.style.top还储存这上一次或第一次的计时后的值，此次计时后应把新的值储存起来，使div出现动态效果
        div.style.left = iW + "px";
        div.style.top = iH + "px";
      }, 30);
    },
    reset() {
      history.go();
    },
  },
};
</script>
<style>
#div {
  width: 100px;
  height: 100px;
  background: #f03c9b;
  position: absolute;
  border-radius: 50%;
}
#line {
  position: absolute;
  width: 40px;
  height: 8px;
  background-color: red;
  border-radius: 2px;
  z-index: 99;
  margin-left: 428px;
  margin-top: 208px;
}
.btn {
  width: 80px;
  height: 40px;
  margin-left: 10px;
  border-radius: 14px;
  border: 1px;
  margin-bottom: 10px;
}
.lift {
  width: 40px;
  margin-top: 50px;
  position: absolute;
}
.force {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.gsxt {
  margin: auto;
  margin-top: 10px;
  font-family: "Times New Roman", Times, serif;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  font-weight: bolder;
  font-size: 30px;
  margin-top: 15px;
}
.gforce {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
}
.lgforce {
  width: 60%;
  height: 600px;
  display: flex;
  justify-content: space-around;
}

.line {
  display: flex;
  width: 33.3333%;
  height: 600px;
  flex-direction: column;
  align-items: center;
}
.tforce {
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: space-between;
  margin-top: 30px;
}
.ltforce {
  display: flex;
  width: 50%;
  height: 600px;
}
.in {
  display: flex;
  margin-left: 10px;
  width: 160px;
  height: 600px;
  flex-direction: column;
}
.rtforce {
  width: 50%;
  height: 600px;
}
.btn2 {
  width: 30%;
  height: 30px;
  border-radius: 10px;
}
.sforce {
  margin-top: 20px;
  display: flex;
  width: 100%;
  height: 550px;
  justify-content: space-between;
  margin-bottom: 100px;
}
.lsforce {
  width: 50%;
  height: 550px;
  background-color: #edf7ff;
}

.rsforce {
  display: flex;
  width: 50%;
  height: 550px;
  justify-content: center;
}
.know2 {
  width: 100%;
}
</style>