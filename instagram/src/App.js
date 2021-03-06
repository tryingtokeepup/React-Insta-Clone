import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from './components/SearchBar/SearchBar';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }

  //lets just get the like icon

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  
  render() {
    return (
      <div className="App">

        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default Authenticate(App);
