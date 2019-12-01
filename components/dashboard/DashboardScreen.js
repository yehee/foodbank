import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon, Card, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        headerStyle: {
            borderBottomWidth: 0,
        },
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    height: '100%'
                }}
            >
                <View
                    style={{
                        height: 200,
                        marginTop: 50,
                    }}
                >
                    <Icon
                        name='user'
                        type='feather'
                        size={48}
                        containerStyle={{
                            marginTop: 50,
                            marginBottom: 25
                        }}
                    />
                    <Text style={{ textAlign: 'center' }}>alice-0-kim</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginVertical: 10,
                        }}
                    >
                        <Icon name='map-marker' type='font-awesome' size={14} />
                        <Text style={{ textAlign: 'center', marginLeft: 5, marginRight: 20 }}>Vancouver, BC</Text>
                        <Icon
                            name='users'
                            type='feather'
                            size={14}
                        />
                        <Text style={{ textAlign: 'center', marginLeft: 5, marginRight: 10 }}>22</Text>
                        <Icon
                            name='star'
                            type='antdesign'
                            size={14}
                        />
                        <Text style={{ textAlign: 'center', marginLeft: 5, }}>55</Text>
                    </View>
                </View>

                <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 15, color: '#008391', fontSize: 16 }}>Your Local Food Bank</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 50,
                    }}
                >
                    <Image
                        source={require('./assets/logo-greater-vancouver-food-bank.png')}
                        style={{
                            height: 100,
                            width: 100,
                            resizeMode: 'contain',
                            display: 'flex',
                            alignSelf: 'center',
                        }}
                    />
                    <View
                        style={{
                            marginLeft: 25,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 30
                            }}
                        >
                            <Icon
                                name='phone'
                                type='font-awesome'
                                size={14}
                                accessibilityLabel={'Contact information'}
                                accessible
                            />
                            <Text style={{ marginLeft: 5, }}>604-876-3601</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                            }}
                        >
                            <Icon
                                name='map-marker'
                                type='font-awesome'
                                size={14}
                                accessibilityLabel={'Location'}
                                accessible
                            />
                            <Text style={{ marginLeft: 5, }}>1150 Raymur Ave, Vancouver</Text>
                        </View>
                    </View>
                </View>
                <ListItem
                    title={'MORE INFORMATION'}
                    rightIcon={{ name: 'right', type: 'antdesign', size: 14 }}
                    containerStyle={{
                        margin: 5,
                        marginHorizontal: 10,
                        borderWidth: 1,
                        borderRadius: 5,
                    }}
                    onPress={() => navigate('Inventory', {
                        foodbank: {
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
                    })}
                />

                <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 15, marginTop: 20, marginBottom: 15, color: '#008391', fontSize: 16 }}>Top 3 Urgent Needs</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                    }}
                >
                    <View>
                        <Image
                            source={require('../../assets/canned-fruit.png')}
                            style={{ marginHorizontal: 30, width: 50, height: 50 }}
                            accessibilityLabel={'Canned Fruit'}
                            accessible
                        />
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>Canned Fruit</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../assets/baby-formula.png')}
                            style={{ marginHorizontal: 30, width: 50, height: 50 }}
                            accessibilityLabel={'Baby Formula'}
                            accessible
                        />
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>Baby Formula</Text>
                    </View>
                    <View>
                        <Image
                            source={require('../../assets/canned-protein.png')}
                            style={{ marginHorizontal: 30, width: 50, height: 50 }}
                            accessibilityLabel={'Canned Protein'}
                            accessible
                        />
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>Canned Protein</Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 0,
                        backgroundColor: 'coral',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        width: '100%',
                        padding: 10

                    }}
                >
                    <Icon name='home' type='material' onPress={() => navigate('Dashboard')} />
                    <Icon name='price-ribbon' type='entypo' onPress={() => navigate('Leaderboard')} />
                    <Icon name='user' type='feather' onPress={() => navigate('Profile')} />
                </View>
            </View>
        );
    }
}
