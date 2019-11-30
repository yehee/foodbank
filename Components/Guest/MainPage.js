import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { locations } from '../../data/locations';

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

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status === 'granted') {
      const location = await Location.getCurrentPositionAsync({});

      this.setState({
        region: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          latitudeDelta,
          longitudeDelta,
        },
      });
    }
  };

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
