import authReducer from './authReducer'
import foodReducer from './foodReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
  auth: authReducer,
  food: foodReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
