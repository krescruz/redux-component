import { connect } from 'react-redux'
import Table from '../components/Table'

const mapStateToProps = (state) => ({
	  projects: state.projects
	}
 )

const DataTable = connect(
  mapStateToProps,
)(Table)

export default DataTable
