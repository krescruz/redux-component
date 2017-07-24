
import React from 'react'
import PropTypes from 'prop-types'

const FetchButton = ({ onClick }) => (
	<button onClick={onClick}>
		Refresh
	</button>
)

FetchButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default FetchButton
