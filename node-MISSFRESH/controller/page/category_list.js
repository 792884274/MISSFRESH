'use strict';

import MissMysql from '../../prototype/missmysql.js'

class CategoryList extends MissMysql{
	constructor(){
		super()
		this.getCategoryList=this.getCategoryList.bind(this);
	}
	async getCategoryList(product_index){
		var essentialInfor=await this.missMysql('category_list', {
			image: 'image',
			category_image: 'category_image'
		},{
			product_index: product_index
		});
    	return essentialInfor;
	}
}

export default new CategoryList();



