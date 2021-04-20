import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ImageBackground, FlatList, TouchableHighlight, KeyboardAvoidingView, ScrollView, Pressable, Modal, TextInput, Platform } from 'react-native';
import style from './style'
// import Array from '../../../Array'
import image from '../../common/helper/Images'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { color } from 'react-native-reanimated';
import Arr from '../../../arr'
import { Color, Constants } from '../../common/styles';
import { Heder } from '../../components';
import { SliderBox } from "react-native-image-slider-box"
import FireBaseSetup from '../../components/Firebase'
import { color } from 'react-native-reanimated';

const { auth, Firebase } = FireBaseSetup();

const imagearr = [
    'https://www.freecodecamp.org/news/content/images/size/w2000/2020/01/1_MLyNd9et367llWpgMzsTIg.png',
    "https://images.news18.com/ibnlive/uploads/2020/04/1586930283_learning-to-code.jpg?impolicy=website&width=534&height=356",
    "https://i.pinimg.com/originals/b2/61/0a/b2610a368bbde865128b88afd893a8d4.png",
    'https://office365.mcmaster.ca/app/uploads/2020/08/Microsoft-learning.png',
];


export default class Home extends React.Component {

    constructor() {
        super()
        this.state = { message: [], dev: [], all: [], search: '', searcharr: [], searchvisible: false }
    }
    componentDidMount() {
        // Firebase.database().ref('Userdata/development').push({
        //     url: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/72/459490118611e4b5dbdb3bb11a3c05/_____-v4.png?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF',
        //     title: 'Computer Organization',
        //     dis: 'Founded in 1898, Peking University (PKU) was the first national comprehensive university in China. For the past 115 years, with its hundreds of thousands of outstanding alumni, Peking University has made prominent contributions in the humanities and sciences to further Chinas prosperity and progress.',
        //     price: '159',
        //     star: "4.8"
        // })
        Firebase.database()
            .ref('Userdata/new')
            .once('value')
            .then(snapshot => {
                this.setState({ message: Object.values(snapshot.val()), all: Object.values(snapshot.val()) })
            })
        Firebase.database()
            .ref('Userdata/development')
            .once('value')
            .then(snapshot => {
                this.setState({ dev: Object.values(snapshot.val()) })
                Object.values(snapshot.val()).map((che) => this.state.all.push(che))
                // this.state.all.push(Object.values(snapshot.val()))
            })
    }

    renderView = ({ item, index }) => {
        return (
            <View style={[style.firstlist, { shadowColor: Platform.OS == 'android' ? 'black' : 'silver' }]} >
                <Image source={item.url} style={style.firstlistimage} />
                <Text style={style.textfirst}>{item.title}</Text>
            </View>
        )
    }

