import React from 'react';
import ReactDOM from 'react-dom';
// NOTICE: do NOT use from npm because it cannot call directly ./build/director.js
// instead, it invokes lib/director.js which is malfunctioning.
// import Director from  'director';
import Director from  'lib/director/director';
import Config from  'helper/config';
import Util from   'helper/util';
import AuthModel from 'model/auth';
import Login from 'view/page/login';
import Expense from 'view/page/expense';
import Report from 'view/page/report';

var _router;

function init(debug){
	var routes = {};
	var url;
	//https://github.com/flatiron/director#wildcard-routes
	routes['/((\w|.)*)'] = render.bind(this);
	_router = Director.Router(routes);
	// default: home
	_router.init(['', Config.NAV_LOGIN].join('/'));
}

function render(){
	var obj = Util.getNav(Config.DIR_RULE + '/');
	var node = null;
	var authoMode = new AuthModel();
	document.title = Config.MENU[obj.navs[0]];
	//
	if(obj.navs[0] === Config.NAV_LOGIN){
		if(authoMode.isLogin()){
			document.location.href = [Config.DIR_RULE, Config.NAV_EXPENSE].join('/');
			return;
		}
	}else{
		if(!authoMode.isLogin()){
			document.location.href = [Config.DIR_RULE, Config.NAV_LOGIN].join('/');
			return;
		}
	}
	//
	switch(obj.navs[0]){
		case Config.NAV_LOGIN:
			node = <Login title={document.title} navs={obj.navs} nid={obj.nid} />;
			break;
		case Config.NAV_EXPENSE:
			node = <Expense title={document.title} navs={obj.navs} nid={obj.nid} />;
			break;
		case Config.NAV_REPORT:
			node = <Report title={document.title} navs={obj.navs} nid={obj.nid} />;
			break;
		default:
			// default to home
			document.location.href = [Config.DIR_RULE, Config.NAV_LOGIN].join('/');
	}
	//
	if(node){
		ReactDOM.render(node, document.getElementById('app'));
	}
	
}


init();