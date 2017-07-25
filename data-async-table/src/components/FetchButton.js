
import React from 'react'
import PropTypes from 'prop-types'

const FetchButton = ({ onClick }) => (
	<button onClick={onClick}>
		Load data
	</button>
)

FetchButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default FetchButton