    renderViewForNew = ({ item, index }) => {
        return (
            <Pressable onPress={() => this.props.navigation.navigate("detail", { item: item })}>
                <View style={[style.secondlist, { flexDirection: 'row', shadowColor: Platform.OS == 'android' ? 'black' : 'silver' }]} >
                    <View style={style.semiviewsec}>
                        <Image source={{ uri: `${item.url}` }} style={{ flex: 1, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                    </View>
                    <View style={style.semisemisec}>
                        <Text numberOfLines={2} style={style.sectext}>{item.title}</Text>
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

    renderViewForDev = ({ item, index }) => {
        return (
            <Pressable onPress={() => this.props.navigation.navigate("detail", { item: item })}>
                <View style={[style.secondlist, { flexDirection: 'row', shadowColor: Platform.OS == 'android' ? 'black' : 'silver' }]} >
                    <View style={style.semiviewsec}>
                        <Image source={{ uri: `${item.url}` }} style={{ flex: 1, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                    </View>
                    <View style={style.semisemisec}>
                        <Text numberOfLines={2} style={style.sectext}>{item.title}</Text>
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

    renderViewForSer = ({ item, index }) => {
        return (
            <View style={[style.secondlist, { flexDirection: 'row', shadowColor: Platform.OS == 'android' ? 'black' : 'silver', width: wp('88%') }]} >
                <View style={style.semiviewsec}>
                    <Image source={{ uri: `${item.url}` }} style={{ flex: 1, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                </View>
                <View style={style.semisemisec}>
                    <Text numberOfLines={2} style={style.sectext}>{item.title}</Text>
                    <View style={style.undersemi}>
                        <View style={style.undermain}>
                            <Text numberOfLines={1} style={style.pricetext}>${item.price}.90</Text>
                        </View>
                        <Text numberOfLines={1} style={style.startext}>{item.star}</Text>
                        <Image source={image.star} style={style.secimg} />
                    </View>
                </View>
            </View>
        )
    }

    handleOnSeachKeyword = (searchStr) => {
        this.setState({ search: searchStr })
        if (searchStr.length > 0) {
            const searchfilter = this.searchFilter(searchStr)
            this.setState({ searcharr: searchfilter })
        } else if (searchStr.length == 0) {
            this.setState({ searcharr: [] })
        }
    }

    //Search filter on All Contacts
    searchFilter = (searchStr) => {
        let filterArray = []
        this.state.all.filter(function (el) {
            if (el.title != null) {
                if ((el.title.replace(/\s+/g, "")).toLowerCase().includes(searchStr.toLowerCase().replace(/\s+/g, ""))) {
                    filterArray.push(el)
                }
            }
        });
        return filterArray
    }

    render() {
        return (
            <KeyboardAvoidingView style={style.info} behavior={(Platform.OS === 'ios') ? "padding" : null}>
                <SafeAreaView style={style.info}>
                    <ScrollView style={style.info} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                        <View style={style.info}>
                            <Heder NotBtn={() => this.setState({ searchvisible: true })} />
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
                                <Text style={style.cattext}>Categories</Text>
                                <Text style={style.seeall}>See all</Text>
                            </View>
                            <View>
                                <FlatList
                                    data={Arr}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    style={{ marginLeft: wp('3%'), height: wp('20%') }}
                                    renderItem={(item, index) => this.renderView(item, index)}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                            <View style={style.catestyle}>
                                <Text style={style.devtext}>Newest courses in Design</Text>
                                <Pressable onPress={() => this.props.navigation.navigate('courses', { check: 1 })}>
                                    <Text style={style.seeall}>See all</Text>
                                </Pressable>
                            </View>
                            <View>
                                <FlatList
                                    data={this.state.message}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    style={{ marginLeft: wp('3%'), }}
                                    renderItem={(item, index) => this.renderViewForNew(item, index)}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                            <View style={style.catestyle}>
                                <Text style={style.devtext}>Development courses </Text>
                                <Pressable onPress={() => this.props.navigation.navigate('courses', { check: 2 })}>
                                    <Text style={style.seeall}>See all</Text>
                                </Pressable>
                            </View>
                            <View>
                                <FlatList
                                    data={this.state.dev}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    style={{ marginLeft: wp('3%'), }}
                                    renderItem={(item, index) => this.renderViewForDev(item, index)}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                            </View>
                        </View>

                        <Modal transparent={true} visible={this.state.searchvisible}>
                            <View style={{ flex: 1, marginTop: Platform.OS == 'android' ? hp('5%') : hp('12%'), marginBottom: hp('10%'), alignItems: 'center', }}>
                                <View style={[style.modalview, { height: '100%' }]}>
                                    <View style={{ flexDirection: 'row', padding: 10 }}>
                                        <TextInput
                                            style={[style.textinput, { padding: 10 }]}
                                            onChangeText={text => this.handleOnSeachKeyword(text)}
                                            value={this.state.search}
                                            placeholder="search here"
                                        />
                                        <Pressable style={{ flex: 1, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                                            onPress={() => this.setState({ searchvisible: false, search: '', searcharr: [] })}>
                                            <Text style={style.cattext}>Close</Text>
                                        </Pressable>
                                    </View>
                                    {this.state.search.length != 0 && this.state.searcharr.length != 0 ?
                                        <View style={{ flex: 1 }}>
                                            <FlatList
                                                data={this.state.searcharr}
                                                showsVerticalScrollIndicator={false}
                                                style={{ marginLeft: wp('3%') }}
                                                renderItem={(item, index) => this.renderViewForSer(item, index)}
                                                keyExtractor={(item, index) => index.toString()}
                                            />
                                        </View> :
                                        this.state.search.length != 0 && this.state.searcharr.length == 0 ?
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={style.cattext}>No data available</Text>
                                            </View> : null
                                    }

                                </View>
                            </View>
                        </Modal>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>
        )
    }
}
