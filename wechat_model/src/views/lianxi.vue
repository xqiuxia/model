<!--
 * @Author: your name
 * @Date: 2021-03-30 08:06:06
 * @LastEditTime: 2021-07-06 09:44:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \wecomd:\mine\common\src\views\lianxi.vue
-->
<template>
  <div>
    <!-- <div class="bigbox">
      <div class="box" v-for="i in 6" :key="i"></div>
    </div>
    <div>122</div>-->
    <!-- <div class="big"><div class="juz"></div></div> -->
    <!-- <div class="big"> -->
    <!-- <div class="big2">
        <p>我试试</p>
        <p>怎么爱别人</p>
        <p>算了吧，不想。其实。</p>
      </div>
    </div> -->
    <!-- <div class='triangleDiv'></div> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      aa: "",
    };
  },
  mounted() {
    console.time("A");
    this.bb.call(this, ...[1, 2, 3]);
    console.timeEnd("A");
  },
  methods: {
    bb(x, y, z) {
      this.aa = x + y + z;
    },
  },
};
</script>

<style scoped>
.triangleDiv {
  border-color: #57af1a #fff #fff #fff;
  border-style: solid;
  border-width: 100px 60px 0 60px;
  height: 0;
  width: 0;
}
.big2 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.big2 p {
  text-align: center;
  font-size: 0.2rem;
  color: #333;
  line-height: 0.3rem;
}
.big2 p:nth-child(1) {
  order: 3;
}
.big2 p:nth-child(2) {
  order: 2;
}
.big2 p:nth-child(3) {
  order: 1;
}
.big {
  width: 2rem;
  height: 2rem;
  background: cornflowerblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
.juz {
  /* position: absolute; */
  width: 2rem;
  height: 1rem;
  background: chocolate;
  /* top: 50%;
  left: 50%; */
}
.bigbox {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.1rem;
}
.box {
  width: 1.8rem;
  height: 1.5rem;
  background: pink;
  margin: 0.1rem 0;
}
.bigbox::after {
  content: "";
  width: 1.8rem;
}
</style>