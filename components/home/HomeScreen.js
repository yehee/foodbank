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
                    title="Inventory"
                    onPress={() => navigate('Inventory')}
=======
                    title="Login"
                    onPress={() => navigate('Login')}
>>>>>>> 5480b2193eb89650e4bd159d837be55ec403ecdf
                />
            </View>
        );
    }
}
