import React from 'react'
import ReactDOM from 'react-dom'
import '../css/style.scss'
import Diagram from './module/diagramm'

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collected: 750,
      required: 1000,
      expected: 200,
      month: 'ноябрь'
    }
  }

  render() {
    return (
      <div className='diagram-wrapper'>
        <Diagram
          collected={this.state.collected}
          required={this.state.required}
          expected={this.state.expected}
          month={this.state.month}
        />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.root'))
