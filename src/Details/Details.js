
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import getTechnologies from '../technologies-get';
import './Details.css';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      technology: {}
    };
  }

  componentDidMount() {
    // Get URL suffix, see app.js for route
    let technologyId = this.props.match.params.technologyId;
    // The find() method returns the value of the first element
    // in an array that pass a test (provided as a function).
    let technology = getTechnologies()
      .find((technology) => technology.id === technologyId);
    this.setState({
      technology: technology
    });
  }

  render() {
    if (this.state.technology === undefined) {
      return <Redirect to='/not-found' />;
    } else {
      return (
        <div className='Details'>
          <h1>{this.state.technology.name}</h1>
          <div className='container'>
            <div>{this.state.technology.details}</div>
            <img
              src={this.state.technology.logo}
              alt={this.state.technology.name}
            />
          </div>
          <Link to='/'>Back to home page</Link>
        </div>
      );
    }
  }
}
