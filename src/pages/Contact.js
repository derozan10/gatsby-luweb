import React from 'react'
import Container from '../layouts/Container'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import MyGoogleMap from '../components/MyGoogleMap'


const Contact = () => (
    <div>
        <Navbar color={'inverse'} />
        <Container>
            <div>
                <h1>Contacteer ons</h1>
            </div>
            <MyGoogleMap
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </Container>
        <Footer />
    </div>

)

export default Contact
