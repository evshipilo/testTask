import React from 'react'
import PropTypes from 'prop-types'

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Table extends React.Component {
  render() {
    const items = this.props.donations.map((it, index) => <tr key={it.donationID}>
      <td key={`${it.donationID}0`}><div className='img-wrapper'><img src={it.photo} alt="img"/></div></td>
      <td key={`${it.donationID}1`}><span>{it.name}</span><br/><span>{it.surname}</span></td>
      <td key={`${it.donationID}2`}><span>{it.intention ? `${it.intention}$` : null}</span></td>
      <td key={`${it.donationID}3`}><span>{it.commitment ? `${it.commitment}$` : null}</span></td>
    </tr>)
    return (
      <table className='users-table'>
        <tbody>
          <tr className='tab-header'>
            <th>Pic</th>
            <th>Участники:</th>
            <th>Намерения:</th>
            <th>Обязательства:</th>
          </tr>
          {items}
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  donations: PropTypes.object
}

export default Table
