import React, {Component} from 'react'
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import logo from '../src/logo.png'
import Button  from 'react-bootstrap/Button';
import {EmptyAlert} from './components/empty-alert/empty-alert.component';
import FA from 'react-fontawesome'
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      characters:[],
      page: 1,
      searchField : ''
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

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
  }

  Greeting = (props) => {
    if (props.filteredCharacters === "") {
      return <EmptyAlert />;
    }
  }

  render(){
    const { characters, searchField } = this.state;
    const filteredCharacters = characters.filter(character => 
      character.name.toLowerCase().includes(searchField.toLowerCase())
    )

    let alert;
    if (!filteredCharacters.length) {
      alert = <EmptyAlert className="alert"/>;
    } 

    return(
      <div className="App">
      <div  className="logo-container">
      <img className="logo-image" alt="logo" src={logo}></img>
      </div>

      <Button className="button" onClick={() =>
          {if(this.state.page !== 1)
            {this.setState({ page: this.state.page - 1 })}}
      }><FA name="chevron-circle-left"></FA></Button>
        
      <SearchBox 
        placeholder="Search Characters" 
        handleChange= {this.handleChange}
      />

      <Button className="button" onClick={() =>
          this.setState({ page: this.state.page + 1 })
      }><FA name="chevron-circle-right"></FA></Button>

      <div>{alert}</div>

      <CardList characters={filteredCharacters}/>
      </div>
    );
  }
}

export default App;
