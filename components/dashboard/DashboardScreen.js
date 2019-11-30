import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
        headerStyle: {
            backgroundColor: '#F87A00',
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
        const { navigate } = this.props.navigation;
        const { list } = this.state;
        return (
            <ScrollView>
                <View
                    style={{
                        // backgroundColor: '#F87A00',
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
                        <Icon name='map-pin' type='font-awesome' size={14} />
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

                <Text style={{ textTransform: 'uppercase' }}>Local Food Bank Near You</Text>
                <View>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: l.avatar_url }}
                                title={l.name}
                                subtitle={l.subtitle}
                                subtitleStyle={{
                                    fontSize: 12,
                                    color: '#666'
                                }}
                            />
                        ))
                    }
                </View>
                <Text style={{ textTransform: 'uppercase' }}>Inventory Summary</Text>
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    {/* <Icon name='truck' type='font-awesome' />
                    <Icon name='child' type='font-awesome' />
                    <Icon name='bed' type='font-awesome' /> */}
                </View>
            </ScrollView>
        );
    }
}
