import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer/categoryReducer.js';
import formValidate from './middleware/formValidate.js';
import logger from './middleware/logger.js';

export default createStore(reducer, applyMiddleware(formValidate, logger), window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENSION_())