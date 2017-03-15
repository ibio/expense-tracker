import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import Classnames from 'classnames';
import Config from 'helper/config';
import Util from 'helper/util';
import AuthModel from 'model/auth';
import Style from 'style/component/header.scss';

export default class Header extends React.Component {
	constructor(props) {
    super(props);
    this._authModel = new AuthModel();
		//instead of return in getInitialState 
		this.state = {
			mainNav : this.props.navs[0],
		};
	}

	componentDidMount(){
		//
  }

  _assembleLink(str){
  	return [Config.DIR_RULE, str].join('/');
  }
	
	render(){
		// TODO: implement logout
		const loginView = this._authModel.isLogin() ? 'Logout' : 'Login';
		//
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top header" ref="header">
			  <div className="container-fluid wrapper">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed toggle-button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand logo" target="_self" href={this._assembleLink(Config.NAV_EXPENSE)}><img className="img-responsive" src={Config.STATIC_ROOT + '/res/logo.png'} /></a>
			    </div>

			    <div className="collapse navbar-collapse main-menu" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li className={Classnames({active:this.state.mainNav === Config.NAV_EXPENSE})}><a target="_self" href={this._assembleLink(Config.NAV_EXPENSE)}>Expense</a></li>
			        <li className={Classnames({active:this.state.mainNav === Config.NAV_REPORT})}><a target="_self" href={this._assembleLink(Config.NAV_REPORT)}>Report</a></li>
			      </ul>

			      <ul className="nav navbar-nav navbar-right">
			        <li className={Classnames({active:this.state.mainNav === Config.NAV_LOGIN})}><a target="_self" href={this._assembleLink(Config.NAV_LOGIN)}>{loginView}</a></li>
			      </ul>

			    </div>
			  </div>
			</nav>
		);
	}

}
