import React from 'react'
import ReactDOM from 'react-dom'
import '../css/style.scss'
import Diagramm from './module/diagramm'

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='diagramm'>
        <Diagramm

        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.root'))
