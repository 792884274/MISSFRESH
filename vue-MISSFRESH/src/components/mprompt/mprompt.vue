<template>
    <div class="mprompt">
    	<div class="mprompt-content">
    		<div class="popup">
	        	<div class="popup-head">
	        		<h3 class="popup-title">{{promptTitle}}</h3>
	        		<h4 class="popup-text" v-show="promptText">{{promptText}}</h4>
	        	</div>
	        	<div class="clearfix popup-buttons">
	        		<div class="f_l button button-cancel" v-show="cancelShow" @click="cancelAction">取消</div>
	        		<div class="f_r button button-confirm" @click="confirmAction" :class="{'cancel-not':!cancelShow}">{{cancelShow?'确定':'我知道了'}}</div>
	        	</div>
	        </div>
    	</div>
        
	</div>
</template>
<script>
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import {mapState,mapMutations} from 'vuex'
	export default{
		data(){
			return {

			}
		},
		methods: {
			cancelAction(){
				this.$emit("cancelActionFunction");
			},
			confirmAction(){
				this.$emit("confirmActionFunction");
			}
		},
		props: ['promptTitle', 'promptText', 'cancelShow']
	}
</script>
<style lang="less">
	@import '~src/style/mixin';
	.mprompt{
		.fullscreen(5);
		background: rgba(0,0,0,0.7);
		.mprompt-content{
			border-radius: 15px;
		    .wh(auto,70%);
		    .positionCenter();
		    background: transparent;
		    overflow: hidden;
		    line-height: 2.4em;
		    font-size: 1.1em;
		}
		.popup{
			.wh(100%,100%);
		    background-color: rgba(255,255,255,.9);
		    animation-name: superScaleIn;
			animation-duration: .2s;
			color: #4b4b4b;
			.popup-head{
				text-align: center;
				.popup-title{
					line-height: 3em;
				}
				.popup-text{
					.font(1.2em,0.7em,#b8b8b8);
					padding: 0 2% 1em 2%;
				}
			}	
			.popup-buttons{
				border-top: 1px solid #d1d1d1;
				font-size: 0.9em;
				.button{
					.wh(3em,50%);
					text-align: center;	
				}
				.button-cancel{
					position: relative;
					&:after{
						content: '';
						position: absolute;
						right: 0;
						top: 15%;
						height: 70%;
						width: 1px;
						background: #d1d1d1;
					}
				}
				.cancel-not{
					width: 100%;
					color: @color_main;
				}
			}
		}
	}
	@keyframes superScaleIn{
		from{
			transform:scale(1.2);
			opacity:0
		}
		to{
			transform:scale(1);
			opacity:1
		}
	}
</style>
