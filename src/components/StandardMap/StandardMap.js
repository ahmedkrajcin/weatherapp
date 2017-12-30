import React, { Component } from 'react';
import firebase from 'firebase';
import {Map,InfoWindow, Marker,GoogleApiWrapper} from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const api='AIzaSyBaex8bjZOkeNlC8byP6OLfLP_2LNnYi38';


export class StandardMap extends Component {
  constructor (props) {
		super(props);
		
		
    
  }

  static defaultProps = {
    center: {lat: 0, lng: 0},
    zoom: 10,
    
  }
	
    
      render() {
        
        
        const apiKey='AIzaSyBaex8bjZOkeNlC8byP6OLfLP_2LNnYi38';
        const zoom=11;
        const style = {
          width: '40%',
          height: '40%'
        }
      
       
        console.log(this.props.lat);
        return (
           <div className="google-map">
            <Map
            //apiKey={this.props.apiKey}
            style={style}
            google={this.props.google}
            initialCenter={{lat:this.props.lat , lng: this.props.lon}}
              defaultZoom={ zoom }>
              <Marker
    name={'Dolores park'}
    position={this.props.center} />
  <Marker />
            </Map>
           </div>
          
        );
      }
};
export default GoogleApiWrapper({
  apiKey: (api)
})(StandardMap)
