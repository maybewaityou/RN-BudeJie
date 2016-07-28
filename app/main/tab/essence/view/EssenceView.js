/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import {
    View,
    Text
} from 'react-native';

class EssenceView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.props.onPress}>
                    klasjdkl;asjdl;kj
                </Text>

            </View>
        );
    }
}

export default EssenceView;
