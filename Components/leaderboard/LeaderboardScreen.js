import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

export default class LeaderboardScreen extends Component {
    static navigationOptions = {
        title: 'Leaderboard',
    };

    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    name: 'Amy Farha',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    subtitle: 'Vice President'
                },
                {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                }
            ],
        };
    }

    async componentDidMount() { }

    render() {
        const { navigate } = this.props.navigation;
        const { list } = this.state;
        return (
            <View
                style={{
                    margin: 10,
                    marginTop: 20,
                }}
            >
                <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 15 }}>Top Donors</Text>
                {
                    list.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: l.avatar_url } }}
                            title={l.name}
                            subtitle={l.subtitle}
                            rightElement={
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Icon
                                        name='star'
                                        type='antdesign'
                                        size={14}
                                    />
                                    <Text style={{ marginLeft: 5, }}>55</Text>
                                </View>
                            }
                            containerStyle={{
                                borderRadius: 5,
                                backgroundColor: '#eee',
                                margin: 5
                            }}
                            subtitleStyle={{
                                fontSize: 12,
                                color: '#888',
                            }}
                        />
                    ))
                }

                <Text style={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>Your score</Text>
                <ListItem
                    leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' } }}
                    title={'Jane Doe'}
                    subtitle={'Project Manager'}
                    rightElement={
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Icon
                                name='star'
                                type='antdesign'
                                size={14}
                            />
                            <Text style={{ marginLeft: 5, }}>55</Text>
                        </View>
                    }
                    containerStyle={{
                        borderRadius: 5,
                        backgroundColor: '#eee',
                        margin: 5
                    }}
                    subtitleStyle={{
                        fontSize: 12,
                        color: '#888',
                    }}
                />
                <Text style={{ textAlign: 'center', marginTop: 20 }}>140 up from last month!</Text>
            </View>
        );
    }
}
