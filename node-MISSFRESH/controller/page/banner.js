'use strict';

import MissMysql from '../../prototype/missmysql.js'

class Banner extends MissMysql{
	constructor(){
		super()
		this.getBanner=this.getBanner.bind(this);
	}
	async getBanner(){
		var essentialInfor=await this.missMysql('banner', {
			image: 'image'
		},{
			product_index: 0
		});
    	return essentialInfor;
	}
}

export default new Banner();