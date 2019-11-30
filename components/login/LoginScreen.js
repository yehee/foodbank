import React, { Component } from 'react';
import { Button, View, TextInput } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    onChangeText = (value, mode) => {
        this.setState({ [mode]: value });
    }

    render() {
        const { onChangeText } = this;
        const { navigate } = this.props.navigation;
        const { username, password } = this.state;
        return (
            <View>
                <Input
                    autoFocus
                    autoCapitalize='none'
                    placeholder='Username'
                    onChangeText={text => onChangeText(text, 'username')}
                    leftIcon={<Icon name='user' type='feather' />}
                    value={username} />
                <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={text => onChangeText(text, 'password')}
                    leftIcon={<Icon name='lock' />}
                    value={password} />
                <Button
                    title="Login"
                    onPress={() => navigate('Home')}
                />
            </View>
        );
    }
}
