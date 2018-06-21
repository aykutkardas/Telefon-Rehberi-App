export const PHONE_ADD = 'PHONE_ADD';
export const PHONE_REMOVE = 'PHONE_REMOVE';
export const PHONE_FILTER_TEXT = 'PHONE_FILTER_TEXT';

export function addPhone(newPhone){
    return {
        type: PHONE_ADD,
        payload: {
            newPhone
        }
    }
}

export function removePhone(phone) {
    return {
        type: PHONE_REMOVE,
        payload: {
            phone
        }
    }
}

export function filteredList({ target }) {
    return {
        type: PHONE_FILTER_TEXT,
        payload: {
            filterText: target.value
        }
    }
}