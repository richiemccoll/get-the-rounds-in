import bars from './bars/barsReducer.js';
import selectedBar from './selectedBar/selectedBarReducer.js';
import drinks from './drinks/drinksReducer';
import prices from './prices/pricesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   bars,
   selectedBar,
   drinks,
   prices
});

export default rootReducer;