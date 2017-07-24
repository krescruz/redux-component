import React from 'react'
import FetchButton from './FetchButton'
import DataTable from '../containers/DataTable'

var handleRefreshClick = () => {
    console.log('onClick');
}

const App = () => (
  <div>
  	<FetchButton onClick={handleRefreshClick}/>
    <DataTable />
  </div>
)

export default App
