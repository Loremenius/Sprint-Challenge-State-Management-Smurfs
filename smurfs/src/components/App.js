import React, { Component } from "react";
import "./App.css";
import { connect, useSelector } from "react-redux"
import SmurfCard from "./SmurfCard"
import { fetchSmurfs } from "../actions"
import SmurfForm from "./SmurfForm";
class App extends Component {

  render() {
    console.log(this.props.smurfList);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <button onClick={this.props.fetchSmurfs}>Find Smurfs</button>
        <SmurfForm/>
        {this.props.smurfList.map((item)=>(
          <SmurfCard {...item} key={item.id}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    smurfList: state.smurfList
  }
}
export default connect(mapStateToProps,{fetchSmurfs})(App);
