import React from 'react'
import PropTypes from 'prop-types'

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

class Diagram extends React.Component {
  render() {
    let coll,
      exp
    const angle = ((2 * Math.PI * this.props.collected) / this.props.required) + 0.5 * Math.PI
    const angle2 = ((2 * Math.PI * (this.props.collected + this.props.expected)) / this.props.required) + 0.5 * Math.PI
    const x = 65 * Math.cos(0.5 * Math.PI)
    const y = 65 * Math.sin(0.5 * Math.PI)
    if (angle / Math.PI >= 0.5 && angle / Math.PI <= 1.5) coll = `M 65,65 L ${x + 65},${y + 65} A 65,65,0,0,1,${65 * Math.cos(angle) + 65},${65 * Math.sin(angle) + 65} z`
    if (angle / Math.PI > 1.5 && angle / Math.PI < 2.5) coll = `M 65,65 L ${x + 65},${y + 65} A 65,65,0,1,1,${65 * Math.cos(angle) + 65},${65 * Math.sin(angle) + 65} z`
    if (angle / Math.PI === 2.5) coll = `M 65,65 L ${x + 65},${y + 65} A 65,65,0,1,1,${65 * Math.cos(2.4999 * Math.PI) + 65},${65 * Math.sin(2.4999 * Math.PI) + 65} z`
    if (angle2 / Math.PI >= 0.5 && angle2 / Math.PI <= 1.5) exp = `M 65,65 L ${x + 65},${y + 65} A 65,65,0,0,1,${65 * Math.cos(angle2) + 65},${65 * Math.sin(angle2) + 65} z`
    if (angle2 / Math.PI > 1.5 && angle2 / Math.PI < 2.5) exp = `M 65,65 L ${x + 65},${y + 65} A 65,65,0,1,1,${65 * Math.cos(angle2) + 65},${65 * Math.sin(angle2) + 65} z`
    if (angle2 / Math.PI === 2.5) exp = `M 65,65 L ${x + 65},${y + 65} A 65,65,0,1,1,${65 * Math.cos(2.4999 * Math.PI) + 65},${65 * Math.sin(2.4999 * Math.PI) + 65} z`
    return (
      <div className='diagram'>
        <div className='required'> </div>
        <svg className='collected'>
          <path fill="#ffc517" d={coll} />
        </svg>
        <svg className='expected'>
          <path fill="#999999" d={exp} />
        </svg>
        <div className='month'>
         <span> {this.props.month}</span>
        </div>
      </div>
    )
  }
}

Diagram.propTypes = {
  collected: PropTypes.num,
  required: PropTypes.num,
  expected: PropTypes.num,
  month: PropTypes.string
}

export default Diagram
