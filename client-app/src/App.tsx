import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import { cars } from "./demo";
import CarItem from "./CarItem";
import { render } from "@testing-library/react";
import axios from "axios";

class App extends Component {
  state = {
    values: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/values")
    .then((response)=>{
      console.log(response);
      this.setState({
        values: response.data
      });
    })
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.state.values.map((values: any) => (
            <li key={values.id}>{values.name}</li>
          ))}

          {/* {
            cars.map((car)=>(
              <CarItem car={car}/>
            ))
          } */}
        </ul>
      </div>
    );
  }
}

export default App;
