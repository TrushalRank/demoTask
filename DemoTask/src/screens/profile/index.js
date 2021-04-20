import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, FlatList, Button, Platform, DeviceEventEmitter, ScrollView } from 'react-native';
import style from './style'
// import Array from '../../../Array'
import image from '../../common/helper/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { color } from 'react-native-reanimated';
import Arr from '../../../arr'
import { Color, Constants } from '../../common/styles';

export default class Profile extends React.Component {

    constructor() {
        super()
        this.state = { darkmode: true }
    }

    render() {
        return (
            <SafeAreaView style={style.info}>
                <View style={[style.info, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={{ fontSize: Constants.EXTRA_LARGE, fontFamily: Constants.FONT_BOLD }}>Profile</Text>
                </View>
            </SafeAreaView>
        )
    }
}

