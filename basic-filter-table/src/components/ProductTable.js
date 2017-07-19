import React from 'react';
import PropTypes from 'prop-types'
import ProductRow from './ProductRow'

const ProductTable = ({ products, onRowClick }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {products.map(item =>
        <ProductRow
          key={item.id}
          {...item}
          onClick={() => onRowClick(item.id)}
        />
      )}
    </tbody>
    <tfoot></tfoot>
  </table>
)

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onRowClick: PropTypes.func.isRequired
}

export default ProductTable
