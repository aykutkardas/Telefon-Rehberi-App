import React, { Component } from 'react'
import Icon from 'react-icomoon';

import './List.css';

export default class List extends Component {
    
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(phone) {
        this.props.handleRemove(phone);
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

        return (
            <div className="List">
                <table className="table is-striped is-fullwidth">
                    <tbody>
                        <tr>
                            <th>
                                <Icon icon="user" />
                            </th>
                            <th colSpan="2">
                                <Icon icon="phone" />
                            </th>
                        </tr>
                        {filteredList.map(item => (
                            <tr key={item.phone}>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td className="has-text-right">
                                    <button className="button" onClick={() => this.handleClick(item.phone)}>
                                        <Icon icon="bin" />
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}