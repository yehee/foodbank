import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class profilePage extends Component {
    render(){
        return(
            <View>
                <Text style={styles.title}>Roy Hwang</Text>
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