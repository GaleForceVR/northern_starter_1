import React, { Component } from 'react';
import './Status.css';
import Stats from './../Stats/Stats';
import editIcon from './../../edit-icon.png';
import { VictoryPie } from 'victory-pie';

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
      index,
      onTarget
    } = this.props;

    const incompletePercentage = 100 - completionPercentage

    return (
      <div className={ index === 3 ? "Status remove-margin" : "Status" } >

        <h3 className="status-header">{ header }</h3>

        <div className="status-body" >
          <VictoryPie 
            width={400}
            innerRadius={148}
            padAngle={ completionPercentage === 100 ? 0.65 : 0.95 }
            colorScale={[
              "#02c5e4",
              onTarget ? "#6ac10a" : "#c5c3c3"
            ]}
            padding={{
              top: 60,
              bottom: 0
            }}
            data={[
              { x: null, y: completionPercentage },
              { x: null, y: incompletePercentage }
            ]}
          
          />
          <div className="status-completed-percentage">
            { completionPercentage } %
          </div>
          <div className="status-complete-label" >
            Complete
          </div>
          { this.renderEditableIcon(editable) }
        </div>

        { this.renderStats() }

      </div>
    )
  }
}

export default Status;
