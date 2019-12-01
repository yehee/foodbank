import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class profilePage extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    height: '100%'
                }}
            >
                <Text style={styles.title}>Roy Hwang</Text>
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

const styles = StyleSheet.create({
    title: {
        fontSize: 55,
        fontWeight: 'bold',
    },
});
