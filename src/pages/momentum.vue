<template>
  <div class="momentum">
        <div class="gsxt" @click="gsxt()">Physical experiment demonstration platform</div>
    <div class="title">动量定理与动量守恒</div>
    <h3 style="margin: auto; margin-top: 20px">
      一、完全弹性碰撞中的动量守恒定理
    </h3>
    <div class="momentum1">
      <div class="momentum1-left">
        <iframe
          src="static/tp.html"
          style="margin: auto"
          frameboarder="0"
          height="515px"
          width="650px"
        ></iframe>
      </div>
      <div class="momentum1-right">
        <img
          style="width: 696px; height: 530px"
          src="../assets/momentum/know1.png"
        />
      </div>
    </div>
    <h3 style="margin: auto; margin-top: 20px">
      二、完全非弹性碰撞中的动量守恒定理
    </h3>
    <div class="momentum2">
      <div class="momentum2-left">
        <iframe
          src="static/tp2.html"
          style="margin: auto; margin-left: 20px"
          frameboarder="0"
          height="515px"
          width="650px"
        ></iframe>
      </div>
      <div class="momentum2-right">
        <img
          style="width: 820px; height: 441px"
          src="../assets/momentum/know2.png"
        />
      </div>
    </div>
    <h3 style="margin: auto; margin-top: 20px">三、单元总结</h3>
    <div class="momentum3">
      <div class="momentum3-left">
        <iframe
          src="static/tt.html"
          style="margin: auto; margin-left: 20px"
          frameboarder="0"
          height="515px"
          width="650px"
        ></iframe>
      </div>
      <div class="momentum3-right">
        <img
          style="width: 696px; height: 530px"
          src="../assets/momentum/know3.png"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    gsxt(){
      this.$router.push({path:"/"})
    }
  },

};
</script>
<style>
.momentum {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
.gsxt{
  margin: auto;
  margin-top: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
.momentum1 {
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: space-between;
  margin-top: 20px;
}
.momentum1-left {
  display: flex;
  width: 50%;
  height: 600px;
  justify-content: center;
}
.momentum1-right {
  display: flex;
  width: 50%;
  height: 600px;
  justify-content: center;
  align-items: center;
}
.momentum2 {
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: space-between;
  margin-top: 20px;
}
.momentum2-left {
  display: flex;
  width: 45%;
  height: 600px;
  justify-content: center;
  margin-left: 20px;
}
.momentum2-right {
  display: flex;
  width: 55%;
  height: 600px;
  justify-content: center;
  align-items: center;
}
.momentum3 {
  display: flex;
  width: 100%;
  height: 600px;
  justify-content: space-between;
  margin-top: 20px;
}
.momentum3-left {
  display: flex;
  width: 50%;
  height: 600px;
  justify-content: center;
  margin-left: 20px;
}
.momentum3-right {
  display: flex;
  width: 50%;
  height: 600px;
  justify-content: center;
  align-items: center;
}
</style>