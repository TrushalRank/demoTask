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
  }

});
module.exports = styles;