import React from 'react'
import PropTypes from 'prop-types'

class Diagramm extends React.Component {
  render() {
    return (
      <div className='center-align translation'>
        {this.props.translation}
      </div>
    )
  }
}

Diagramm.propTypes = {
  translation: PropTypes.string
}

export default Diagramm
