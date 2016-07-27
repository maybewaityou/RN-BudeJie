/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import HelloPage from '../../../../example/router/components/HelloPage';
import {
    View,
    Text
} from 'react-native';

class EssenceView extends React.Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={() => {
                    this.props.toRoute({
                        component: HelloPage
                    });
                }}>
                    alsdkl';askd';askd
                </Text>
            </View>
        );
    }
}

export default EssenceView;
