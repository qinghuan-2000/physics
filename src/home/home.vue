<template>
  <div class="contain">
    <div class="title1">
      <img class="timg" src="../assets/home/title.png" />
    </div>
    <div class="button">
      <div class="choosen">
        <img class="cimg" src="../assets/home/motion.png" @click="jump_motion()" />
        <div class="ctext">机械运动</div>
      </div>
      <div class="choosen" >
        <img class="cimg" src="../assets/home/force.png" @click="jump_force()" />
        <div class="ctext">力的相互作用</div>
      </div>
      <div class="choosen" >
        <img class="cimg" src="../assets/home/momentum.png" @click="jump_momentum()" />
        <div class="ctext">动量</div>
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
    jump_motion() {
      this.$router.push({ path: "/motion" });
      this.$message({
        message: "欢迎来到机械运动版块！",
        type: "success",
      });
    },
    jump_force() {
      this.$router.push({ path: "/force" });
      this.$message({
        message: "欢迎来到力的相互作用版块！",
        type: "success",
      });
    },
    jump_momentum() {
      this.$router.push({ path: "/momentum" });
      this.$message({
        message: "欢迎来到动量版块！",
        type: "success",
      });
    },
  },
};
</script>
<style scoped>
.contain {
  display: flex;
  flex-direction: column;
  margin: 0%;
}
.title1 {
  display: flex;
  justify-content: center;
}
.timg {
  margin-top: 50px;
  width: 600px;
}
.button {
  display: flex;
  padding-top: 100px;
  justify-content: space-around;
  align-items: center;
}

.choosen {
  display: flex;
  width: 400px;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}

.cimg {
  width: 210px;
}

.ctext {
  margin-top: 30px;
  font-size: larger;
  font-weight: bolder;
}
</style>