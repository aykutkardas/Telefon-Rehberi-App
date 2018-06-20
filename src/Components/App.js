import React, { Component } from 'react';
import './App.css';

// Components
import Contact from './Contact';

// Modules
import phoneFormatter from '../Modules/phoneFormatter';

class App extends Component {

  constructor(){
    super();

    this.saveNewPhone = this.saveNewPhone.bind(this);
    this.removePhone = this.removePhone.bind(this);
  }

  state = {
    contactList: [
      {
        name: 'Profesör',
        phone: '05123'
      },
      {
        name: 'Berlin',
        phone: '05321'
      },
      {
        name: 'Helsinki',
        phone: '05421'
      },
      {
        name: 'Denver',
        phone: '05521'
      },

    ]
  }

  saveNewPhone(contact) {
    const contactList = [...this.state.contactList];

    contact.phone = phoneFormatter(contact.phone);

    contactList.push(contact);
    this.setState({
      contactList
    })
  }
  
  removePhone(phone) {
    const contactList = [...this.state.contactList];

    let i = 0;
    let index = 0;
    contactList.map((item) => {
      if(item.phone === phone)
        index = i;
      i++;
      return false;
    });

    contactList.splice(index, 1);

    this.setState({
      contactList
    })

  }

  render(){
    return (
      <div className="App">
        <Contact 
          list={this.state.contactList} 
          saveNewPhone={this.saveNewPhone} 
          removePhone={this.removePhone} />
      </div>
    );
  }
}

export default App;
