import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { UserReducer } from './features/user';
import { AccountReducer } from "./features/accounts";

const rootReducer = combineReducers({
  user: UserReducer,
  accounts: AccountReducer
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
