import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
    };

    options = [];

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Dashboard Screen</Text>
            </View>
        );
    }
}
