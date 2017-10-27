import React, { Component } from 'react';
import northern_data from "./northern_data.json";
import Status from "./../Status/Status"

class StatusDisplayArea extends Component {
  render() {
    return (
      <div className="display-container" >
        { northern_data.categories.map( ( statusData, index ) => {
            return (
              <Status header={ statusData.name } completionPercentage={ statusData.completionPercentage } key={ index } />
            )
          } ) 
        }
      </div>
    )
  }
}

export default StatusDisplayArea;