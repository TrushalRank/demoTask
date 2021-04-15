import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, FlatList, TouchableHighlight, DeviceEventEmitter, ScrollView } from 'react-native';
import style from './style'
// import Array from '../../../Array'
import image from '../../common/helper/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { color } from 'react-native-reanimated';
import Arr from '../../../arr'
import { Color, Constants } from '../../common/styles';
import { Heder } from '../../components';
import { SliderBox } from "react-native-image-slider-box"

const imagearr = [
    'https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/1_MLyNd9et367llWpgMzsTIg.png',
    "https://images.news18.com/ibnlive/uploads/2020/04/1586930283_learning-to-code.jpg?impolicy=website&width=534&height=356",
    "https://i.pinimg.com/originals/b2/61/0a/b2610a368bbde865128b88afd893a8d4.png",
    'https://office365.mcmaster.ca/app/uploads/2020/08/Microsoft-learning.png'
];

export default class login extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    renderView = ({ item, index }) => {
        return (
            <View >
                <Text>159</Text>
                <Image source={{ uri: item.uri }} style={{ width: 15, height: 15 }} />
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }}>
                <SafeAreaView style={style.info}>
                    <View style={style.info}>
                        <Heder />
                        <SliderBox
                            // ImageComponent={FastImage}
                            images={imagearr}
                            sliderBoxHeight={200}
                            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                            dotColor="#FFEE58"
                            inactiveDotColor="#90A4AE"
                            paginationBoxVerticalPadding={20}
                            autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            paginationBoxStyle={style.boxstyle}
                            dotStyle={style.dotstyle}
                            ImageComponentStyle={{ borderRadius: 15, width: '90%', marginTop: 5, }}
                            imageLoadingColor="#2196F3"
                        />
                        <View style={style.catestyle}>
                            <Text style={{ fontSize: Constants.NORMAL, fontFamily: Constants.FONT_REGULAR }}>Categories</Text>
                            <Text style={{ fontSize: Constants.NORMAL, fontFamily: Constants.FONT_REGULAR, color: 'tomato' }}>See all</Text>
                        </View>
                        <FlatList
                            data={Arr}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            // refreshControl={
                            //     <RefreshControl
                            //         refreshing={this.state.refreshing1}
                            //         onRefresh={() => this.onRefreshAvailbale()}
                            //         tintColor="white"
                            //         titleColor="white"
                            //     />
                            // }
                            // style={{ borderBottomLeftRadius: Matrics.ScaleValue(7), borderBottomRightRadius: Matrics.ScaleValue(7) }}
                            // ListFooterComponent={this.renderFooter(darkmode)}
                            renderItem={(item, index) => this.renderView(item, index)}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView>
        )
    }
}
