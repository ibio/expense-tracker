import React from 'react';
import _ from 'lodash';
import Util from 'helper/util';
import Classnames from 'classnames';

//NOTICE: this class is for popup body use only
export default class EditExpenseItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amount : this.props.amount,
      description : this.props.description
    };
  }

  componentDidMount(){
    $('.inputAmount').focus();
  }

  //for pupoup use
  getData(){
    var item = _.cloneDeep(this.props);
    item.amount = this.state.amount;
    item.description = this.state.description;
    return item;
  }

  isReadyDismiss(){
    return true;
  }

  _handleValueChange(){
    const amount = parseFloat($('.inputAmount').val()) || 0;
    const description = $('.inputText').val() || '';
    //
    this.setState({amount:amount, description});
  }

	render(){
    return(
			<div className="editexpenseitem" onChange={this._handleValueChange.bind(this)}>
        <div className="form-group">
          <div className="form-group">
          <label htmlFor="inputAmount">Amount:</label>
          <input type="number" className="form-control inputAmount" defaultValue={this.props.amount} placeholder="0.00" />
        </div>
          <label htmlFor="inputText">Description:</label>
          <textarea type="text" className="form-control inputText" placeholder="description" defaultValue={this.props.description} rows="5" />
        </div>
      </div>
		);
	}

}