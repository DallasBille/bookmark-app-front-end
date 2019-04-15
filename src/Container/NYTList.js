import React from 'react'
import NYTCard from "../Component/NYTCard"
export default class NYTList extends React.Component {

    state = {
        popular: []
    }
    componentDidMount(){
        fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=K3anmAGwNUiIoSxetQ83c9wNjELsJHmb`)
        .then(res => res.json())
        .then(articles => {
            this.setState({
                popular: articles.results
            })
        })
    }

    nytCards = () => {
        return this.state.popular.map(article => {
            return <NYTCard article={article}/>
        })
    }
    // <NYTCard nyt={this.state.popular}/>
    render(){
        return(
            <div className="list">
                {this.nytCards()}
            </div>
        )
    }
}
