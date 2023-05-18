import React, { Component } from 'react'
import FilmsPresentation from './FilmsPresentation';
import { films } from '../shared/ListofFilms';

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            films: films
        };
    }
  render() {
    return (
      <FilmsPresentation films={this.state.films}/>
    )
  }
}


