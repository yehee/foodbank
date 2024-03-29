import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    title="Dashboard"
                    onPress={() => navigate('Dashboard')}
                />
                <Button
                    title="GuestPage"
                    onPress={() => navigate('GuestPage')}
                />
                <Button
                    title="ProfilePage"
                    onPress={() => navigate('Profile')}
                />
                <Button
                    title="Inventory"
                    onPress={() => navigate('Inventory')}
                />
                <Button
                    title="Login"
                    onPress={() => navigate('Login')}
                />
                <Button
                    title="Achievements"
                    onPress={() => navigate('Achievements')}
                />
            </View>
        );
    }
}
