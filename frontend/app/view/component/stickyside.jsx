import React from 'react';
import $ from 'jquery';
import _ from 'lodash';
import Classnames from 'classnames';
import Util from 'helper/util';
import Config from 'helper/config';
import Style from 'style/component/stickyside.scss';

const STICKY_HOME_SIDE_Y = 60;
const STICKY_HOME_HEIGHT = 435;
const SCREEN_LG_MIN = 1200;

export default class StickySide extends React.Component{
	constructor(props){
    super(props);
    this._$stickySide;
    this._sideOffset;
    this._topX = 0;
    this._$bottom;
	}

	componentDidMount(){
		// cache stickySide for high speed
		this._$stickySide = $(this.refs.stickySide);
		// record current offset
		this._sideOffset = this._$stickySide.offset();
		this._sideOffset.width = this._$stickySide.outerWidth();
		//
		if(Util.isMobile() || $(document).width() < SCREEN_LG_MIN){
			this._$stickySide.css({position:'static'});
		}else{
			$(window).scroll(this._onWindowScroll.bind(this));
		}
		$('#inputAmount').focus();
  }

  setTopPoint(x){
  	this._topX = x;
  }

  setBottom(bottom){
  	this._$bottom = $(bottom);
  }

  _onWindowScroll(){
  	const y = $(window).scrollTop();
  	var bottomEdge, actualY;
  	// console.log(y);
  	if(this._$bottom){
  		bottomEdge = this._$bottom.offset().top - STICKY_HOME_HEIGHT;
	  	// console.log(y); 
	  	if(y <= this._topX){
	  		this._$stickySide.css({position:'static'});
	  	}else if(y > this._topX && y < bottomEdge){
	  		this._$stickySide.css({position:'fixed', left:this._sideOffset.left, top: STICKY_HOME_SIDE_Y, width: this._sideOffset.width});
	  	}else{
	  		actualY = this._$bottom.offset().top - this._topX - STICKY_HOME_HEIGHT;
	  		this._$stickySide.css({position:'absolute', left:'', top:actualY});
	  	}
  	}
  }

  _handleAddClick(){
  	const amount = $('#inputAmount').val();
  	const text = $('#inputText').val();
  	if(amount && text){
  		$('#inputAmount').val('');
  		$('#inputText').val('');
  		this.props.addExpense(amount, text);
  	}
  }

	render(){
		//
		return(
		<div className="stickyside" ref="stickySide">
			<h4 className="side-title">Add a new expense</h4>
			
		  <div className="form-group">
		  	<div className="form-group">
		    <label htmlFor="inputAmount">Amount:</label>
		    <input type="number" className="form-control" id="inputAmount" placeholder="0.00" />
		  </div>
		    <label htmlFor="inputText">Description:</label>
		    <textarea type="text" className="form-control" id="inputText" placeholder="description" rows="5" />
		  </div>
		  <button type="button" onClick={this._handleAddClick.bind(this)} className="btn btn-primary btn-block">Add</button>
			

			<hr />
		</div>
		);
	}

}
