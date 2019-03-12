import React from 'react';
import Img from 'gatsby-image';

import Masonry from 'react-masonry-component';

import './showcase.sass'

const Gallery = ({ elements }) => (
    <Masonry className='showcase'>
        {elements.map(element => (
            <div key={element.node.id} className="showcase__item">
                <figure className="card">
                    {/* <Link to={`/projecten/${element.node.slug}`} className="card__image"> */}
                    <a href={element.node.projectUrl} target="_blank">
                        <Img fluid={element.node.highlightImage.fluid} />
                    </a>
                    {/* </Link> */}

                    <figcaption className="card__caption">
                        <h6 className="card__title">
                            {/* <Link to={`/projecten/${element.node.slug}`}> */}
                            <a href={element.node.projectUrl} target="_blank">
                                {element.node.text.text}
                            </a>
                            {/* </Link> */}
                        </h6>
                        <div className="card__description">
                            <p>{element.node.slug}</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        ))}
    </Masonry>
)

export default Gallery;