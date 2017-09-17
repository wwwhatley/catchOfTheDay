import React from 'react';
import {getFunName} from '../helpers';



class StorePicker extends React.Component {
  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }


  goToStore(event) {
    event.preventDefault();
    console.log('You changed the URL');
      // First grab text from the box
    const storeId = this.storeInput.value;
    console.log('Going to ${storeId}');
      // Second we're going to transition from / to /store/:storeID
    this.context.router.transitionTo('/store/');
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please select a store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit"> Visit Store </button>
      </form>
    )
  }
}

StorePicker.contextTypes ={
  router: React.PropTypes.object
}


export default StorePicker;
