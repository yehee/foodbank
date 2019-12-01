import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        headerStyle: {
            borderBottomWidth: 0,
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: 'Food Bank Victoria',
                    avatar_url: require('./assets/img1.jpg'),
                    subtitle: 'Victoria, BC'
                },
                {
                    name: 'Food Bank Victoria',
                    avatar_url: require('./assets/img1.jpg'),
                    subtitle: 'Victoria, BC'
                },
                {
                    name: 'Food Bank Victoria',
                    avatar_url: require('./assets/img1.jpg'),
                    subtitle: 'Victoria, BC'
                },
                {
                    name: 'Food Bank Victoria',
                    avatar_url: require('./assets/img1.jpg'),
                    subtitle: 'Victoria, BC'
                },
                {
                    name: 'Food Bank Victoria',
                    avatar_url: require('./assets/img1.jpg'),
                    subtitle: 'Victoria, BC'
                },
            ],
        }
    }

    render() {
        return (
            <ScrollView>
                <View
                    style={{
                        height: 200,
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
                        }}
                    >
                        <Icon name='map-marker' type='font-awesome' size={14} />
                        <Text style={{ textAlign: 'center', marginLeft: 5, }}>Vancouver, BC</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
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

                <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 15 }}>Your Local Food Bank</Text>
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

                <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 15 }}>Top 3 Urgent Needs</Text>
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
            </ScrollView>
        );
    }
}
