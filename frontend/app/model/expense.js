import $ from 'jquery';
import _ from 'lodash';
import Util from 'helper/util';
import Config from 'helper/config';
import ProxyModel from 'model/proxy';

export default class ExpenseModel extends ProxyModel {

	constructor(userData) {
		super();
		// public
		this.expenseList = [];
		this._userData = userData;
	}

	getExpenseList(silent, callback, scope){
		this.get(Config.URL_GET_USER_EXPENSE, this._userData.token, function(response){
			response = response || {};
			this.expenseList = Array.isArray(response.data) ? response.data : [];
			if(!silent){
				this.notify();
			}
			callback && callback.call(scope);
		}, function(response){
			// "status":false,"code":401,
		}, this);
	}

	getAdminExpenseList(silent, callback, scope){
		this.get(Config.URL_GET_ADMIN_EXPENSE, this._userData.token, function(response){
			response = response || {};
			this.expenseList = Array.isArray(response.data) ? response.data : [];
			if(!silent){
				this.notify();
			}
			callback && callback.call(scope);
		}, function(response){
			// "status":false,"code":401,
		}, this);
	}

	saveExpenseList(id, amount, description, silent, callback, scope){
		var requestData = {
			id : id,
			amount : amount,
			description : description,
		};
		this.post(Config.URL_ADD_EXPENSE, requestData, this._userData.token, function(response){
			response = response || {};
			if(!silent){
				this.notify();
			}
			callback && callback.call(scope);
		}, function(response){
			// "status":false,"code":401,
		}, this);
	}

	/*
	 * private methods
	 */
	
}
