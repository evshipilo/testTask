import React from 'react'
import PropTypes from 'prop-types'

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Table extends React.Component {
  render() {
    const items = this.props.donations.map((it, index) => <tr key={it.donationID}
      className={it.userID === this.props.currentUserID ? 'current-user' : 'user'}>
      <td key={`${it.donationID}0`}><div className='img-wrapper'><img src={it.photo} alt="img"/></div></td>
      <td key={`${it.donationID}1`}><span>{it.name}</span><br/><span>{it.surname}</span></td>
      <td key={`${it.donationID}2`}>{it.intention ? <div className='back'><span>$ {it.intention}</span></div> : null}</td>
      <td key={`${it.donationID}3`}>
        {it.commitment ? <div className='back'><span>$ {it.commitment}</span></div> : <div className='back-fake'> </div>}
        <div className='basket-wrapper'>
          {it.userID === this.props.currentUserID && <div className='basket'
            onClick={() => this.props.deleteDonation(index)}
          ><img src="img/basket.png" alt="img"/></div>}
        </div>
      </td>
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
  donations: PropTypes.object,
  currentUserID: PropTypes.num,
  deleteDonation: PropTypes.func
}

export default Table
