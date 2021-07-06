<template>
    <div class="pc_error">
        <div class="pc_errorimg"><img :src="errorimg" ></div>
        <div class="pc_errormsg">sorry，您要访问的页面丢失了！</div>
        <div class="pc_errorbtn" @click="goback">立即返回&nbsp;》</div>
    </div>
</template>
<script>
import errorimg from '../assets/image/500pc.png'
export default {
    data(){
        return{
            errorimg:errorimg
        }
    },
    mounted() {
       
    },
    methods:{
         goback(){
             this.$router.go(-1);
        }
    }
}
</script>
<style>
html,body{
    width: 100%;
    margin: 0;
    background: #ffffff;
}
.pc_error{
    text-align: center;
    font-size: 18px;
}
.pc_errorimg img{
    max-width:100%;
    height:auto;
}
.pc_errormsg{
    color: #555;
}
.pc_errorbtn{
    color: #ffffff;
    font-size: 18px;
    width: 150px;
    height: 40px;
    background: #439ffc;
    line-height: 40px;
    border-radius: 20px;
    margin: 20px auto 0 auto;
    cursor: pointer;
}
 /* @media screen and (max-width: 1366px){
    .pc_errorimg img{
        max-width:60%;
        height:auto;
    }
} */
</style>

