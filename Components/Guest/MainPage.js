import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import * as Permissions from 'expo-permissions';
// import * as Location from 'expo-location';

const latitudeDelta = longitudeDelta = 20;
export default class MapScreen extends Component {
    
  static navigationOptions = {
    title: 'Find a Location'
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta,
        longitudeDelta,
      },
      markers: locations
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const { region, markers } = this.state;
    return (
      <MapView
        style={styles.map}
        region={region}
        showsUserLocation={true}
        onRegionChange={() => this.onRegionChange}
      >
        {markers.map((marker, key) => {
          const { coordinates, title, description } = marker;
          return (
            <Marker
              key={key}
              coordinate={coordinates}
              title={title}
              description={description}
            // onPress={() => this._handleEvent(marker.id)}
            />);
        })}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
