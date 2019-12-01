import React, { Component } from 'react';
import { View } from 'react-native';
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
                    // backgroundColor: '#36353A',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Input
                    // autoFocus
                    autoCapitalize='none'
                    placeholder='Username'
                    onChangeText={text => onChangeText(text, 'username')}
                    leftIcon={<Icon name='user' type='feather' />}
                    value={username}
                    inputContainerStyle={{
                        borderColor: 'black',
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
                    leftIcon={<Icon name='lock' />}
                    value={password}
                    inputContainerStyle={{
                        borderColor: 'black',
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
                        backgroundColor: 'red',
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
