import React, { Component } from 'react';
import firebase from 'firebase';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const api = 'AIzaSyBaex8bjZOkeNlC8byP6OLfLP_2LNnYi38';


export class StandardMap extends Component {
  constructor(props) {
    super(props);



  }

  static defaultProps = {
    center: { lat: 0, lng: 0 },
    zoom: 10,

  }
  mapClicked(e) {
   console.log(event.latLng.lat());
  

  }

  render() {


    const apiKey = 'AIzaSyBaex8bjZOkeNlC8byP6OLfLP_2LNnYi38';
    const zoom = 10;
    const style = {
      width: '100%',
      height: '60%',
      position: 'relative'

    }


    console.log(this.props.lat);
    console.log(this.props.lon);



    return (
      <div className="container">
        <div className="google-map" >

          <Map
            //apiKey={this.props.apiKey}
            //style={style}
            className="super-map-wrapper"
            google={this.props.google}
            center={{ lat: this.props.lat, lng: this.props.lon }}
            onClick={this.mapClicked.bind()}
            zoom={zoom}>
            <Marker
              position={{ lat: this.props.lat, lng: this.props.lon }} />
            <Marker />
          </Map>
        </div>
      </div>



    );
  }
};
export default GoogleApiWrapper({
  apiKey: (api)
})(StandardMap)