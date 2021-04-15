import React from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import image from '../../common/helper/Images'
import { Color ,Constants} from '../../common/styles';

const Heder = ({ MsgBtn, NotBtn }) => {
    return (
        <SafeAreaView>
            <View style={s.mainview}>
                <View style={s.semiview}>
                    <TouchableOpacity style={s.Button1} onPress={MsgBtn}>
                        <Image style={s.image} source={image.msg} resizeMode='contain' />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={s.text}>Featured Courses</Text>
                    </View>
                    <TouchableOpacity style={s.Button2} onPress={NotBtn}>
                        <Image style={s.image} source={image.search} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const s = StyleSheet.create({
    Button1: {
        height: hp('4%'),
        width: wp('10%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button2: {
        height: hp('4%'),
        width: wp('10%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: hp('2.5%'), width: wp('5.5%'),tintColor:Color.GREY
    },
    mainview:{ width: wp('100%'), height: hp('6%'), flexDirection: 'row'},
    semiview:{ flex: 1, flexDirection: 'row', alignItems: 'center',marginHorizontal:wp('4.5%') },
    text: {width:'100%',textAlign:"center",fontSize:Constants.LARGE,fontFamily:Constants.FONT_SEMIBOLD}
})

export default Heder;



