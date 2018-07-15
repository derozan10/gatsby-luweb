import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Logo from '../img/luweb-logo-blue.svg';

const LuwebMapLogo = () => <img src={Logo} style={{ width: '100px', height: 'auto' }} alt="luweb logo" />

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.210415,
      lng: 4.448493
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '80vw', margin: '100px auto', borderRadius: '10px', boxShadow: '0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA6DFuO6HH-7kYJSt3msuSc02fb_DtbN0E' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <LuwebMapLogo
            lat={51.210415}
            lng={4.448493}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
