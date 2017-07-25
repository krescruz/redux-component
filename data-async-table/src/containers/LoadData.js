import { connect } from 'react-redux'
import FetchButton from '../components/FetchButton'
import { fetchPosts } from '../actions'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
	onClick: () => {
		dispatch(fetchPosts())
		console.log('After Fetch', dispatch)
	}
})

const LoadData = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FetchButton)

export default LoadData
