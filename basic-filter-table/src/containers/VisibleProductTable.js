import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import ProductTable from '../components/ProductTable'

const getVisibleProducts = (products, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return products
    case 'SHOW_COMPLETED':
      return products.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return products.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  products: getVisibleProducts(state.products, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => {
  return {
    onRowClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleProductTable = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTable)

export default VisibleProductTable
