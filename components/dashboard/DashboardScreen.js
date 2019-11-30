import React, { Component } from 'react';
import { View } from 'react-native';

export default class DashboardScreen extends Component {
    static navigationOptions = {
        title: 'Dashboard',
    };

    options = [];

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <p>Dashboard Screen</p>
            </View>
        );
    }
}
