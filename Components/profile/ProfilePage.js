import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ProfilePage extends Component {
    static navigationOptions = {
        title: 'Profile',
        headerStyle: {
            backgroundColor: '#F87A00',
            borderBottomWidth: 0,
        },
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{
                height: '100%'
            }}>
                <View>
                    <Text style={styles.header}>Profile</Text>
                </View>
                <View style={styles.view}>
                    <Image style={styles.profile} source={require('../../assets/profile-big.png')} />
                    <View>
                        <Text style={styles.title}>John Smith</Text>
                        <Text style={styles.info}>Line Cook</Text>
                        <Text style={styles.info}>Joined Nov 2019</Text>
                    </View>
                </View>
                <View style={styles.view2}>
                    <View>
                        <Text style={styles.subTitles}>YOUR FOOD BANK</Text>
                        <Text>Phone: 604-876-3601</Text>
                        <Text>1150 Raymur Avenue</Text>
                        <Text>Vancouver, Canada</Text>
                    </View>
                    <Image style={styles.logo} source={require('../../assets/profile-big.png')} />
                </View>
                <View style={styles.buttonView}>

                    <Button style={styles.button} title='Change My Location' />
                </View>
                <View style={styles.view3}>
                    <Text style={styles.subTitles}>DONATION HISTORY</Text>
                    <Text style={styles.food}>10 X Baby Formula</Text>
                    <Text style={styles.food}>20 X Canned Vegetable</Text>
                    <Text style={styles.food}>5 X Dried Pasta</Text>
                    <Text style={styles.food}>10 X Canned Protein</Text>
                    <Text style={styles.food}>5 X Canned Soup</Text>
                </View>
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

    view3: {
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,

    },

    buttonView: {
        paddingRight: 100,
        paddingLeft: 20,
    },

    logo: {
        marginTop: 0,
    },

    button: {
        paddingRight: 200,
        width: 60,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 25,
        marginTop: 15,


    },
    profile: {
        paddingRight: 0,
        marginRight: 0,
        marginTop: 5,
        marginLeft: 30,

        width: 130,
        height: 130,
    },
    view: {
        flexDirection: 'row',
    },
    header: {
        marginTop: 80,
        marginLeft: 30,
        fontSize: 50,
        fontWeight: 'bold',
        color: '#008391',
    },
    info: {
        marginLeft: 27,

    },

    subTitles: {

        fontSize: 20,
        fontWeight: 'bold',
    },

    view2: {
        marginTop: 25,
        marginLeft: 30,
        marginRight: 30,
        flexDirection: 'row',
    },

    food: {
        marginTop: 3,
    },
});
