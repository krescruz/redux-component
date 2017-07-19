import { combineReducers } from 'redux';
import products from './products'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  products,
  visibilityFilter
})

export default todoApp
