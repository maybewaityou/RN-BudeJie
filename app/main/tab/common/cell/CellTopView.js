import React, { Component, PropTypes } from 'react';
import Images from '../../../constant/Images';
import Button from '../../../components/Button';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

class CellTopView extends Component {
    render() {
        return (
            <View style={[styles.cellLayout, this.props.style]}>
                <View style={[styles.topView, {width: this.props.width - 20 }]}>
                    <Image source={{uri: this.props.data.profile_image}} style={styles.headImage}/>
                    <View style={styles.nameLayout}>
                        <Text style={styles.name}>{this.props.data.name}</Text>
                        <Text style={styles.createTime}>{this.props.data.created_at}</Text>
                    </View>
                    <Button
                        image='cellmorebtnnormal'
                        highlightImage='cellmorebtnclick'
                        imageStyle={styles.moreButtonBackgroundImage}
                        style={styles.moreButton}
                        onPress={this.props.onPress}
                    />
                </View>
                <Text style={[styles.contentText, { width: this.props.width - 20 }]}>{this.props.data.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cellLayout: {
        alignItems: 'flex-start',
    },
    topView: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        height: 50,
    },
    headImage: {
        borderRadius: 25,
        width: 50,
        height: 50,
    },
    nameLayout: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    name: {
        fontSize: 16,
        flex: 1
    },
    createTime: {
        fontSize: 14,
        flex: 1
    },
    moreButtonBackgroundImage: {
        width: 24,
        height: 20
    },
    moreButton: {
        position: 'absolute',
        right: 0,
    },
    contentText: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    }
});

export default CellTopView;
