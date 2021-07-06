<template>
  <div class="wrapper">
      <div></div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
body{
    background: #ffffff;
}
.wrapper{
    /* background: palegoldenrod; */
    height: 300px;
}
@media screen and (max-width: 1920px){
    .wrapper{
        background: rgb(241, 137, 0);
        height: 300px;
    }
}
/* @media screen and (max-width: 1440px){
    .wrapper{
        background: rgb(0, 241, 52);
        height: 300px;
    }
} */
@media screen and (max-width: 1440px){
    .wrapper{
        background: rgb(0, 241, 52);
        height: 300px;
    }
}
@media screen and (max-width: 1024px){
    .wrapper{
        background: rgb(44, 0, 241);
        height: 300px;
    }
}
/* @media screen and(max-width: 800px){
    .wrapper{
        background: rgb(241, 0, 209);
        height: 300px;
    }
} */
</style>