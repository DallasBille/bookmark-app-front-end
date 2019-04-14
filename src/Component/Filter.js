import React, {Component} from 'react'

export default class Filter extends Component {

  render(){
    return(
        <div className="filter">
          <label>Sort By</label>
          <label>Category</label>
          <select onChange={this.props.setFilter} type="Category">
            <option>All</option>
            <option>Tech</option>
            <option>Lifestyle</option>
            <option>Health</option>
            <option>Philosophy</option>
            <option>Travel</option>
          </select>
          <label>Urgency</label>
          <select onChange={this.props.setFilter} type="Urgency">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>

          </select>

        </div>
    )
   }
}
