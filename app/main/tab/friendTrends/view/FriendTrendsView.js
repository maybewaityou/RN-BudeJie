/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import Images from '../../../constant/Images';
import LoginButton from '../components/LoginButton';
import LoginComponent from '../../../components/LoginComponent';
import {
    View,
    Image,
    Text,
    Modal
} from 'react-native';

class FriendTrendsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            animationType: 'slide',
            modalVisible: false,
            transparent: false,
        };
    }

    onPress() {
        this.setState({modalVisible: true});
    }

    close() {
        this.setState({modalVisible: false});
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                >
                    <LoginComponent
                        close={this.close.bind(this)}
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
                    onPress={this.onPress.bind(this)}
                />
            </View>
        );
    }
}

export default FriendTrendsView;
