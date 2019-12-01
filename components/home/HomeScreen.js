import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    options = [];

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    title="Dashboard"
                    onPress={() => navigate('Dashboard')}
                />
                <Button
<<<<<<< HEAD
                    title="GuestPage"
                    onPress={() => navigate('GuestPage')}
                />
                 <Button
                    title="ProfilePage"
                    onPress={() => navigate('ProfilePage')}
                /> 
=======
                    title="Inventory"
                    onPress={() => navigate('Inventory')}
                />
                <Button
                    title="Login"
                    onPress={() => navigate('Login')}
                />
>>>>>>> 2ced090d308291d563a7ef1768a7dfa5aff25905
            </View>
        );
    }
}
