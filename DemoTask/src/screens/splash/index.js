import React from 'react';
import { View,Text} from 'react-native';
import style from './style'
import { CommonActions } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Splash extends React.Component {

    Show = (nextView = null) => {
        this.props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: nextView }],
            }),
        )
        return
    }
    componentDidMount(){
        setTimeout(() => {
            this.Show('tabs')
        }, 3000);
    }

    render() {
        
        return (
            <View style={style.container}>
                <Text style={{justifyContent:'center',alignSelf:"center",fontSize:hp('4%'),fontWeight:'700'}}>Courses Demo</Text>
            </View>  
        )
    }
}
