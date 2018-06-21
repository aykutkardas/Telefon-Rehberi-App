import { PHONE_ADD, PHONE_REMOVE, PHONE_FILTER_TEXT } from '../Actions/phoneActions';

export default function phoneReducer(state = {}, {type, payload}) {

    switch(type) {
        case PHONE_ADD:
            const newList = [...state.list, payload.newPhone];
            return {
                ...state,
                list: newList
            };
            
        case PHONE_REMOVE:
            const list = [...state.list];
            let index = list.findIndex((item) => item.phone === payload.phone);
            list.splice(index, 1);

            return {
                ...state,
                list
            }
        
        case PHONE_FILTER_TEXT:
            return {
                ...state,
                filterText: payload.filterText
            };

        default:
            return state;
    }
}