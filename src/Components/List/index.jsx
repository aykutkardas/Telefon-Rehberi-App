import React, { Component } from 'react'
import Icon from 'react-icomoon';
import { connect } from 'react-redux';
import { removePhone } from '../../Actions/phoneActions';

import './List.css';

class List extends Component {
    
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(phone) {
        this.props.onRemovePhone(phone);
    }

    render() {
        const filteredList = this.props.list.filter(
            contact => {
                let name = contact.name.toLowerCase();
                let phone = contact.phone;
                let key = this.props.filterText.toLowerCase();

                return (name.indexOf(key) > -1 || phone.indexOf(key) > -1 ? true : false);
            }
        );

        const filteredListElement = filteredList
            .map((item, index) => (
                <tr key={item.phone}>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td className="has-text-right">
                        <button className="button" onClick={() => this.handleClick(item.phone)}>
                            <Icon icon="bin" />
                        </button>
                    </td>
                </tr>
        ));

        return (
            <div className="List">
                <table className="table is-striped is-fullwidth">
                    <tbody>
                        <tr>
                            <th><Icon icon="user" /></th>
                            <th colSpan="2"><Icon icon="phone" /></th>
                        </tr>
                        { filteredListElement }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return state;
}

const mapDispatchToProps = {
    onRemovePhone: removePhone
}

export default connect(mapStateToProps, mapDispatchToProps)(List)