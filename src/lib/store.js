import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/categoryReducer.js';
import formValidate from './middleware/formValidate.js';

export default createStore(reducer, applyMiddleware(formValidate), window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_())