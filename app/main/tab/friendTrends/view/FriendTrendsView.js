/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import LoginButton from '../components/LoginButton';
import {
    View,
    Image,
    Text
} from 'react-native';

class FriendTrendsView extends React.Component {
    constructor(props) {
        super(props);


    }

    onPress() {
        console.log('== 登录 ==');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: Images.headerCryIcon}} style={{ width: 48, height: 48, marginBottom: 10 }}/>
                <View style={{alignSelf: 'center'}}>
                    <Text style={styles.commonText}>
                        快快登录吧, 关注百思最in牛人
                    </Text>
                    <Text style={styles.commonText}>
                        好友动态让你过把瘾~
                    </Text>
                    <Text style={styles.commonText}>
                        欧耶~~~~!
                    </Text>
                </View>
                <LoginButton
                    onPress={this.onPress.bind(this)}
                />
            </View>
        );
    }
}

export default FriendTrendsView;
