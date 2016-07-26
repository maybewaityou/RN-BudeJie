/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import LoginButton from '../components/LoginButton';
import LoginContainer from '../../common/login/container/LoginContainer';
import {
    View,
    Image,
    Text,
    Modal
} from 'react-native';

class FriendTrendsView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType={this.props.animationType}
                    transparent={this.props.transparent}
                    visible={this.props.modalVisible}
                    onShow={this.props.handleOnShow}
                >
                    <LoginContainer
                        canFocus={this.props.canFocus}
                    />
                </Modal>
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
                    onPress={this.props.loginOrRegister}
                />
            </View>
        );
    }
}

export default FriendTrendsView;
