import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icomoon';
import { connect } from 'react-redux';
import { filteredList } from '../../Actions/phoneActions';

import './Filter.css';

const Filter = (props) => (
    <div className="Filter">
        <div className="field">
            <div className="control has-icons-left">
                <span className="icon is-small is-left">
                    <Icon icon="search" />
                </span>

                <input
                    onChange={props.onFilteredList}
                    value={props.filterText}
                    type="text"
                    className="input"
                    placeholder="Filter" />
                    
            </div> 
        </div>
    </div>
);

Filter.propTypes = {
    onFilteredList: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => {
    return state;
}

const mapDispatchToProps = {
    onFilteredList: filteredList
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)