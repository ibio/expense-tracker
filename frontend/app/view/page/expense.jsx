import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import Classnames from 'classnames';
import Util from 'helper/util';
import Config from 'helper/config';
import Header from 'view/component/header';
import Footer from 'view/component/footer';
import Stickyside from 'view/component/stickyside';
import AuthModel from 'model/auth';
import ExpenseModel from 'model/expense';
import Popup from 'view/component/popup';
import Style from 'style/expense.scss';

export default class Expense extends React.Component{
	constructor(props){
    super(props);
    this._authModel = new AuthModel();
    this._userData = this._authModel.getUserData();
    this._expenseModel = new ExpenseModel(this._userData);
    this._expenseModel.subscribe(function(){
    	this.setState({expenseList:this._expenseModel.expenseList});
    }, this);
    this._roleMapping = {
    	1 : 'Admin',
    	2 : 'User',
    };
		//instead of return in getInitialState 
		this.state = {
			expenseList : [],
		};
	}

	componentDidMount(){
		this._loadExpenses();
		//
		this.refs.stickySide.setBottom(this.refs.footer);
		//
		$(window).scrollTop(0);
  }

  addExpense(amount, description){
  	this._expenseModel.saveExpenseList(null, amount, description, true, function(){
  		this._loadExpenses();
  	}, this);
  }

  _loadExpenses(){
  	// admin
		if(this._userData.role === 1){
			this._expenseModel.getAdminExpenseList();
		}else{
			this._expenseModel.getExpenseList();
		}
  }

  _handleEditClick(item){
  	// it it's current login user
  	if(item.uid === this._userData.id){
  		this.refs.popup.show('Edit Expense', 'EditExpenseItem', item, this._handleExpenseSave.bind(this), 'Save');
  	}else{
  		// TODO: tip for non-current user
  	}
  }

  _handleExpenseSave(item){
  	this._expenseModel.saveExpenseList(item.id, item.amount, item.description, true, function(){
  		this._loadExpenses();
  	}, this);
  }

  // http://daverupert.com/2015/12/intrinsic-placeholders-with-picture/
	render(){
		const expenseListView = this.state.expenseList.map(function(item){
			const isOwner = (item.uid === this._userData.id);
			return(
				<div key={Util.uuid()} className="col-lg-3 post-item" onClick={this._handleEditClick.bind(this, item)} title={isOwner ? "Click to edit" : "You cannot edit other's post"}>
					<div className={Classnames("entry-content", {'entry-owner':isOwner})}>
						<h3><a href="javascript:void(0);">${item.amount}</a></h3>
						<h5>{item.date}</h5>
						<h5 className="ellipsis"><i className={Classnames('glyphicon', 'glyphicon-user', {'hidden':!isOwner})}></i> {item.email}</h5>
						<p>{item.description}</p>
					</div>	
				</div>
			);
		}, this);
		return(
			<div>
				<header><Header {...this.props} /></header>
				<Popup ref="popup" />
				<main className="container expense">
					<div className="row">
						<div className="col-lg-9">
							<div className="jumbotron board">
								<h4>Hello {this._userData.email}<i>({this._roleMapping[this._userData.role]})</i>,</h4>
							  <h2>Focus on your business, not your expense.</h2>
							  <p>Gigster helps you to keep tracking your expenses at a simple place.</p>
							  <p><button className="btn btn-primary btn-lg" role="button">Start now on the right side</button></p>
							</div>
							<div className="category-title">
								<h3>Expense List</h3>
							</div>
							<div className="row latest-posts">
								{expenseListView}
							</div>

						</div>
						<div className="col-lg-3">
							<Stickyside ref="stickySide" addExpense={this.addExpense.bind(this)} />
						</div>
					</div>
				</main>
				<footer ref="footer"><Footer {...this.props} /></footer>
			</div>
		);
	}

}
