import React from 'react'

const Filter = (props) => {

    return(
        <div className="filter">
         <h3>Sort By</h3>
          <p><label>Category</label>
          <select onChange={props.setFilter} type="Category">
            <option>All</option>
            <option>Tech</option>
            <option>Lifestyle</option>
            <option>Health</option>
            <option>Philosophy</option>
            <option>Travel</option>
            <option>Other</option>
          </select></p>
          <p><label>Urgency</label>
          <select onChange={props.setFilter} type="Urgency">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select></p>
        </div>
    )
   }


export default Filter
