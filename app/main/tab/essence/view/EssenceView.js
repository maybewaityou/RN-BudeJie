/* jshint esversion: 6 */

import React from 'react';
import styles from '../../../../styles/Main';
import { BackButtonComponent } from '../../../components/title/Title';
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
                    klasjdkl;asjdl;kj
                </Text>


            </View>
        );
    }
}

export default EssenceView;
