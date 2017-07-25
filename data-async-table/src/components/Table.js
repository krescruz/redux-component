import React from 'react';
import PropTypes from 'prop-types';
import RowTable from './RowTable';

const Table = ({ projects }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Url</th>
        <th>Forks</th>
      </tr>
    </thead>
    <tbody>
      {projects.map(item =>
        <RowTable
          key={item.id}
          {...item}
        />
      )}
    </tbody>
  </table>
)

Table.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    forks_count: PropTypes.number.isRequired
  }).isRequired).isRequired
}

export default Table
