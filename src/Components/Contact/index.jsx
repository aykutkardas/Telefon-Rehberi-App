import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './Contact.css';

import Filter from "../Filter";
import List   from "../List";
import Form   from "../Form";

import phoneFormatter from '../../Modules/phoneFormatter';

export default class Contact extends Component {

  constructor(props){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleUniqueControl = this.handleUniqueControl.bind(this);
  }
  
  state = {
    filterText: ''
  }


  handleUniqueControl(phone){
    const controlledList = this.props.list.filter(item => item.phone === phoneFormatter(phone) ? true : false);
    if(controlledList.length > 0)
      return false;
    
      return true;
  }

  handleSubmit(contact){
    this.props.saveNewPhone(contact);
  }

  handleRemove(phone) {
    this.props.removePhone(phone);
  }

  handleFilter(e) {
    const filterText = e.target.value
    this.setState({
      filterText
    })
  }

  render() {
    return (
      <div className="Contact box">
      
        <List 
          filterText={this.state.filterText} 
          handleRemove={this.handleRemove}/>

        <Filter 
          filterText={this.state.filterText} 
          handleFilter={this.handleFilter} />

        <Form 
          handleUniqueControl={this.handleUniqueControl}/>

      </div>
    )
  }
}
