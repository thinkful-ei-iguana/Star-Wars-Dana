import React, { Component } from 'react';
import Results from './Results';
//https://swapi.co/people/?search=

class SWAPISearch extends Component {
  constructor(props) {
    super(props)
    this.state={results:[]}
  }
  base='https://cors-anywhere.herokuapp.com/swapi.co/api/'
  peepSearch='people/?search='
  searchAPI = (term) => {
    fetch(this.base+this.peepSearch+term)//, {mode: 'no-cors'}
      .then(rsp=>{
        if(rsp.ok)return rsp.json()
        else throw new Error(rsp)
      })
      .then(json=> this.setState({results:json.results}))//
      .catch(error=> this.setState({results:`there has been an issue:  ${error.message} `}))
  }
  render() {
    return (

      <main className="SWAPI">
        <h1>Star Wars Search</h1>
        <p id='explanation'>Just search for names to search for people</p>
        <form onSubmit={(e)=> {
          e.preventDefault()
          this.searchAPI(e.target.searchbox.value)
          }}>
          <label htmlFor='searchbox'>Search for People: </label>
          <input type='text' id='searchbox'placeholder='Skywalker'></input>
          <button type='submit'>Search!</button>
        </form>
        <div className="search-results">
          <Results results={this.state.results}></Results>
        </div>
      </main>
    );
  }
}

export default SWAPISearch;