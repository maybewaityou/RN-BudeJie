/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import Button from '../../../components/Button';
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
                    animationType='slide'
                    transparent={false}
                    visible={this.props.modalVisible}
                    onShow={this.props.onShow}
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
                <Button
                    title='立即登录/注册'
                    image={Images.loginBackgroundIcon}
                    highlightImage={Images.loginBackgroundClickedIcon}
                    titleColor='red'
                    highlightTitleColor='white'
                    style={{marginTop: 30}}
                    imageStyle={{ justifyContent: 'center', width: 243, height: 48 }}
                    onPress={this.props.loginOrRegister}
                />
            </View>
        );
    }
}

export default FriendTrendsView;
