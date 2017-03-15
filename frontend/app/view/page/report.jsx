import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import Classnames from 'classnames';
import Util from 'helper/util';
import Config from 'helper/config';
import Header from 'view/component/header';
import Footer from 'view/component/footer';
import AuthModel from 'model/auth';
import ExpenseModel from 'model/expense';
import Stickyside from 'view/component/stickyside';
import Style from 'style/report.scss';

export default class Report extends React.Component{
	constructor(props){
    super(props);
    this._authModel = new AuthModel();
    this._expenseModel = new ExpenseModel(this._authModel.getUserData());
    this._expenseModel.subscribe(function(){
    	this.setState({expenseList:this._expenseModel.expenseList});
    }, this);
		//instead of return in getInitialState 
		this.state = {
			expenseList : [],
		};
	}

	componentDidMount(){
		this._expenseModel.getExpenseList();
		$(window).scrollTop(0);
  }

	render(){
		const expenseListView = this.state.expenseList.map(function(item, index){
			return(
				<tr key={Util.uuid()}>
					<th scope="row">{index + 1}</th> 
					<td>{item.date}</td>
					<td><strong>${item.amount}</strong></td> 
				</tr> 
			);
		}, this);

		return(
			<div>
				<header><Header {...this.props} /></header>
				<main className="container report">
					<div className="row">
						<div className="col-lg-9">
							<div className="row category-title">
								<h3>Report</h3>
							</div>								
							<div className="row latest-posts">
								<h4>TODO: with time range here</h4>
								<h4>TODO: time-series plot here</h4>
								<h4>TODO: aggregate spending per hour, day,month, and year (in addition to per week)</h4>
								<table className="table table-hover"> 
									<thead> 
										<tr>
											<th>#</th> 
											<th>Date</th>
											<th>Amount</th> 
										</tr> 
									</thead> 
									<tbody> 
										{expenseListView}
									</tbody> 
								</table>
							</div>

						</div>
						<div className="col-lg-3">
							
						</div>
					</div>
				</main>
				<footer ref="footer"><Footer {...this.props} /></footer>
			</div>
		);
	}

}
