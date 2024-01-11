import React, { Component } from 'react';
import { urlApi } from '../data/urlApi';

export default class Galleria2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [], 
    };
  }

  componentDidMount() {
    fetch(urlApi + 's=spider+man', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ images: json.Search || [] }, () => {
          console.log('Images after setState:', this.state.images);
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { images } = this.state;
    const firstSixImages = images.slice(0, 6); // Prende solo le prime 6 immagini
  
    return (
      <>
        <h4 className="text-light ms-4">Spider-Man - l'eroe ragno </h4>
        <div className="mx-2 row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
          {firstSixImages.map((image, index) => (
            <div key={index} className="col mb-2 px-1">
              <img style={{height: '18em'}} className="img-fluid" src={image.Poster} alt={`movie picture ${index + 1}`} />
            </div>
          ))}
        </div>
      </>
    );
  }  
}
