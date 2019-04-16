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

    render(){
        return(
            <div className="list">
              <h3>NYT Most Popular</h3>
                {this.nytCards()}
            </div>
        )
    }
}
