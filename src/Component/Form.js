import React, {Component} from 'react'

export default class Form extends Component {

    state = {
        category: "",
        url: "",
        author: "",
        title: "",
        urgency: "medium",
        read: "unread",
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
            <div>
                <form onChange={this.textChange}>
                    <input type="text" name="url" placeholder="Article Link"/>
                    <input type="text" name="title" placeholder="Article Title"/>
                    <input type="text" name="author" placeholder="Author"/>
                </form>
                <label>Category</label>
                <select onChange={this.setCategory} type="category">
                    <option>select</option>
                    <option>Tech</option>
                    <option>Lifestyle</option>
                    <option>Health</option>
                    <option>Philosophy</option>
                    <option>Travel</option>
                </select>
                <label>Urgency</label>
                <select onChange={this.setUrgency} type="urgency">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
                <select onChange={this.setRead} type="read">
                    <option>Unread</option>
                    <option>Read</option>
                </select>
                <button onClick={()=>{this.props.submitNewArticle(this.state)}}type="submit">Add Article</button>

            </div>
        )
    }
}
