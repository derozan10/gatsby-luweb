import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'gatsby';

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends Component {
    render() {
        const childElements = this.props.elements.map(element => (
            <a href={element.projectUrl} target="_blank" rel="noopener noreferrer">
                <li className="image-element-class">
                    <img src={element.highlightImage.fluid.src} />
                </li>
            </a>
        ))

        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}

export default Gallery;