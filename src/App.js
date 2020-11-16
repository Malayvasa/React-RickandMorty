import React, {Component} from 'react'
import {CardList} from './components/card-list/card-list.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      characters:[],
      page: 1,
    };
  }
  componentDidMount(){
    let url = 'https://rickandmortyapi.com/api/character/?page='+ this.state.page;
    fetch(url)
    .then(response => response.json())
    .then(character => {this.setState({characters:character.results})})
  }

  componentDidUpdate(){
    let url = 'https://rickandmortyapi.com/api/character/?page='+ this.state.page;
    fetch(url)
    .then(response => response.json())
    .then(character => {this.setState({characters:character.results})})
  }

  render(){
    return(
      <div className="App">
        <CardList characters={this.state.characters}/>

        <button onClick={() =>
          {if(this.state.page !== 1)
            {this.setState({ page: this.state.page - 1 })}}
        }>Previous</button>
        
        <button onClick={() =>
          this.setState({ page: this.state.page + 1 })
        }>Next</button>
      </div>
    );
  }
}

export default App;
