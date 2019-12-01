import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { ScrollView, View, Text, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const DEFAULT_FONT_COLOR = '#555555'
const styles = StyleSheet.create({
    fontTitle: {
      textTransform: 'uppercase',
      fontSize: 28,
      color: '#008391',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      textTransform: 'uppercase',
      fontSize: 18,
      color: '#008391',
      fontWeight: 'bold',
      marginBottom: 10
    },
    info: {
        fontSize: 18,
        color: '#008391',
        fontWeight: 'bold',
        marginBottom: 10
    },
    label: {
      fontSize: 16,
      color: DEFAULT_FONT_COLOR,
      fontWeight: 'bold',
      marginTop: 5,
    },
    image: {
        paddingRight: 10
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 20
    },
    inventoryDetails: {
        paddingLeft: 30
    },
    inventoryItem: {
        color: DEFAULT_FONT_COLOR,
        marginBottom: 2
    },
    container: {
      flex: 1,
      height: 50,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 30
    },
    addressDetails: {
        marginBottom: 10
    },
    addressFont: {
        color: DEFAULT_FONT_COLOR,
        fontSize: 18,
        marginBottom: 3
    },
    map: {
      width: '100%',
      height: '50%',
      marginBottom: 30
    },
  });

const DEFAULT_FOODBANK = {
    foodBank: {
        name: "Greater Vancouver Food Bank Society",
        address: "1150 RAYMUR AVE, Vancouver",
        phone: "(604) 876-3601",
        region: {
            latitude: 49.249460,
            longitude: -122.922036,
            latitudeDelta: 0.015,
            longitudeDelta: 0.015,
        },
        coordinates: {
            latitude: 49.249460,
            longitude: -122.922036,
        }
    }
}

export default class InventoryScreen extends Component {
    static navigationOptions = {
        title: 'Inventory',
    };
    
    constructor(props) {
        super(props);

        this.state = {
            inventory: [
                { name: "Fish", count: 15, min: 20, category: "canned protein"},
                { name: "Beans", count: 3, min: 15, category: "canned protein"},
                { name: "Chicken", count: 5, min: 10, category: "canned protein"},
                { name: "Cans", count: 40, min: 30, category: "baby formula"},
            ],
            foodBank: {
                name: "Greater Vancouver Food Bank Society",
                address: "1150 RAYMUR AVE, Vancouver",
                phone: "(604) 876-3601",
                region: {
                    latitude: 49.249460,
                    longitude: -122.922036,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.015,
                },
                coordinates: {
                    latitude: 49.249460,
                    longitude: -122.922036,
                }
            }
        };
    }

    async componentDidMount() {
        const { navigation } = this.props;
        const foodBank = navigation.getParam('foodBank', DEFAULT_FOODBANK.foodBank);
        this.setState({
            foodBank: foodBank
        })
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.fontTitle}>YOUR FOOD BANK</Text>
                <View style={styles.addressDetails}>
                    <Text style={styles.addressFont}>{this.state.foodBank.name}</Text>
                    <Text style={styles.addressFont}>Phone: {this.state.foodBank.phone}</Text>
                    <Text style={styles.addressFont}>{this.state.foodBank.address}</Text>
                </View>
                <MapView
                    style={styles.map}
                    zoomEnabled={true}
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
                <Text style={styles.subtitle}>INVENTORY</Text>
                <View style={styles.listItem}>
                    <View style={styles.image}>
                        <Image
                            style={styles.image}
                            source={require('../../assets/canned-protein.png')}
                        />
                    </View>
                    <View styles={styles.inventoryDetails}>
                        <Text style={styles.label}>Canned Protein</Text>
                        {   
                            this.state.inventory.filter(item => item.category == "canned protein").map((item) => {
                                return <Text key={item.name} style={styles.inventoryItem}>{item.name + ": " + item.count + "/" + item.min}</Text>
                            })
                        }
                    </View>
                </View>
                <View style={styles.listItem}>
                    <View style={styles.image}>
                        <Image
                            source={require('../../assets/baby-formula.png')}
                        />
                    </View>
                    <View styles={styles.inventoryDetails}>
                        <Text style={styles.label}>Baby Formula</Text>
                        {
                            this.state.inventory.filter(item => item.category == "baby formula").map((item) => {
                                return <Text key={item.name} style={styles.inventoryItem}>{item.name + ": " + item.count + "/" + item.min}</Text>
                            })
                        }
                    </View>
                </View>
                
            </ScrollView>
        );
    }
}
