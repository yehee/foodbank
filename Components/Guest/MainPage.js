import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// import * as Permissions from 'expo-permissions';
// import * as Location from 'expo-location';

const latitudeDelta = longitudeDelta = 0.5;
export default class MapScreen extends Component {
  static navigationOptions = {
    title: 'Location',
    headerStyle: {
      backgroundColor: '#F87A00',
      borderBottomWidth: 0,
  }
  };

  

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 49.262140,
        longitude: -123.086770,
        latitudeDelta,
        longitudeDelta,
      },
      markers: [
        {
            coordinates: {
                latitude: 49.268510,
                longitude: -123.249560,
            },
            title: 'AMS FoodBank',
            description: 'EXTREME',
        },
        {
            coordinates: {
                latitude: 49.249561,
                longitude: -122.922607,
            },
            title: 'Greater Vancouver FoodBank',
            description: 'EXTREME',
        },
        {
            coordinates: {
                latitude: 49.285660,
                longitude: -123.133700,
            },
            title: 'Gordon Neighborhood House',
            description: 'MODERATE',
        },
        {
            coordinates: {
                latitude: 49.281510,
                longitude: -123.092380,
            },
            title: 'Sheway',
            description: 'MODERATE',
        },
        {
            coordinates: {
                latitude: 49.262140,
                longitude: -123.086770,
            },
            title: 'Mount Pleasant Neighborhood House',
            description: 'MODERATE',
        }
    ]
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { region, markers } = this.state;
    return (
      <View>
        <Text style={styles.title}>PICK YOUR FOOD BANK</Text>
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
              onPress={() => navigate('Inventory', {location: marker.coordinates})}
            // onPress={() => this._handleEvent(marker.id)}
            />);
        })}
      </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    
    marginTop: 150,
    padding: 0,
    
    ...StyleSheet.absoluteFillObject,
    width: 500,
    height: 600,
  },
  title: {
    marginBottom: 150,
    paddingTop: 60,
    paddingBottom: 60,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: '#36353A',
    color: '#F87A00',
    textAlign: 'center',
    justifyContent: 'center',
  }

});
