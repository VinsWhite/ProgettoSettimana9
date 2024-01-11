import React, { Component } from 'react';
import { urlApi } from '../data/urlApi';
import { Spinner } from 'react-bootstrap';

export default class Galleria1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [], 
      isLoading: false
    };
  }

  componentDidMount() {
    fetch(urlApi + 's=harry%20potter', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({ images: json.Search || [] }, () => {
          console.log('Immagini dopo il setState:', this.state.images);
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { images } = this.state;
    const firstSixImages = images.slice(0, 6); // Prende solo le prime 6 immagini
  
    return (
      <>
      {this.state.isLoading && <Spinner animation="border" />}
        <h4 className="text-light ms-4">Harry Potter - i più acclamati dalla critica </h4>
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
