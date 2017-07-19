import React from 'react';
import PropTypes from 'prop-types'

const ProductRow = ({ onClick, name, desc }) => (
  <tr onClick={onClick}>
    <td>{name}</td>
    <td>{desc}</td>
  </tr>
)

ProductRow.propTypes = {
  onClick: PropTypes.func.isRequired,
  name:  PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default ProductRow
