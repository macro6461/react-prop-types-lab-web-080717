// Code Product Component Here
import React from "react"
import PropTypes from 'prop-types'
import {range} from 'react-range-proptypes'

export default class Product extends React.Component{
  render(){
    const {name, producer, hasWatermark, color, weight} = this.props
    return(
      <h1>Name: {name}</h1>,
      <h2>Producer: {producer}</h2>,
      <h2>Watermark: {hasWatermark}</h2>,
      <h2>color: {color}</h2>,
      <h2>Weight: {weight}</h2>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    "white",
    "eggshell-white",
    "salmon"
  ]).isRequired,
  weight: range(80, 300).isRequired
}
