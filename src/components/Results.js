import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';

class Results extends Component {
  showImages = () => {
    const images = this.props.images;

    if (images.length) {
      console.log(images);

      return (
        <React.Fragment>
          <div className="col-12 p-5 row">
            {images.map((img) => (
              <Image key={img.id} img={img} />
            ))}
          </div>
          <Pagination
            prevPage={this.props.prevPage}
            nextPage={this.props.nextPage}
          />
        </React.Fragment>
      );
    }
  };

  render() {
    return <React.Fragment>{this.showImages()}</React.Fragment>;
  }
}

export default Results;
