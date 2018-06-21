import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPhone } from '../../Actions/phoneActions';
import './Form.css';
import phoneFormatter from '../../Modules/phoneFormatter';


import AddButton from '../AddButton';

class Form extends Component {

  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  state = {
    name: '',
    phone: '',
    isUnique: true,
    isEmpty: false
  }

  static propTypes = {
    handleUniqueControl: PropTypes.func.isRequired
  }

  handleUniqueControl(phone) {

    return !(this.props.list.some(
      item => item.phone === phoneFormatter(phone) ? true : false
    ));

  }

  handleChange(e) {
    let isUnique = this.handleUniqueControl(
      e.target.name === 'phone' ? e.target.value : this.state.phone
    );
    
    this.setState({
      [e.target.name]: e.target.value,
      isUnique
    });

  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.state.name === '' || this.state.phone === '')
      return false;

    const {name, phone} = this.state;
    this.props.onAddPhone({
      name,
      phone
    });

    this.setState({
      name: '',
      phone: ''
    });

  }

  render() {
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>

            <div className="field has-addons">

                <div className="control">
                    <input 
                      name="name" 
                      value={this.state.name} 
                      onChange={this.handleChange}
                      type="text" 
                      className="input" 
                      placeholder="Name"
                      autoComplete="off" />
                </div>

                <div className="control">
                    <input 
                      name="phone" 
                      value={this.state.phone} 
                      onChange={this.handleChange}
                      type="number" 
                      className={'input' + (!this.state.isUnique ? ' is-danger' : '')} 
                      placeholder="Phone"
                      autoComplete="off" />
                </div>

                <div className="control">
                    <AddButton isUnique={this.state.isUnique} />
                </div>

            </div>

            <div className={"control has-text-right " + (this.state.isUnique && 'is-hidden') }>
              <p className="help is-danger">The phone has to be unique.</p>
            </div>

        </form>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return state;
}

const mapDispatchToProps = {
  onAddPhone: addPhone
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)