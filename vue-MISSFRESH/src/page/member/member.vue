<template>
	<div class="member">
		<pull>
			<div class="vip-card">
				<div class="card-bg"></div>
				<div class="card-container">
					<img src="~images/vip.png">
				</div>
			</div>
			<icons :icons="icons"></icons>
			<div class="vip-calculator">
				<div class="calculator-content">
					<div class="calculator-header">
						<span></span>
						会员省钱计算器
					</div>
					<div class="save clearfix">
						<span>优享会员将为你节省</span>
						<span class="save-count">¥1121.30</span>
					</div>
					<div class="basis">根据优鲜用户年平均消费3504元计算</div>
					<ul class="specific">
						<li>
							<div class="clearfix">
								<span class="item-name">购物返现</span>
								<span>¥175.20</span>
							</div>
							<p>单单返现5%无上限</p>
						</li>
						<li>
							<div class="clearfix">
								<span class="item-name">购物返现</span>
								<span>¥175.20</span>
							</div>
							<p>单单返现5%无上限</p>
						</li>
						<li>
							<div class="clearfix">
								<span class="item-name">购物返现</span>
								<span>¥175.20</span>
							</div>
							<p>单单返现5%无上限</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="vip-products">
				<div class="products-header">
					<div class="area-header">会员商品&会员专享价</div>
					<div class="area-introduce">精选全球美食 成为会员抢先购买</div>
				</div>
				<!-- <div class="clearfix list-group-item ticket-item" v-for="item in products">
					<product :product="item"></product>
				</div> -->
			</div>
		</pull>
		<mfooter></mfooter>
	</div>
</template>
<script>
	import mfooter from 'src/components/mfooter/mfooter'
	import icons from 'src/components/icons/icons'
	import pullRefresh from 'src/components/pullRefresh/pullRefresh'
	import product from 'src/components/product/product'
	import pull from 'src/components/pull/pull'
	export default{
		data(){
			return {
				tabIndex: 14,
				icons: [
					{
						src: require('images/icon/privilege_0.png'),
						text: '会员专享价'
					},
					{
						src: require('images/icon/privilege_1.png'),
						text: '购物返现'
					},
					{
						src: require('images/icon/privilege_2.png'),
						text: '1小时送达'
					},
					{
						src: require('images/icon/privilege_3.png'),
						text: '会员商品'
					},
					{
						src: require('images/icon/privilege_4.png'),
						text: '专享客服'
					}
				]
			}
		},
		components:{
	        mfooter,
	        icons,
	        product,
	        pull
	    }
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	// 会员页面
	.member{
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		.wh(100%);
		padding-bottom: 60px;
		box-sizing: border-box;
		.vip-card{
			width: 100%;
			.card-bg{
	    		.wh(8.4375rem);
	    		background: #FFB53E;
			}
			.card-container{
				line-height: 1;
	    		margin-top: -5.6875rem;
	    		padding: 0 0.5rem;
	    		position: relative;
	    		img{
	    			width: 100%;
	    		}
			}
		}
		.vip-calculator{
			margin: 1.5rem 0 0 0;
	    	padding: 0 0.9375rem;
	    	.calculator-content{
	    		background: #FFFBEF;
	    		border-radius: 0.5rem;
	    		padding: 0 0.625rem 0.625rem;
	    		.calculator-header{
	    			height: 3.375rem;
	    			line-height: 3.375rem;
	    			border-bottom: 0.0625rem dashed #ECE7D8;
	    			overflow: hidden;
	    			white-space: nowrap;
	    			text-overflow: ellipsis;
	    			color: #B9AF91;
					span{
						display: inline-block;
	    				content: '';
	    				.bg(1.25rem,1.375rem,transparent,'~images/icon/calculator.png',100% 100%);
	    				margin-top: -2px;
	    				margin-right: 4px;
	    				vertical-align: middle;
					}
				}
				.save{
					margin: 0.8125rem 0 0;
	    			font-size: 1.125rem;
	    			color: #443E42;
	    			position: relative;
	    			white-space: nowrap;
	    			text-overflow: ellipsis;
	    			overflow: hidden;
	    			.save-count{
	    				float: right;
	    				color: #ff4891;
	    			}
				}
				.basis{
					padding: 0 0 0.625rem;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					.font(1.6,0.75rem,#969696);
				}
				.specific{
					padding: 0 0.9375rem;
	    			background: white;
	    			li{
	    				padding: 0.375rem 0;
	    				position: relative;
	    				border-bottom: 0.0625rem dashed #ECE7D8;
	    				padding-top: 0.6875rem;
	    				.font(1.4,0.875rem,rgb(150, 150, 150));
	    				div{
	    					white-space: nowrap;
	    					text-overflow: ellipsis;
	    					overflow: hidden;
	    					span{
	    						float: right;
	    					}
	    					.item-name{
	    						color: #000;
	    						float: left;
	    					}
	    				}
	    			}
				}
	    	}
			
		}
		.vip-products{
			padding-top: 2rem;

			.products-header{
				padding: 0 0.9375rem;
				.area-header{
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					.font(1.4,1.25rem,#474245);
				}
				.area-introduce{
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					.font(1.4,0.75rem,#969696);
				}
			}
			
		}
	}
	.member ::-webkit-scrollbar {
	    .wh(0,0);
	}
</style>