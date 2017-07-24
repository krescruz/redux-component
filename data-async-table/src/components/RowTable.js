import React from 'react'
import PropTypes from 'prop-types'

const RowTable = ({ name, url, forks_count }) => (
  <tr>
    <td>{name}</td>
    <td>{url}</td>
    <td>{forks_count}</td>
  </tr>
)

RowTable.propTypes = {
  name:  PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  forks_count: PropTypes.number.isRequired
}

export default RowTable
