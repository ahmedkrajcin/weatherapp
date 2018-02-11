import React, { Component } from 'react';
//import firebase from 'firebase';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
const api = 'AIzaSyBaex8bjZOkeNlC8byP6OLfLP_2LNnYi38';


export class StandardMap extends Component {
  constructor(props) {
    super(props);
    
    this.onMarkerMoved=this.onMarkerMoved.bind(this);
    this.resetWeather=this.resetWeather.bind(this);

  }


 
  onMarkerMoved(props, marker, e) {
    const position = marker.getPosition()
    const lat = position.lat()
    const lng = position.lng()
   console.log(lat)
    this.resetWeather(lat,lng)
    }

    resetWeather = (lat, lng)=>{
     this.props.updateWeather(lat,lng);

   };
   
 
    
   
    
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
      <div className="google-map" >
        <Map
          //apiKey={this.props.apiKey}
          //style={style}
          className="super-map-wrapper"
          google={this.props.google}
          center={{ lat: this.props.lat, lng: this.props.lon }}
          zoom={zoom}
         
          
           
        
          
          >
          
          <Marker
             position={{ lat: this.props.lat, lng: this.props.lon }}
            //position={this.props.center}
            //name={"Drag the marker to change a location"}
            title={'Drag the marker to change a location'}
            draggable={true}
            onDragend={this.onMarkerMoved.bind(this)}
           
          >
          </Marker>

          
        </Map>
      </div>
    );
  }
};
export default GoogleApiWrapper({
  apiKey: (api)
})(StandardMap)
