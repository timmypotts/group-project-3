import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React from 'react'
 

export class MapContainer extends React.Component {
    state = {}

    componentDidMount() {
        console.log('mounted')
         if (window.navigator.geolocation) {
             console.log('setting coords')
             window.navigator.geolocation.getCurrentPosition(c => this.setState({x: c.coords.latitude, y: c.coords.longitude}))
            }
        }

    render() {

        const {x, y} = this.state
        const style = {
          width: '100%',
          height: '30%',
      }
      const pos1 = {lat: 39.685280, lng: -105.016040}
      const pos2 = {lat: 39.8582746, lng:-104.9572632}
      const pos3 = {lat: 39.6919655, lng:-104.9418203}
      const pos4 = {lat: 39.7811828, lng:-104.8485205}

        return (
            <div>
            {Object.keys(this.state).length !== 0 ?
         <Map
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: x,
            lng: y
          }}
          zoom={10}
        >
          
          <Marker position={pos1} />
          <Marker position={pos2} />
          <Marker position={pos3} />
          <Marker position={pos4} />
          </Map> :
          <></>
            }
            </div>
        )
    }
}

export default GoogleApiWrapper({apiKey: "AIzaSyCkpbSBjH7S4fh4eBXpBSMRpbJFWs6_HvM"})(MapContainer)