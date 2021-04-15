import {Color} from '../../common/styles/index'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default (styles = {
  styleLogo: {
    resizeMode: 'contain',
    width: wp('25%'), 
    height: hp('25%')
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.WHITE,
  },
  info : {
    flex: 1,
    backgroundColor : Color.WHITE
  },
  viewinput : {
    flex: 1, justifyContent: "center", alignItems: 'center'
  },
  viewbtn : {
    flex: 1, flexDirection: "column-reverse",marginBottom:hp('6%')
  }
});
module.exports = styles;
