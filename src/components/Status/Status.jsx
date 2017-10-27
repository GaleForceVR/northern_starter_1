import React, { Component } from 'react';

class Status extends Component {
  render () {
    const {
      header,
      completionPercentage
    } = this.props;

    return (
      <div className="Status" >
        <h3 className="status-header">{ header }</h3>
        <div className="status-body" >{ completionPercentage }</div>
      </div>
    )
  }
}

export default Status;
