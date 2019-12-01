import React, { Component } from "react";

export default class BottomNavigationTabs extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
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
                <Icon name='sheriff-badge' type='foundation' onPress={() => navigate('Achievements')} />
                <Icon name='user' type='feather' onPress={() => navigate('Profile')} />
            </View>
        );
    }
}
