import App from '../App'

const ug = r => require.ensure([], () => r(require('../page/ug/ug')), 'ug')
const productDetail = r => require.ensure([], () => r(require('../page/ug/children/productDetail')), 'productDetail')
const safeDetection = r => require.ensure([], () => r(require('../page/ug/children/safeDetection')), 'safeDetection')
const addressChose = r => require.ensure([], () => r(require('../page/ug/children/addressChose')), 'addressChose')
const locationSearch = r => require.ensure([], () => r(require('../page/ug/children/locationSearch')), 'locationSearch')
const cityList = r => require.ensure([], () => r(require('../page/ug/children/cityList')), 'cityList')
const search = r => require.ensure([], () => r(require('../page/ug/children/search')), 'search')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const member = r => require.ensure([], () => r(require('../page/member/member')), 'member')
const cart = r => require.ensure([], () => r(require('../page/cart/cart')), 'cart')
const cartDetail = r => require.ensure([], () => r(require('../page/cart/children/cartDetail')), 'cartDetail')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const safe = r => require.ensure([], () => r(require('../page/profile/children/safe')), 'safe')
const addressPage = r => require.ensure([], () => r(require('../page/profile/children/addressPage')), 'addressPage')
const picker = r => require.ensure([], () => r(require('../page/profile/children/picker')), 'picker')
const phone = r => require.ensure([], () => r(require('../page/profile/children/phone')), 'phone')
const feedback = r => require.ensure([], () => r(require('../page/profile/children/feedback')), 'feedback')
const about_us = r => require.ensure([], () => r(require('../page/profile/children/about_us')), 'about_us')
const setting = r => require.ensure([], () => r(require('../page/profile/children/setting')), 'setting')

const loading = r => require.ensure([], () => r(require('../components/loading/loading')), 'loading')


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default [{
	path: '/',
	component: App,//顶层路由，对应index.html
	children: [
        //首页
		{
			path: '',
			redirect: '/ug'
		},
		{
			path: '/ug',
			component: ug,
            // meta: {keepAlive: true},
            meta: {keepAlive: false},
            children: [{
                path: 'productDetail', //商品详情页
                component: productDetail,
            },{
                path: 'safeDetection',
                component: safeDetection//安心指纹
            },{
                path: 'addressChose',
                component: addressChose//地址选择页
            },{
                path: 'locationSearch',
                component: locationSearch//地址搜索页
            },{
                path: 'cityList',
                component: cityList//城市列表
            },{
                path: 'search',
                component: search//商品搜索页
            }]
		},
        {
			path: '/city/:cityid',
			component: city
		},
		//会员页面
		{
            path: '/member',
            component: member
        },
        //订单列表页
        {
            path: '/cart',
            component: cart,
            children: [{
                path: 'cartDetail', //订单详情页
                component: cartDetail,
            }, ]
        },
        //个人信息页
        {
            path: '/profile',
            component: profile,
            children: [{
                    path: 'safe',//账户与安全
                    component: safe,
                },
                {
                    path: 'addressPage',//我的地址
                    component: addressPage,
                },
                {
                    path: 'picker',//我的地址
                    component: picker,
                },
                {
                    path: 'phone',//绑定手机
                    component: phone,
                },{
                    path: 'feedback',//意见反馈
                    component: feedback,
                },{
                    path: 'about_us',//关于我们
                    component: about_us,
                },{
                    path: 'setting',//设置
                    component: setting,
                }]
        },
        {
            path: '/loading',
            component: loading
        },
	]
}]
