import React, {Component} from 'react'

export default class Form extends Component {

    state = {
        category: "",
        url: "",
        author: "",
        title: "",
        urgency: "Medium",
        read: "Unread",
        summary: ""
    }

    setUrgency = (event) => {
        this.setState({
            urgency: event.target.value
        })
    }
    setCategory = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    setRead = (event) => {
        this.setState({
            read: event.target.value
        })
    }

    textChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value,
            [event.target.name]: event.target.value
        })
     }

    render(){
        return(
            <div className="form">
                <h3>Add Article</h3>
                <form id="new-article-form" onChange={this.textChange}>
                    <p><input type="text" name="url" placeholder="Article Link"/></p>
                    <p><input type="text" name="title" placeholder="Article Title"/></p>
                    <p><input type="text" name="author" placeholder="Author"/></p>
                </form>
                <p><label>Category</label>
                <select onChange={this.setCategory} type="category">
                    <option>select</option>
                    <option>Tech</option>
                    <option>Lifestyle</option>
                    <option>Health</option>
                    <option>Philosophy</option>
                    <option>Travel</option>
                    <option>Politics</option>
                    <option>Other</option>
                </select></p>
                <p><label>Urgency</label>
                <select onChange={this.setUrgency} type="urgency">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select></p>
                <p><label>Read?</label>
                <select onChange={this.setRead} type="read">
                    <option>Unread</option>
                    <option>Read</option>
                </select></p>
                <button onClick={()=>{this.props.submitNewArticle(this.state)}}type="submit">Add Article</button>

            </div>
        )
    }
}
