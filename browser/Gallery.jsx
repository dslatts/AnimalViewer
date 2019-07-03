import React, {Component} from 'react';
import Animal from './Animal.jsx';
import axios from 'axios';

class Gallery extends Component{
  constructor(props){
    super(props);
    this.state = {animals: []};
    this.fetchAnimals = this.fetchAnimals.bind(this);
  }

  fetchAnimals(){
    axios.get('/api/animals')
      .then(res => res.data)
      .then(animals => {
        this.setState({ animals });
      });
  }

  componentDidMount(){
    this.fetchAnimals();
  }

  render(){
    return (
      <div className="gallery">
        {this.state.animals.map((animal) => <Animal name={animal.name} image={animal.image}  type={animal.type} key={animal.id} />)}
      </div>
    );
  }
}

export default Gallery;

