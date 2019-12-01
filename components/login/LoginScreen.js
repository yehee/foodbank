import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

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
            <View
                style={{
                    backgroundColor: '#36353A',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image
                    source={require('../../assets/logo-foodbank.png')}
                    style={{
                        // width: 100,
                        height: 150,
                        resizeMode: 'contain',
                    }}
                />
                <Input
                    // autoFocus
                    autoCapitalize='none'
                    placeholder='Username'
                    onChangeText={text => onChangeText(text, 'username')}
                    leftIcon={<Icon name='user' type='feather' color='white' />}
                    value={username}
                    inputStyle={{
                        color: 'white',
                        paddingLeft: 10
                    }}
                    inputContainerStyle={{
                        borderColor: 'white',
                        borderWidth: 1,
                        borderRadius: 50,
                        padding: 5,
                        marginVertical: 10,
                        marginHorizontal: 5,
                    }}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={text => onChangeText(text, 'password')}
                    leftIcon={<Icon name='lock' color='white' />}
                    value={password}
                    inputStyle={{
                        color: 'white',
                        paddingLeft: 10
                    }}
                    inputContainerStyle={{
                        borderColor: 'white',
                        borderWidth: 1,
                        borderRadius: 50,
                        padding: 5,
                        marginVertical: 10,
                        marginHorizontal: 5,
                    }}
                />
                <Button
                    title="Sign In"
                    onPress={() => navigate('Dashboard')}
                    buttonStyle={{
                        backgroundColor: '#F87A00',
                        borderRadius: 50,
                        padding: 5,
                        paddingVertical: 12.5,
                        marginVertical: 10,
                        marginHorizontal: 15,
                        width: 350
                    }}
                    titleStyle={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                    }}
                />
                <Button
                    title="Continue As Guest"
                    onPress={() => navigate('Dashboard')}
                    buttonStyle={{
                        backgroundColor: '#F87A00',
                        borderRadius: 50,
                        padding: 5,
                        paddingVertical: 12.5,
                        marginVertical: 10,
                        marginHorizontal: 15,
                        width: 350
                    }}
                    titleStyle={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                    }}
                />
            </View>
        );
    }
}
