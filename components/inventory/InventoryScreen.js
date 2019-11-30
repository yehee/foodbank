import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { View, Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class InventoryScreen extends Component {
    static navigationOptions = {
        title: 'Inventory',
    };

    constructor(props) {
        super(props);

        this.state = {
            inventory: [
                { name: "Cereal", count: 5, min: 10},
                { name: "Oatmeal", count: 3, min: 15},
                { name: "Toilet Paper", count: 15, min: 20},
                { name: "Pasta", count: 16, min: 30},
                { name: "Canned Beans", count: 20, min: 10},
                { name: "Milk", count: 7, min: 6},
                { name: "Diapers", count: 15, min: 60},
                { name: "Canned Tuna", count: 15, min: 25},
                { name: "Bread", count: 10, min: 7},
                { name: "Bags of Potatoes", count: 30, min: 15},
                { name: "Baby Food", count: 4, min: 3}
            ],
            foodBank: {
                name: "Greater Vancouver Food Bank",
                address: "8345 Winston St, Burnaby, BC V54A 2H3",
                phone: "(604) 876-3601",
                region: {
                    latitude: 49.249460,
                    longitude: -122.922036,
                    latitudeDelta: 20,
                    longitudeDelta: 20,
                },
                coordinates: {
                    latitude: 49.249460,
                    longitude: -122.922036,
                }
            }
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Inventory</Text>
                {
                    this.state.inventory.map((item) => {
                        return <Text>{item.name + "  " + item.count + "/" + item.min}</Text>
                    })
                }
                <MapView
                    width={100}
                    height={100}
                    region={this.state.foodBank.region}
                    showsUserLocation={true}
                    onRegionChange={() => this.onRegionChange}
                >
                    <Marker
                        key={"FoodBank"}
                        coordinate={this.state.foodBank.coordinates}
                        // title={title}
                        // description={description}
                    />
                </MapView>
                <View>
                    <Text>{this.state.foodBank.name}</Text>
                    <Text>Address: {this.state.foodBank.address}</Text>
                    <Text>Phone: {this.state.foodBank.phone}</Text>
                </View>
            </View>
        );
    }
}
