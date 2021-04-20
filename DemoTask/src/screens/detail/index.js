import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, FlatList, TouchableHighlight, DeviceEventEmitter, ScrollView, Pressable } from 'react-native';
import style from './style'
// import Array from '../../../Array'
import image from '../../common/helper/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { color } from 'react-native-reanimated';
import Arr from '../../../arr'
import FireBaseSetup from '../../components/Firebase'
import { Constants } from '../../common/styles';

const { auth, Firebase } = FireBaseSetup();

export default class Details extends React.Component {

    constructor() {
        super()
        this.state = { message: [], dev: [] }
    }
    // componentDidMount() {
    //     Firebase.database()
    //         .ref('Userdata/new')
    //         .once('value')
    //         .then(snapshot => {
    //             this.setState({ message: Object.values(snapshot.val()) })
    //         })
    // }
    render() {
        return (
            <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <SafeAreaView style={style.info}>
                    <View style={style.info}>
                        <View>
                            <Image source={{ uri: `${this.props.route.params.item.url}` }} resizeMode={'contain'} style={{ height: hp('30%'), width: '100%' }} />
                            <Text numberOfLines={2} style={style.devtext}>{this.props.route.params.item.title}</Text>
                            <View style={style.undersemi}>
                                <View style={style.undermain}>
                                    <Text numberOfLines={1} style={style.pricetext}>${this.props.route.params.item.price}.90</Text>
                                </View>
                                <Text numberOfLines={1} style={style.startext}>{this.props.route.params.item.star}</Text>
                                <Image source={image.star} style={style.secimg} />
                            </View>
                            <Text numberOfLines={2} style={[style.devtext, { marginVertical: 0, marginTop: hp('2.5%'), fontFamily: Constants.FONT_REGULAR }]}>Description: -</Text>
                            <Text numberOfLines={12} style={[style.devtext, { fontFamily: Constants.FONT_REGULAR,textAlign:'justify' }]}>{this.props.route.params.item.dis}</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}
