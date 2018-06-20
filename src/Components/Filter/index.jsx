import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icomoon';

import './Filter.css';

const Filter = (props) => (
    <div className="Filter">
        <div className="field">
            <div className="control has-icons-left">
                <span className="icon is-small is-left">
                    <Icon icon="search" />
                </span>

                <input
                    onChange={props.handleFilter}
                    value={props.filterText}
                    type="text"
                    className="input"
                    placeholder="Filter" />
                    
            </div> 
        </div>
    </div>
);

Filter.propTypes = {
    handleFilter: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
};

export default Filter;