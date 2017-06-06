import bars from './bars/barsReducer.js';
import selectedBar from './selectedBar/selectedBarReducer.js';
import drinks from './drinks/drinksReducer';
import prices from './prices/pricesReducer';
import currentRound from './currentRound/currentRoundReducer';
import rounds from './rounds/roundsReducer';
import notification from './notification/notificationReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
   bars,
   selectedBar,
   drinks,
   prices,
   currentRound,
   rounds,
   notification
});

export default rootReducer;