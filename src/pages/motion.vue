<template>
  <div class="contain">
    <div class="title">运动的描述</div>
    <h2 style="margin: auto; margin-top: 30px">一、匀速直线运动</h2>
    <div class="uniform1">
      <div class="uniform-left1">
        <div class="buttons1">
          <button
            id="start1"
            style="width: 80px; height: 40px; margin-left: 40px"
            @click.stop="start_one"
          >
            开始运动
          </button>
          <button
            id="reset1"
            style="width: 80px; height: 40px; margin-left: 40px"
            @click.stop="reset_one"
          >
            还原
          </button>
        </div>
        <div class="uniform-canvas1">
          <p style="text-align: center">
            我们设定道路长度为600米，汽车初速度为0m/s
          </p>
          <img id="car1" class="car1" src="../assets/motion/car.png" />
        </div>
        <div class="uniform-para1">
          <h4>行驶路程：{{ s1 }}m</h4>
          <h4>汽车速度：{{ v1 }}m/s</h4>
          <h4>那么所用时间为：{{ t1 }}s</h4>
        </div>
      </div>
      <div class="uniform-right1">
        <img class="know1" src="../assets/motion/know1.png" />
      </div>
    </div>
    <h2 style="margin: auto; margin-top: 30px">二、匀变速直线运动</h2>
    <div class="uniform2">
      <div class="uniform-left2">
        <div class="buttons2">
          <button
            id="start2"
            style="width: 80px; height: 40px; margin-left: 40px"
            @click.stop="start_two"
          >
            开始运动
          </button>
          <button
            id="reset2"
            style="width: 80px; height: 40px; margin-left: 40px"
            @click.stop="reset_two"
          >
            还原
          </button>
        </div>
        <div class="uniform-canvas2">
          <p style="text-align: center">
            我们设定道路长度为600米，不失一般性，设汽车初速度为0m/s
          </p>
          <img id="car2" class="car2" src="../assets/motion/car.png" />
        </div>
        <div class="uniform-para2">
          <h4>行驶路程：{{ s2 }}m</h4>
          <h4>汽车初速度：{{ v2 }}m/s</h4>
          <h4>汽车的加速度：{{ a2 }}m/s^2</h4>
          <h4>那么所用时间为：{{ t2 }}s</h4>
        </div>
      </div>
      <div class="uniform-right2">
        <img class="know2" src="../assets/motion/know2.png" />
      </div>
    </div>
    <h2 style="margin: auto; margin-top: 40px">三、单元总结</h2>
    <div class="summary">
      <img class="sum" src="../assets/motion/know3.png" />
      <div class="r">
        <h4 style="margin-left: 20px">初速度为0时，匀加速直线运动规律：</h4>
        <img class="sum" src="../assets/motion/know4.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //用于定义定时器的同时状态
      sys: 0,
      s0: 0,
      //第一组数据
      v1: 10,
      t1: 5,
      s1: 50,
      //第二组数据
      v2: 6,
      t2: 4,
      s2: 40,
      a2: 2,
    };
  },
  methods: {
    start_one() {
      var timer1;
      timer1 = setInterval(function () {
        if (car1.offsetLeft < 550) {
          car1.style.left = car1.offsetLeft + -37.8 + "px";
        } else {
          car1.style.left = "550px";
          clearInterval(timer1);
        }
      }, 20);
    },
    reset_one() {
      history.go();
    },
    start_two() {
      var timer2;
      var speed = -38;
      var count = 1;
      var num = 0;
      timer2 = setInterval(function () {
        if (car2.offsetLeft < 558) {
          count++;
          if (count % 100 == 0) speed = speed + 1;
          // console.log(car2.offsetLeft)
          console.log(num++);
          car2.style.left = car2.offsetLeft + speed + "px";
        } else {
          car2.style.left = "558px";
          clearInterval(timer2);
        }
      }, 20);
    },
    reset_two() {
      history.go();
    },
  },
  created() {},
};
</script>
<style scoped>
.contain {
  display: flex;
  flex-direction: column;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-weight: bolder;
  font-size: 30px;
}
/* 第一部分，匀速运动 */
.uniform1 {
  display: flex;
  margin-top: 30px;
  width: 100%;
  height: 400px;
  justify-content: space-between;
}

.uniform-left1 {
  display: flex;
  width: 50%;
  height: 400px;
  flex-direction: column;
}

.buttons1 {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-start;
  margin-bottom: 5px;
}
.uniform-canvas1 {
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 290px;
  margin-left: 10px;
  background-color: aquamarine;
}

.uniform-para1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 60px;
}

.uniform-right1 {
  display: flex;
  width: 50%;
  height: 400px;
  justify-content: center;
  align-items: center;
}
.know1 {
  width: 600px;
  height: 394px;
}
.car1 {
  height: 80px;
  width: 80px;
  position: absolute;
  margin-top: 200px;
  margin-left: 40px;
}
/*第二部分： 匀加速运动 */
.uniform2 {
  display: flex;
  margin-top: 10px;
  width: 100%;
  height: 400px;
  margin-top: 30px;
  justify-content: space-between;
}

.uniform-left2 {
  display: flex;
  width: 50%;
  height: 400px;
  flex-direction: column;
}

.buttons2 {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: flex-start;
  margin-bottom: 5px;
}
.uniform-canvas2 {
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 290px;
  margin-left: 10px;
  background-color: #99ccff;
}

.uniform-para2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
}

.uniform-right2 {
  display: flex;
  width: 50%;
  height: 400px;
  justify-content: center;
  align-items: center;
}
.know2 {
  width: 80%;
}
.car2 {
  height: 80px;
  width: 80px;
  position: absolute;
  margin-top: 200px;
  margin-left: 40px;
}

.summary {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 100px;
}
.r {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.sum {
  width: 100%;
}
</style>

