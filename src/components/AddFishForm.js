import React from 'react'


class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log('Gonna make some fish!')
    const fish = {
       name: this.name.value,
       price: this.price.value,
       status: this.status.value,
       desc: this.desc.value,
       image: this.image.value
     }
  }

  render() {
    return(
      <form className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish name" />
        <input ref={(input) => this.price = input}  type="text" placeholder="Fish price" />
        <select ref={(input) => this.status = input} >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} type="text" placeholder="Fish desc" />
        <input ref={(input) => this.image = input} type="text" placeholder="Fish image" />
        <button type="submit">+ Add Item</button>
      </form>

    )
  }
}

export default AddFishForm;
