import { Color, Constants } from '../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
    info: {
        flex: 1, backgroundColor: Color.backgroundColor
    }, bottom: {
        flex: 0.2, backgroundColor: Color.backgroundColor, justifyContent: 'center', alignItems: 'center'
        ,flexDirection:'row'
    },
    checkstyle: {
        width: wp('20%'), height: hp('6%'),tintColor: Color.BLACK
    },
    checkstyle1: {
        width: wp('15%'), height: hp('5%'),tintColor: Color.WHITE, marginHorizontal: wp('4%')
    },
    logo:{width:wp('6%'),height:wp('6%'),marginBottom:wp('5%'),marginTop:wp('1%')}

});
module.exports = styles;