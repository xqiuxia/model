<template>
    <div class="error">
        <div class="errorimg"><img :src="errorimg" ></div>
        <div class="errormsg">sorry，服务器出错啦！</div>
        <div class="errorbtn" @click="goback">立即返回&nbsp;》</div>
    </div>
</template>
<script>
import errorimg from '../assets/image/500.png'
export default {
    // name:"Demo"
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
*{
    margin: 0;
    padding: 0;
}
body{
background: #f7f7f7
}
.error{
    text-align: center;
}
.errorimg img{
    width: 100%;
    display: block;
}
.errormsg{
    color: #555;
    font-size: .28rem;
}
.errorbtn{
    font-size: .32rem;
    color: #ffffff;
    width: 3rem;
    height: .8rem;
    background: #439ffc;
    line-height: .8rem;
    border-radius: .4rem;
    margin: .4rem auto 0 auto;
}
</style>

