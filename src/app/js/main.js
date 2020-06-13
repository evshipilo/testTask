import React from 'react'
import ReactDOM from 'react-dom'
import '../css/style.scss'
import Diagram from './module/diagramm'
import Table from './module/table'

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collected: 650,
      required: 1000,
      expected: 150,
      month: 'Ноябрь',
      currentUserID: 1,
      donations: [
        {
          photo: 'img/1.jpg',
          name: 'Иван',
          surname: 'Петров',
          intention: 100,
          commitment: 200,
          userID: 1,
          donationID: 1
        },
        {
          photo: 'img/2.jpg',
          name: 'Пётр',
          surname: 'Иванов',
          intention: null,
          commitment: 150,
          userID: 2,
          donationID: 2
        },
        {
          photo: 'img/1.jpg',
          name: 'Иван',
          surname: 'Петров',
          intention: 100,
          commitment: null,
          userID: 1,
          donationID: 5
        },
        {
          photo: 'img/3.jpg',
          name: 'Наталья',
          surname: 'Красивая',
          intention: 200,
          commitment: null,
          userID: 3,
          donationID: 3
        },
        {
          photo: 'img/1.jpg',
          name: 'Иван',
          surname: 'Петров',
          intention: 300,
          commitment: null,
          userID: 1,
          donationID: 4
        }
      ]
    }
    this.deleteDonation = this.deleteDonation.bind(this)
    this.sortDonationsByUserID = this.sortDonationsByUserID.bind(this)
  }

  deleteDonation(index) {
    const del = this.state.donations.splice(index, 1)
    this.setState({ donation: del })
  }

  sortDonationsByUserID(userID) {
    const { donations } = this.state
    const filtered = donations.filter((it) => it.userID === userID)
      .concat(donations.filter((it) => it.userID !== userID))
    this.setState({ donations: filtered })
  }

  componentDidMount() {
    this.sortDonationsByUserID(this.state.currentUserID)
  }

  render() {
    return (
      <div className='wrapper'>
        <Diagram
          collected={this.state.collected}
          required={this.state.required}
          expected={this.state.expected}
          month={this.state.month}
        />
        <Table
          donations={this.state.donations}
          currentUserID={this.state.currentUserID}
          deleteDonation={this.deleteDonation}
        />

      </div>

    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.root'))
