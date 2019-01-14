import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Components
import Header from './components/header';
import NewsList from './components/newsList'; 

//Data
import JSON from './db.json';

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            news: JSON,
            filtered_json: JSON
        }
    }

    filterNews(keywords){
        //console.log(">>>>", keywords)
        let filtered = this.state.news.filter((item)=>{
            return item.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1
        })
        this.setState({filtered_json:filtered})
    }

    render(){
        return(
            <div>
                <Header newsSearch={(data)=>{this.filterNews(data)}}/>
                <NewsList newsData={this.state.filtered_json}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))


/*
const App = () => {
    return(
        <div>
            <Header/>
            <h1> Welcome To React</h1>
        </div>
    )
}
*/