import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const MarkersList = props => {
  const { locations, ...markerProps } = props;
  return (
    <span>
      {locations.map((location, i) => {
        return (
          <Marker
            key={i}
            {...markerProps}
            position={{ lat: location.lat(), lng: location.lng() }}
          />
        );
      })}
    </span>
  );
};
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      locations: [],
      isMapClicked: false
    };

    this.handleMapClick = this.handleMapClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log("marker");
  }

  handleMapClick = (ref, map, ev) => {
    if (!this.state.isMapClicked) {
      const location = ev.latLng;
      this.setState(prevState => ({
        locations: [...prevState.locations, location],
        isMapClicked: true
      }));
      map.panTo(location);
    }
  };

  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    let showMarker = this.props.showMarker ? (
      <Marker
        onClick={this.onMarkerClick}
        position={{ lat: this.props.latitud, lng: this.props.longitud }}
        name={this.props.eventName}
      />
    ) : (
      <></>
    );

    return (
      <Map
        style={{
          width: "100%",
          height: "300px"
        }}
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: this.props.latitud,
          lng: this.props.longitud
        }}
        onClick={this.handleMapClick}
      >
        {showMarker}
        <MarkersList locations={this.state.locations} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCkbkTeCZcHCg2jIhXw7ERn251YtQSaWiM",
  v: "3"
})(MapContainer);
