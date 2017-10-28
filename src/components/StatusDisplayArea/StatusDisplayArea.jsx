import React, { Component } from 'react';
import northern_data from "./northern_data.json";
import Status from "./../Status/Status"

class StatusDisplayArea extends Component {
  render() {
    return (
      <div className="display-container" >
        { northern_data.categories.map( ( statusData, index ) => {
            return (
              <Status 
                header={ statusData.name } 
                completionPercentage={ statusData.completionPercentage } 
                completed={ statusData.completed }
                onTarget={ statusData.onTarget }
                remaining={ statusData.remaining }
                editable={ statusData.editable }
                key={ index }
                index={ index } 
              />
            )
          } ) 
        }
      </div>
    )
  }
}

export default StatusDisplayArea;