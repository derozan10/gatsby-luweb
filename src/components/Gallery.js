import React, { Component } from 'react';
import Img from 'gatsby-image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

class GalleryComposition extends Component {
  render() {
    const { photos } = this.props;
    return (
      <>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 800: 4 }}>
          <Masonry gutter="1rem">
            {photos.map((photo, i) => (
              <a key={i} href={photo.fluid.srcSet} onClick={e => this.openLightbox(i, e)}>
                <Img fluid={photo.fluid} />
              </a>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </>
    );
  }
}

export default GalleryComposition;
