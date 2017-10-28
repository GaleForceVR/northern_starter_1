import React, { Component } from 'react';
import './Stats.css'

class Stats extends Component {
  render() {

    const {
      completed,
      onTarget,
      remaining
    } = this.props

    let classNameExtension = "";
    let descriptor = "";
    let value = "";
    let dataColor = "";

    if ( completed ) {
      classNameExtension = "status-completed";
      descriptor = "Completed";
      value = completed;
      dataColor = "blue";
    }

    if ( onTarget ) {
      classNameExtension = "status-on-target";
      descriptor = "On Target";
      value = onTarget;
      dataColor = "green";
    }

    if ( remaining ) {
      classNameExtension = "status-remaining";
      descriptor = "Remaining";
      value = remaining;
      dataColor = "gray";
    }

    return (
      <div className={ "stat-message " + classNameExtension } >
        <div className={ `data-circle data-circle--${ dataColor }` }></div>
        { descriptor }
        <span className={ `data-value data-value--${ dataColor }` } >{ value }</span>
      </div>
    )
  }
}

export default Stats;