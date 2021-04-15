import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash/index';
import Home from '../screens/home/index';
import Profile from '../screens/profile/index';
import News from '../screens/search/index';
import { View, Text, SafeAreaView, Image, Pressable, Platform, DeviceEventEmitter } from 'react-native';
import styles from './style'
import { Color } from '../common/styles';
import image from '../common/helper/Images'
import Program from '../screens/star/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BottomTab = createBottomTabNavigator();

const MyTabs = () => {

    return (
        <View style={{ flex: 1 }}>
            <BottomTab.Navigator initialRouteName='Home'

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ?  image.playred :image.play
                        } else if (route.name === 'star') {
                            iconName = focused ? image.starred : image.star 
                        }
                        else if (route.name === 'search') {
                            iconName = focused ? image.searchred : image.search
                        }
                        else if (route.name === 'profile') {
                            iconName = focused ? image.userred : image.user
                        }

                        // You can return any component that you like here!
                        return <Image source={iconName} style={{ width: wp('6%'), height: wp('6%'),marginTop: wp('6%') }} resizeMode='contain' />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    style: { height: hp('12%'), justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgba(245, 245, 245, 0.1)' },
                    labelStyle: { fontSize: 12 },
                }}
            >
                <BottomTab.Screen name="star" options={{ tabBarLabel: '' }} component={Program} />
                <BottomTab.Screen name="Home" options={{ tabBarLabel: '', }} component={Home} />
                <BottomTab.Screen name="search" options={{ tabBarLabel: '' }} component={News} />
                <BottomTab.Screen name="profile" options={{ tabBarLabel: '' }} component={Profile} />
            </BottomTab.Navigator>
        </View>

    );
}

const Stack = createStackNavigator();

class AppNavigator extends React.Component {

    constructor() {
        super()
        this.state = { pause: true, check: false, url: "" }
    }

    async componentDidMount() {
    }
    render() {
        return (
            // <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.info}>
                <Stack.Navigator screenOptions={{}} initialRouteName={'splash'}>
                    <Stack.Screen name='splash' component={Splash} options={{ title: 'Splash', headerShown: false, }} />
                    <Stack.Screen name='tabs' component={MyTabs} options={{ title: 'All Tasks', headerShown: false, headerStyle: { backgroundColor: Color.backgroundColor }, headerTitleStyle: { color: Color.WHITE } }} />
                    {/* <Stack.Screen name='news' component={Add} options={{ title: 'Add your Task', headerShown: true, headerTitleStyle: { color: Color.WHITE }, headerStyle: { backgroundColor: Color.backgroundColor, }, headerBackTitleStyle: { color: Color.WHITE }, headerTintColor: Color.WHITE }} /> */}
                </Stack.Navigator>
            </View>
            // </SafeAreaView >
        );
    }
}


export default AppNavigator;