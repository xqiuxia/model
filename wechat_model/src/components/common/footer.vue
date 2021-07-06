<template>
  <div class="footer">
    <ul class="footer_con">
      <li>
        <router-link tag="div" to="/" exact>
          <i
            :class="[
              'iconfont',
              isChoice == isChoice ? 'iconshouye' : 'iconshouye',
            ]"
          ></i>
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link tag="div" to="/demo">
          <i
            :class="[
              'iconfont',
              isChoice == isChoice ? 'iconnews' : 'icon-kecheng1',
            ]"
          ></i>
          <span>课程</span>
        </router-link>
      </li>
      <li>
        <router-link tag="div" to="/lianxi">
          <i
            :class="[
              'iconfont',
              isChoice == isChoice ? 'iconpeixun' : 'icon-wode',
            ]"
          ></i>
          <span>我的</span>
        </router-link>
      </li>
      <div class="clear"></div>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      isChoice: true,
    };
  },
  props: {
    bgd: {
      default: "#fb7d3c",
    },
  },
  computed: {},

  watch: {
    $route(to, from) {
      document.body.scrollTop = 0;

      document.documentElement.scrollTop = 0;
    },
  },
  methods: {
    goto(path) {
      this.$router.replace(path);
    },
    wait() {
      MessageBox.alert("此功能暂未开放，敬请期待！", "友情提示");
      return false;
    },
  },
};
</script>

<style>
.footer_height {
  height: 1.1rem;
}

.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  padding: 0.08rem 0;
  border-top: 1px solid #eee;
  z-index: 99999;
}

.footer_con {
  display: flex;
}

.footer_con li {
  flex: 1;
  text-align: center;
}

.footer_con li div {
  display: block;
  color: #999999;
}

.footer_con li div i {
  font-size: 0.42rem;
  display: block;
}

.footer_con li div span {
  font-size: 0.22rem;
  display: block;
  padding-top: 0.03rem;
}

.router-link-active {
  color: #3f82fa !important;
}
</style>
