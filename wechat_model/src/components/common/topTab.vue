<template>
	<div class="toptab">
		<mt-navbar v-model="selected" fixed v-if="fixed">
		  <mt-tab-item v-for="(item,index) in tab" :key="index" :id="index+1+''">{{item}}<div class="line"></div></mt-tab-item>
		</mt-navbar>
		<mt-navbar v-model="selected" v-if="!fixed">
		  <mt-tab-item v-for="(item,index) in tab" :key="index" :id="index+1+''">{{item}}<div class="line"></div></mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<slot></slot>
		</mt-tab-container>
	</div>
</template>

<script scoped>
import { Navbar, TabItem} from "mint-ui";
	export default {
	  data() {
	      return{
	          selected:"1"
	      }
	  },
	  props:{
		  fixed:{
			  type:Boolean,
			  default:true
		  },
		 tab: {
		  type: Array,
		  default: []
		}
	  },
	  computed: {
		  
	  },
	  watch: {
	  	selected: function (val, oldVal) {
	  		// 这里就可以通过 val 的值变更来确定
	  		// console.log(val)
	  	}
	  	},
	  methods: {
		
	  }
	};
</script>

<style>
	/* mint ui navbar */
	.mint-navbar{
		border-bottom: .01rem solid #ebecee;
		margin-bottom: 0.2rem;
	}
	.mint-navbar .mint-tab-item.is-selected {
	  border-bottom: none;
	  /* color: red; */
	}
	.mint-tab-item{
		/* font-size: .3rem; */
		text-align: center!important;
		font-weight: 600;
		padding: 0!important;
		position: relative;
		color: #333333;
	}
	.mint-tab-item-label{
		height: .87rem!important;
		line-height: .87rem!important;
		font-size: .3rem!important;
	}
	.mint-navbar .mint-tab-item.is-selected{
		border: none!important;
	}
	.mint-navbar .mint-tab-item.is-selected .mint-tab-item-label{
		color: #3f82fa!important;
	}
	.mint-navbar .mint-tab-item.is-selected .mint-tab-item-label .line{
		width: .28rem;
		height: .05rem;
		background:#3f82fa ;
		position: absolute;
		bottom: 0.05rem;
		margin-left: -.14rem;
		left: 50%;
		
	}
</style>
