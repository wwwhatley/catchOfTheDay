import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    //update our state
    const fishes = {....this.state.fishes};
    //add in our new fishes
    const timestamp = Date.now();
    fishes['fish-@[]']
    //set state
  }
  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App;
