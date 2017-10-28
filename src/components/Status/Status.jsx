import React, { Component } from 'react';
import './Status.css';
import Stats from './../Stats/Stats';
import editIcon from './../../edit-icon.png';

class Status extends Component {

  constructor(props) {
    super(props);

    this.renderEditableIcon = this.renderEditableIcon.bind(this);
    this.renderStats = this.renderStats.bind(this);
  }

  renderStats() {
    const {
      completed,
      onTarget,
      remaining
    } = this.props;

    let statsList = [];
    let index = 0;

    if ( completed ) {
      statsList.push(<Stats completed={ completed } key={ index } />)
      index++;
    }

    if ( onTarget ) {
      statsList.push(<Stats onTarget={ onTarget } key={ index } />)
      index++
    }

    if ( remaining ) {
      statsList.push(<Stats remaining={ remaining } key={ index } />)
    }

    return (
      statsList
    )
  }

  renderEditableIcon( editable ) {
    if ( editable ) {
      return(
        <div className="status-editable" >
          <img src={ editIcon } alt="edit" /> 
        </div>
      )
    }
  }

  render () {

    const {
      header,
      completionPercentage,
      editable,
      index
    } = this.props;

    return (
      <div className={ index === 3 ? "Status remove-margin" : "Status" } >

        <h3 className="status-header">{ header }</h3>

        <div className="status-body" >
          { completionPercentage } %
          { this.renderEditableIcon(editable) }
        </div>

        { this.renderStats() }

      </div>
    )
  }
}

export default Status;
