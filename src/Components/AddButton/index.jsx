import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-icomoon';

const AddButton = (props) => {
    if (!props.isUnique) {
        return (
            <button className="button is-danger" disabled>
                <Icon icon="user-plus" />
            </button>
        )
    } else {
        return (
            <button className="button is-link">
                <Icon icon="user-plus" />
            </button>
        )
    }
}

AddButton.propTypes = { isUnique: PropTypes.bool.isRequired };


export default AddButton;