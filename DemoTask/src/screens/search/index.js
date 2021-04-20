import React from 'react';
import { View, Text, TextInput, Button, SafeAreaView, KeyboardAvoidingView, ScrollView } from 'react-native';
import style from './style'
import { CommonActions } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import Array from '../../../Array'
import { Input, ButtonSet } from '../../components/index'
import { Constants } from '../../common/styles';

export default class Search extends React.Component {

    constructor() {
        super()
        this.state = { task: '', array: [] }
    }

    render() {
        return (
            <KeyboardAvoidingView style={style.info} behavior={(Platform.OS === 'ios') ? "padding" : null}>
                <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }}>
                    <SafeAreaView style={style.info}>
                        <View style={[style.info, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ fontSize: Constants.EXTRA_LARGE, fontFamily: Constants.FONT_BOLD }}>Search</Text>
                        </View>
                    </SafeAreaView>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}
