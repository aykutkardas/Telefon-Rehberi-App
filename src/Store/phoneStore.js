import { createStore } from 'redux'
import  phoneReducer from '../Reducers/phoneReducer';

const store = createStore(
    phoneReducer,
    {
        list: [
            {
                name: 'Moscow',
                phone: '05123'
            }, {
                name: 'Berlin',
                phone: '05321'
            }, {
                name: 'Helsinki',
                phone: '05421'
            }, {
                name: 'Denver',
                phone: '05521'
            }
        ],
        filterText: ''
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;