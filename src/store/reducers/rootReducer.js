import authReducer from './authReducer'
import foodReducer from './foodReducer'
import cartReducer from './cartReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

cartReducer
const rootReducer = combineReducers({
  auth: authReducer,
  food: foodReducer,
  cart: cartReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
