<template>
	<div>
        <ul class="foot-nav">
        	<li class="nav-item" @click="goAddress({path: '/ug'})">
        		<span class="nav-icon nav-home" :style="{backgroundImage:$route.path.indexOf('ug')==-1?`url(${backgroundImage.home})`:`url(${backgroundImage.homeActive})`}"></span>
        		<p class="nav-label">首页</p>
        	</li>
        	<li class="nav-item" @click="goAddress({path: '/member'})">
        		<span class="nav-icon nav-newvp" :style="{backgroundImage:$route.path.indexOf('member')==-1?`url(${backgroundImage.newvp})`:`url(${backgroundImage.newvpActive})`}"></span>
        		<p class="nav-label">会员</p>
        	</li>
        	<li class="nav-item" @click="goAddress({path: '/cart'})">
        		<span class="nav-icon nav-cart" :style="{backgroundImage:$route.path.indexOf('cart')==-1?`url(${backgroundImage.cart})`:`url(${backgroundImage.cartActive})`}"></span>
        		<span class="cart-count">{{cartCount}}</span>
        		<p class="nav-label">购物车</p>
        	</li>
        	<li class="nav-item" @click="goAddress({path: '/profile'})">
        		<span class="nav-icon nav-mine" :style="{backgroundImage:$route.path.indexOf('profile')==-1?`url(${backgroundImage.mine})`:`url(${backgroundImage.mineActive})`}"></span>
        		<p class="nav-label">我的</p>
        	</li>
        </ul>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	import {getStore} from 'src/config/mUtils.js'
	export default{
		data(){
			return {
				backgroundImage:{
					home: require('images/icon/home.png'),
					newvp: require('images/icon/newvp.png'),
					cart: require('images/icon/cart.png'),
					mine: require('images/icon/mine.png'),
					homeActive: require('images/icon/home-active.png'),
					newvpActive: require('images/icon/newvp-active.png'),
					cartActive: require('images/icon/cart-active.png'),
					mineActive: require('images/icon/mine-active.png')
				}
			}
		},
		computed: {
			...mapState([
                's_cartCount'
            ]),
            //shopCart变化的时候重新计算当前商品的数量
            cartCount: function (){
                let s_cartCount=this.s_cartCount, cartCount=getStore('cartCount');
                if (s_cartCount) {
                    return s_cartCount;
                } else if (cartCount) {
                    return cartCount;
                } else {
                    return 0;
                }
            },
		},
		methods: {
        	goAddress(path){
        		this.$router.push(path)
        	}
        },
	}
</script>
<style lang='less'>
	@import '~src/style/mixin';
	.foot-nav{
		position: fixed;
	    background-color: #fff;
	    line-height: 1;
	    display: flex;
	    z-index: 4;
	    bottom: 0;
	    width: 100%;
	    box-shadow: 0 0 10px rgba(0,0,0,.1);
	    .nav-item{
	    	display: block;
	    	flex: 1;
	    	padding: 5px 0 0;
	    	color: #999;
	    	text-align: center;
	    	-webkit-tap-highlight-color: rgba(0,0,0,0);
	    	position: relative;
	    	.nav-icon{
				display: block;
			    .wh(27px,27px);
			    margin: 0 auto;
			    background-size: 100% 100%; 
			    background-repeat: no-repeat;
	    	}
	    	.nav-label{
	    		text-align: center;
			    color: #999;
			    font-size: 10px;
			    line-height: 1.8;
	    	}
	    }
	}
	.cart-count{
		position: absolute;
	    top: 2px;
	    right: 20%;
	    background-color: #ff4891;
	    height: 1em;
	    min-width: 1em;
	    border-radius: 0.6em;
	    .font(1,0.6em,#fff);
	    border: 1px solid #fff;
	    padding: 0.1em 0.2em;
	    box-sizing: content-box;
	    text-align: center;
	}
</style>