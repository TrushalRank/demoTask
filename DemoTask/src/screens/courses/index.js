import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, FlatList, TouchableHighlight, DeviceEventEmitter, ScrollView, Pressable } from 'react-native';
import style from './style'
// import Array from '../../../Array'
import image from '../../common/helper/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { color } from 'react-native-reanimated';
import Arr from '../../../arr'
import FireBaseSetup from '../../components/Firebase'

const { auth, Firebase } = FireBaseSetup();

export default class login extends React.Component {

    constructor() {
        super()
        this.state = { message: [], dev: [] }
    }
    componentDidMount() {
        Firebase.database()
            .ref('Userdata/new')
            .once('value')
            .then(snapshot => {
                this.setState({ message: Object.values(snapshot.val()) })
            })
        Firebase.database()
            .ref('Userdata/development')
            .once('value')
            .then(snapshot => {
                this.setState({ dev: Object.values(snapshot.val()) })
            })
    }

    renderViewForNew = ({ item, index }) => {
        return (
            <Pressable onPress={() => this.props.navigation.navigate("detail", { item: item })}>
                <View style={[style.secondlist, { flexDirection: 'row', shadowColor: Platform.OS == 'android' ? 'black' : 'silver' }]} >
                    <View style={style.semiviewsec}>
                        <Image source={{ uri: `${item.url}` }} style={{ flex: 1, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                    </View>
                    <View style={style.semisemisec}>
                        <Text numberOfLines={2} style={style.sectext}>{item.dis}</Text>
                        <View style={style.undersemi}>
                            <View style={style.undermain}>
                                <Text numberOfLines={1} style={style.pricetext}>${item.price}.90</Text>
                            </View>
                            <Text numberOfLines={1} style={style.startext}>{item.star}</Text>
                            <Image source={image.star} style={style.secimg} />
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    }

    // _handleLoadMore = () => {
    //    if(this.props.route.params.check == 1){
    //        this.state.message.map((msg) => this.state.message.push(msg))
    //    }
    // }

    render() {
        return (
            // <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={style.info}>
                <View style={style.info}>
                    <View>
                        <FlatList
                            data={this.props.route.params.check == 1 ? this.state.message : this.state.dev}
                            showsVerticalScrollIndicator={false}
                            renderItem={(item, index) => this.renderViewForNew(item, index)}
                            keyExtractor={(item, index) => index.toString()}
                            // onEndReached={this._handleLoadMore}
                            // onEndReachedThreshold={0.5}
                        />
                    </View>
                </View>
            </SafeAreaView>
            // </ScrollView>
        )
    }
}
