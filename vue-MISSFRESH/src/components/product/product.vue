<template>
    <div class="product">
    	<div class="clearfix product-link" @click.prevent="productDetail(product.id,product.product_index)">
			<div class="f_l product-item-img">
				<img src="" v-lazy="product.image" alt="" class="product-img">
				<img :src="product.promote_tag" v-if="product.promote_tag" alt="" class="product-tag">
			</div>
			<div class="f_r product-info">
				<p class="name">{{product.name}}</p>
				<p class="point" v-if="subtitle">{{product.subtitle}}</p>
				<ul class="preferential">
					<li v-for="(item,index) in product.product_tags" :key="index">{{item.name}}</li>
				</ul>
				<div class="price">
					<price :price="priceDown.price" class="price-now price-down"></price>
					<!-- 商城价 -->
					<price :price="priceUp.price" class="price-original price-up"></price>
					
					<div class="cart-operate">
						<img :src="product.cart_image" class="shopping-cart-img" style="opacity: 0.3;" v-if="!productNum" @click.stop="addToCart(product.id,product.image,product.name,product.product_tags,priceUp.price,priceDown.price,$event)">
						<div class="clearfix cart-action" v-if="productNum">
							<span class="minus-action" @click.stop="minusOutCart(product.id,$event)"></span> 
							<span class="count">{{productNum}}</span> 
							<span class="add-action" @click.stop="addToCart(product.id,product.image,product.name,product.product_tags,priceUp.price,priceDown.price,$event)"></span>
						</div>
					</div>
				</div>
				<!-- <p class="vip">
					会员价
					<price :price="priceDown.price"></price>
				</p> -->
				
			</div>
		</div>
		
	</div> 
</template>
<script>
	import {mapState, mapMutations} from 'vuex'
	import {getStore} from 'src/config/mUtils.js'
	import price from 'src/components/price/price'
	export default{
		data(){
			return {
				cartStatus: true
			}
		},
		mounted: function () {
			this.INIT_CARTLIST();
		},
		computed: {
			...mapState([
                's_cartList', 's_mpromptStatus'
            ]),
            //shopCart变化的时候重新计算当前商品的数量
            productNum: function (){
				let s_cartList=this.s_cartList;
               	return s_cartList&&s_cartList[this.product.id] ? s_cartList[this.product.id]['num'] : 0;
            },
		},
		methods: {
			...mapMutations([
                'ADD_CART', 'REDUCE_CART', 'INIT_CARTLIST'
            ]),
            // 减少单个商品数量
            minusOutCart(id,event) {
				this.REDUCE_CART({id});
				this.$emit("callbackFunction", id);
			},
			// 增加单个商品数量
			addToCart(id,image,name,product_tags,price_up,price_down,event) {
				this.ADD_CART({id,image,name,product_tags,price_up,price_down});
			},
			// 跳转到商品详情页
			productDetail(product_id,product_index) {
				if (!this.noClick) {
					this.$router.push({path: '/ug/productDetail',query:{product_id: product_id,product_index: product_index}});		
				}
			}
		},
		props: ['product', 'subtitle', 'priceUp', 'priceDown', 'mpromptExist', 'noClick'],
		components: {
			price
		}
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.product{
		width: 100%;
	    background-color: #fff;
		display: flex;
		position: relative;
		border: none;
		border-color: #f5f5f5;
		padding-top: 18px;
		padding-bottom: 18px;
		border-bottom: 1px solid #f5f5f5;
		position: relative;
		.product-link{
			position: relative;
			.wh(auto);
			.product-item-img{
				.wh(auto,40%);
				position: relative;
				.product-img{
					display: block;
					border-radius: 0;
					// .wh(120px,120px);
					.wh(7.5rem,7.5rem);
				}
				.product-tag{
					position: absolute;
					top: 0;
					left: 0px;
					.wh(32px,24px);
				}
			}
			.product-info{
				width: 60%;
				text-align: left;
				margin: 0;
				color: #262626;
				line-height: 1.575rem;
				position: relative;
				box-sizing: border-box;
				.name{
					font-size: 1rem;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					letter-spacing: -1px;
					color: #474245;
				}
				.point{
					font-size: 0.875rem;
					color: #969696;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
				}
				.preferential{
					li{
						display: inline-block;
						border-radius: 2px;
						font-size: 0.75rem;
						line-height: 1;
						border: 1px solid #d165e1;
						padding: 1px;
						background: #fff;
						margin-right: 0.3125rem;
						border-color: @color_main;
						color: @color_main;
						opacity: 0.5;
					}
				}
				.price{
					line-height: 1;
					color: @color_main;
					padding-top: 18px;
					.price-component{
						font-size: 0.75rem; 
					}
					.price-original{
						text-decoration: line-through;
						color: @color_gray;
					}
				}
			}
		}
		.cart-operate{
			position: absolute;
			// bottom: 32px;
			bottom: -1rem;
			right: 0;
			padding: 1rem 1rem;
			font-size: initial;
			.shopping-cart-img{
				position: absolute;
				right: 2.5rem;
				bottom: 0;
				.wh(2.25rem,2.25rem);
			}
			.cart-action{
				.wh(1.2em,4.8em);
			    /* position: absolute;
			    right: 6px;
			    				bottom: 8px; */
				background: transparent;
				span{
					float: left;
				}
				.minus-action{
				    .bg(1.2em,1.2em,transparent,'~images/icon/minus-action.png',100% 100%);
				}
				.count{
					line-height: 1.2em;
				    text-align: center;
				    min-width: 2.4em; 
				    color: #474245;
				}
				.add-action{
					.bg(1.2em,1.2em,transparent,'~images/icon/add-action.png',100% 100%);
				}
			}
		}
	}
	.price-down{
		color: @color_main;
	}
	.price-up{
		text-decoration: line-through;
		color: @color_gray;
	}
</style>
