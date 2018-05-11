'use strict';
import Mysql from '../model/sql-config.js'
import Sql_product from '../model/sql-product.js'
import formidable from 'formidable'
import md5 from '../model/md5.js'

var mysql=Mysql.mysql_;
var dirname='http://localhost:3390/public/images/product/';

var Banner=function () {};
Banner.prototype={
	constructor: Banner,
	async getBanner(req, res, next){
		//商品基本信息
		var essentialInfor = await mysql('select *,CONCAT("'+dirname+'",path) as path from banner where product_index=0');
		//添加价格信息和标签信息
	  	/*await Promise.all(essentialInfor.map(async function(item) {
	  		var price_up = await mysql('select * from price_up where product_id='+item.product_id);
            var price_down = await mysql('select * from price_down where product_id='+item.product_id);
            var product_tags = await mysql('select * from product_tags where product_id='+item.product_id);
            item.vip_price_pro={};
            item.product_tags=[];
            item.vip_price_pro.price_up=price_up[0];
            item.vip_price_pro.price_up.price=priceChange(item.vip_price_pro.price_up.price);
            item.vip_price_pro.price_down=price_down[0];
            item.product_tags=item.product_tags.concat(product_tags);
            item.vip_price_pro.price_down.price=priceChange(item.vip_price_pro.price_down.price);
	  	}));*/
  //       var banner={
  //       	'banner': essentialInfor
  //       }
		// res.type('application/json');
	 //    res.jsonp(banner);
        return essentialInfor;
	},
	

}

async function dataEach(data) {
  	
}

export default new Banner();
