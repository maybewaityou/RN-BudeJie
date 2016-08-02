import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class CommentView extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    alksdjlasdja;lsdj
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CommentView;
