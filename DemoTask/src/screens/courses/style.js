import { Color, Constants } from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  info: {
    flex: 1, backgroundColor: Color.WHITE
  },
  boxstyle: {
    position: "absolute",
    bottom: 0,
    padding: 0,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingVertical: 10
  },
  dotstyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  },
  catestyle: {
    height: hp('4%'), marginVertical: hp('1.5%'),
    marginHorizontal: wp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between', alignItems: 'center'
  },
  firstlist: {
    width: wp('17%'), height: wp('17%'), marginHorizontal: wp('2%'), borderRadius: 10, backgroundColor: 'white',
    shadowColor: 'silver',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5, justifyContent: 'center', alignItems: 'center'
  },
  firstlistimage: { width: wp('6.5%'), height: wp('6.5%'), marginBottom: wp('1%'), tintColor: 'tomato' },
  secondlist: {
    backgroundColor: 'white',
    shadowColor: 'silver',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    height: hp('12%'),
    elevation: 5, marginHorizontal: wp('5%'),
    marginVertical: hp('1%'),

  },
  semiviewsec: {
    backgroundColor: 'tomato', width: wp('30%'),
    borderTopLeftRadius: 10, borderBottomLeftRadius: 10
  },
  semisemisec: {
    width: '55%', justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '3%',
  },
  undersemi: {
    width: '100%',
    marginTop: hp('2%'),
    flexDirection: 'row', alignItems: 'center'
  },
  undermain: {
    width: '50%',
    justifyContent: 'center', alignItems: 'center',
    padding: wp('0.8%'), borderRadius: 5,
    backgroundColor: 'tomato'
  },
  secimg:{width: wp('3%'), height: wp('3%'), tintColor: 'gold'},
  textfirst: { fontSize: Constants.SMALL, fontFamily: Constants.FONT_REGULAR },
  sectext: { fontSize: Constants.NORMAL, fontFamily: Constants.FONT_REGULAR },
  startext: { fontSize: Constants.SMALL, fontFamily: Constants.FONT_REGULAR,marginLeft:wp('3.5%') },
  pricetext: { fontSize: Constants.SMALL, fontFamily: Constants.FONT_REGULAR }  ,
  cattext: { fontSize: Constants.NORMAL, fontFamily: Constants.FONT_REGULAR },
  seeall: { fontSize: Constants.NORMAL, fontFamily: Constants.FONT_REGULAR, color: 'tomato' },
  devtext: { fontSize: Constants.NORMAL, fontFamily: Constants.FONT_REGULAR }

});
module.exports = styles;